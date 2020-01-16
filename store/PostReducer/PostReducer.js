import { LOAD_POSTS, SAVE_POST, SAVE_GPS } from '../constants';

const defaultState = {
    posts: [],
    post: {},
    location: {}
};

const PostReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SAVE_POST:
            return {
                ...state,
                post: action.post
            }
        case SAVE_GPS:
            return {
                ...state,
                location: action.location
            }
        default: {
            return state
        }
    }
};

export default PostReducer;

