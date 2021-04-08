import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";
import { DATA } from "../../data";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toggleBooked = (id) => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

export const createPost = (post) => {
  post.id = Date.now().toString();

  return {
    type: CREATE_POST,
    payload: post,
  };
};
