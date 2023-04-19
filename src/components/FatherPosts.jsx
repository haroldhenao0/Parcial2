import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from "./posts"
import Fetch from "../Redux/Fetch"

const FatherPosts = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post);
  
  useEffect(() => { dispatch(Fetch());}, [dispatch]);
  return (
    <div className="post-list-container">
      {post.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FatherPosts;
