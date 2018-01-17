/* A list of actions that are not related to any specific module */
import * as common from './common'

/* Holding all loaded actions */
const cache = {}

function importAll (requires) {
  requires.keys().forEach((key) => (cache[key] = requires(key)))
}

/* Load and cache all actions from all folders (and sub folders) in folder './src' */
importAll(require.context('../../', true, /actions\.js$/))

/* Combine all actions into one object */
let actions = { ...common }
Object.keys(cache).forEach((key) => (actions = { ...actions, ...cache[key]}))

export default actions
