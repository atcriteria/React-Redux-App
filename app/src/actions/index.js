import axios from 'axios';
import Key from '../key';
export const FETCHING_IMG_START = "FETCHING_IMG_START";
export const FETCHING_IMG_SUCCESS = "FETCHING_IMG_SUCCESS";
export const FETCHING_IMG_FAIL = "FETCHING_IMG_FAIL";
export const SET_TITLE = "SET_TITLE";

export const getImg = () => dispatch => {
    dispatch({type: FETCHING_IMG_START});
  axios
    .get(`https://api.giphy.com/v1/gifs/random?api_key=${Key}&tag=&rating=r`)
    .then(res => {
      console.log(res);
      dispatch({type: FETCHING_IMG_SUCCESS, payload: res.data.data.image_url});
      dispatch({type: SET_TITLE, payload: res.data.data.title})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: FETCHING_IMG_FAIL, payload: err.response.message})
    });
}