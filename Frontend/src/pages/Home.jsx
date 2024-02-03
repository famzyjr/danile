// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css'

const Home = () => {
  return (
    
    <div className="home-container">
      <header>
        <h1 className='h1'>Welcome, discover and share your stories🖐</h1>
        <p>Explore and share your thoughts with the world!</p>
      </header>

      <section className="categories">
        <h2>Categories</h2>
        {/* Links to different blog categories */}
        <ul className='ul'>
          <li>Technology</li>
          <li>Lifestyle</li>
          <li>Gaming</li>
          <li>Health</li>
        </ul>
      </section>

      <section className="write-blogs">
        <h2>Learn to Write Your Own Blogs</h2>
        <p>Discover the art of expressing your ideas through engaging blog posts. Start writing today! ✍ </p>
        <Link to ="/Signup" className="get-started-button">Get Started</Link>
        
      </section>

      <footer className='footer'>
        <p>&copy; 2024 Your Blog. All rights reserved.</p>        
  
      
        
      </footer>
    </div>
  );
};



export default Home;