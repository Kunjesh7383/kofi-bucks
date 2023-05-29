import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="home-page">
      <div className="content">
        <h1 className="title">Welcome to the Kofi Bucks</h1>
        <p className="description">Find your favorite coffee shops and drinks here.</p>
        <Link to='/order'>
        <button className="search-btn">Order Coffee here</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
