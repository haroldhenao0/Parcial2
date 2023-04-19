import React from 'react';

const Post = ({ posts }) => {
  return (
    <>
      <h2>{posts.title}</h2>
      <img src={posts.url}/>
    </>
  );
};

export default Post;