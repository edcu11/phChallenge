import * as types from './actionTypes';

import {
    CLEAR_SESSION,
    CLEAN_REDUCER
} from '../../constants/actionTypes';

const initState = {
    userData: {}
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return { ...state, userData:  action.userData };
        case CLEAN_REDUCER:
            return initState;
        case CLEAR_SESSION:
            return initState;
        default:
            return state;
    }
};

export default reducer;