import React, { useState } from 'react';
import './Compose.css'; // Import your existing styles or create a new CSS file

const Compose = ({ onComposeSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both title and content are provided
    if (title.trim() === '' || content.trim() === '') {
      alert('Please provide both title and content.');
      return;
    }

    const newBlog = {
      title,
      content,
      date: new Date().toLocaleDateString(),
      // Add any other properties you need for a blog post
    };

    // Pass the new blog to the parent component
    onComposeSubmit(newBlog);

    // Clear the input fields after submitting
    setTitle('');
    setContent('');
  };

  return (
    <div className="compose-container">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Compose;
