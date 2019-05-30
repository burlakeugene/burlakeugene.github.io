import { combineReducers } from 'redux';
import appReducer from './appReducer';
import skillsReducer from './skillsReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
	routing: routerReducer,
	appReducer,
	skillsReducer
});