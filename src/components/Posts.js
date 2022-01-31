import React from "react";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div>
      <h1>Loading</h1>
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}<hr></hr></li>
        
      ))}
    </ul>
  );
};
