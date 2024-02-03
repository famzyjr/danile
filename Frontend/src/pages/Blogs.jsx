// NewBlog.jsx

import React, { useState } from 'react';
import './Blog.css'; // Import the CSS file

const NewBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleLike = (blogId) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes, [blogId]: (prevLikes[blogId] || 0) + 1 };
      return updatedLikes;
    });
  };

  const handleCommentSubmit = (e, blogId) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      text: commentInput,
    };
    setComments((prevComments) => ({
      ...prevComments,
      [blogId]: [...(prevComments[blogId] || []), newComment],
    }));
    setCommentInput('');
  };

  const handleDeleteComment = (blogId, commentId) => {
    setComments((prevComments) => ({
      ...prevComments,
      [blogId]: prevComments[blogId].filter((comment) => comment.id !== commentId),
    }));
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
    setLikes((prevLikes) => {
      const { [blogId]: deletedLike, ...updatedLikes } = prevLikes;
      return updatedLikes;
    });
    setComments((prevComments) => {
      const { [blogId]: deletedComments, ...updatedComments } = prevComments;
      return updatedComments;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
      images: images.map(() => URL.createObjectURL(images[0])), // Use only the first image for display
    };

    setBlogs([...blogs, newBlog]);
    setLikes({ ...likes, [newBlog.id]: 0 });
    setComments({ ...comments, [newBlog.id]: [] });

    // Clear the form
    setTitle('');
    setContent('');
    setImages([]);
  };

  return (
    <div className="new-blog-container">
      <h1 className='h1'>Create a New Blog</h1>

      <form className="blog-form" onSubmit={handleSubmit}>
        <label className='title'>Title:</label>
        <input type="text" className="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label className='content'>Content:</label>
        <textarea value={content} className='content' onChange={(e) => setContent(e.target.value)} />

        <label>Images:</label>
        <input type="file" multiple onChange={handleImageUpload} />

        <button type="submit">Create Blog</button>
      </form>

      <div className="blogs-section">
        <h2>Recent Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-post">
              <div className="blog-header">
                <h3>{blog.title}</h3>
                <button className="delete" onClick={() => handleDeleteBlog(blog.id)}>
                  Delete
                </button>
              </div>
              <p>{blog.content}</p>
              <div className="blog-images">
                {blog.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>
              <div className="blog-actions">
                <button className="like" onClick={() => handleLike(blog.id)}>
                  Like ({likes[blog.id] || 0})
                </button>
              </div>
              <div className="blog-comments">
                <h4>Comments ({comments[blog.id] ? comments[blog.id].length : 0})</h4>
                <ul>
                  {comments[blog.id] &&
                    comments[blog.id].map((comment) => (
                      <li key={comment.id}>
                        <span>{comment.text}</span>
                        <button className="delete" onClick={() => handleDeleteComment(blog.id, comment.id)}>
                          Delete
                        </button>
                      </li>
                    ))}
                </ul>
                <form onSubmit={(e) => handleCommentSubmit(e, blog.id)}>
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Add a comment"
                  />
                  <button type="submit" className="comment">
                    Submit
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewBlog;
