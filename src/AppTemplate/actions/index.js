/* A list of actions that are not related to any specific module */
import * as common from './common'
import getInstance from 'utils/getInstance'

/* Holding all loaded actions */
const cache = {}

function wrapAsync (fn) {
  return (update, ...args) => {
    const updatePromise = (...args) => new Promise((resolve, reject) => {
      try {
        update(...args, resolve)
      } catch (error) {
        reject(error)
      }
    })

    return fn(updatePromise, ...args)
  }
}

function recursiveCreateAsyncObject (obj) {
  let asyncObj = {}

  Object.keys(obj).forEach((key) => {
    const item = obj[key]
    const instanceOf = getInstance(item)

    switch (instanceOf) {
      case 'Function':
        asyncObj[key] = item
        break

      case 'AsyncFunction':
        asyncObj[key] = wrapAsync(item)
        break

      case 'Object':
        asyncObj[key] = recursiveCreateAsyncObject(item)
        break
    }
  })

  return asyncObj
}

function importAll (requires) {
  /* Load & cache all modules */
  requires.keys().forEach((key) => (cache[key] = requires(key)))

  /* Convert all cached async functions into useable regular functions */
  Object.keys(cache).forEach((key) => (cache[key] = recursiveCreateAsyncObject(cache[key])))
}

/* Load and cache all actions from all folders (and sub folders) in folder './src' */
importAll(require.context('../../', true, /actions\.js$/))

/* Combine all actions into one object */
let actions = { ...common }
Object.keys(cache).forEach((key) => (actions = { ...actions, ...cache[key] }))

export default actions
