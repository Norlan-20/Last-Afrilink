import { createStore, combineReducers} from 'redux';
import connectUser  from './Reducers/connexionReducer';
import panierReducer from './Reducers/panierReducer'

let store = createStore( combineReducers({connectUser,panierReducer}) );

export default store;