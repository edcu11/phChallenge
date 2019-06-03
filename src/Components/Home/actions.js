import * as types from './actionTypes';
import axios from 'axios';

export const SearchVideos = (params) => (dispatch) => {
    return axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${params.text}&key=AIzaSyBVhMYwvD0RCQ0jf7GwtO7u_x2FTrgeoV0&maxResults=${
        params.resultCount}&pageToken=${params.nextPageToken}&type=video`
    ).then((response) => {
        dispatch({
            type: types.GET_VIDEOS,
            payload: response
        });
    })

}

export const SetVideo = (videoData) => (dispatch) => {
    return dispatch({
        type: types.SET_VIDEO,
        videoData: videoData
    });
}



