import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
// hacemos promesas
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// Siempre llamar redurce 
import pokeReducer from "./PokeDucks"

const rootReducer = combineReducers({
  // importante es el q vamos a consumir
  pokemones: pokeReducer
})

//  REDUX TOLS Extencion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function Store()  {
  // usaremos el MidDelware
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
 return store
}