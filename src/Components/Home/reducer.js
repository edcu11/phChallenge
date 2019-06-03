import * as types from './actionTypes';

import {
    CLEAR_SESSION,
    CLEAN_REDUCER
} from '../../constants/actionTypes';

const initState = {
    selectedVideo: {},
    videos: [],
    nextPageToken: null,
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
    }
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_VIDEOS:
            return {
                ...state,
                nextPageToken: action.payload.data.nextPageToken,
                pageInfo: action.payload.data.pageInfo,
                videos: action.payload.data.items
            };
        case types.SET_VIDEO:
            return {
                ...state,
                selectedVideo: action.videoData
            };
        case CLEAN_REDUCER:
            return initState;
        case CLEAR_SESSION:
            return initState;
        default:
            return state;
    }
};

export default reducer;