


import { combineReducers, createStore } from 'redux';
import AuthReducer from '../reducers/Loginreducer'
import SideReducer from '../reducers/sideReducer';
import DocumentReducer from '../reducers/DocumentReducer';


const combinereducerredux=combineReducers(
    {
        Auth:AuthReducer,
        Side:SideReducer,
        Document:DocumentReducer

    }
)
const store = createStore(combinereducerredux);

export default store;