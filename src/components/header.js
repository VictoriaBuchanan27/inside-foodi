import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/profile">Profile</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/explore">Explore</Link>
        </li>
        <li className="nav-item">
           <Link className="nav-link" to="/search">Search</Link>
        </li>
        <li>
        <Link to='/'><img src={require('./foodi.png')} /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/upload">Upload</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

