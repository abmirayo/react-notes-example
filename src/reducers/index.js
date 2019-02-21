import { combineReducers } from 'redux'
import * as notesReducers from './notes'

const reducer = combineReducers({
  ...notesReducers,
})

export default reducer
