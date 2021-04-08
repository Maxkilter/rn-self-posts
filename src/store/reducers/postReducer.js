import { CREATE_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
      };

    case TOGGLE_BOOKED:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.booked = !post.booked;
        }
        return post;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((post) => post.booked),
      };

    case REMOVE_POST:
      const filterPosts = (posts) => {
        return posts.filter((post) => post.id !== action.payload);
      };
      return {
        ...state,
        allPosts: filterPosts(state.allPosts),
        bookedPosts: filterPosts(state.bookedPosts),
      };

    case CREATE_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };

    default:
      return state;
  }
};
