import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      {console.log(post.imageUrl)}
      <img src={post.imageUrl} alt={post.title} />
      <h3>{post.title}</h3>
    </div>
  );
};

export default PostCard;
