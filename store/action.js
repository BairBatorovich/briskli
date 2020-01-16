import { LOAD_POSTS, SAVE_POST, SAVE_GPS } from './constants';

export const loadPosts = (posts) => {  
    return {
        type: LOAD_POSTS,
        posts
    } 
};
export const savePost = (post) => {  
    return {
        type: SAVE_POST,
        post
    } 
};
export const saveGps = (location) => {  
    return {
        type: SAVE_GPS,
        location
    } 
};
