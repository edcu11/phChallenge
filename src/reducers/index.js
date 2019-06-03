import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';
import loginReducer from '../Components/Login/reducer';
import homeReducer from '../Components/Home/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	login: loginReducer,
	home: homeReducer
});

export default rootReducer;