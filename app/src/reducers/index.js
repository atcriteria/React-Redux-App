import { FETCHING_IMG_START, FETCHING_IMG_SUCCESS, FETCHING_IMG_FAIL, SET_TITLE } from '../actions'

const initialState = {
    imgSrc: 'https://i.imgur.com/pfqLYFI.gif',
    title: "Avocado",
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case (FETCHING_IMG_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case (FETCHING_IMG_SUCCESS):
            return({
                ...state,
                imgSrc: action.payload,
                isFetching: false
            });
        case (SET_TITLE):
            return({
                ...state,
                title: action.payload
            })
        case (FETCHING_IMG_FAIL):
            return({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}