import { combineReducers } from 'redux';
import appReducer from './appReducer';
import thunkTestReducer from './thunkTestReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	appReducer,
	thunkTestReducer
});