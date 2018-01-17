import Restore from 'react-restore'

import Layout from './Layout'

import actions from './actions'
import initialState from './initialState'

const store = Restore.create(initialState, actions)
export default Restore.connect(Layout, store)
