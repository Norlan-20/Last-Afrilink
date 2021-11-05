import { createStore, combineReducers} from 'redux';
import connectUser  from './Reducers/connexionReducer';

let store = createStore( combineReducers({connectUser}) );

export default store;