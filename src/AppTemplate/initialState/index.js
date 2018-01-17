/* A state that is not related to any specific module */
import common from './common'

/* Holding all loaded states */
const cache = {}

function importAll (requires) {
  requires.keys().forEach((key) => (cache[key] = requires(key)))
}

/* Load and cache all states from all folders (and sub folders) in folder './src' */
importAll(require.context('../../', true, /initialState\.js$/))

/* Combine all states into one object */
let state = { ...common }
Object.keys(cache).forEach((key) => (state = { ...state, ...cache[key].default }))

export default state
