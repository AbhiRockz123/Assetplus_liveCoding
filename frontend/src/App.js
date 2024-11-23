import React, { useState, useEffect } from 'react';
import PostCard from './Posts/PostCard';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', imageUrl: '' });

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      .then(() => {
        setNewPost({ title: '', imageUrl: '' });
        return fetch('http://localhost:5000/api/posts')
          .then(res => res.json())
          .then(data => setPosts(data));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="app">
      <h1>Content Management Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={newPost.imageUrl}
          onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
          required
        />
        <button type="submit">Add Post</button>
      </form>
      <div className="post-gallery">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
