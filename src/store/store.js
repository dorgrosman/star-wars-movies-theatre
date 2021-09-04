import { FilmListReducer } from './reducers/FilmReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    filmsReducer: FilmListReducer,
  })
  
  
  
  const store = createStore(rootReducer ,applyMiddleware(thunk))
  
  export default store;