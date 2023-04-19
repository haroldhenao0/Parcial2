import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import PostsReduxer from "../Reduxer/PostsReduxer";

const Reducer = combineReducers({
  posts: PostsReduxer,
});

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;