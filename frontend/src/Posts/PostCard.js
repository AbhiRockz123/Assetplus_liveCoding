import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="post-card-image" 
        onError={(e) => e.target.src = 'https://via.placeholder.com/150'} // Fallback for broken images
      />
      <h2>{post.title}</h2>
    </div>
  );
};

export default PostCard;
