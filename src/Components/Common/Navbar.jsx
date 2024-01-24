import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import{ ReactComponent as HomeIcon } from '../Common/Utils/connectbordericon.svg'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-icon'>
            <HomeIcon/>
            <Link className='connect-border-link' to='/'><span>Connect Border</span></Link>
        </div>
        <div className='navbar-list-container'>
            <ul className='navbar-list'>
                <Link className='navbar-list-links' to='/community'>Community</Link>
                <Link className='navbar-list-links' to='/blogpost'>Blog Posts</Link>
                <Link className='navbar-list-links' to='/entrepreneurship'>Entrepreneurship</Link>
                <Link className='navbar-list-links' to='/events'>Events</Link>
                <Link className='navbar-list-links' to='/mentors'>Mentors</Link>
                <button className='btn-price'>Price</button>
                <div className="dropdown">
                <button className='btn-login'>Login</button>
                <div class="dropdown-content">
                   <a href="/">Mentor</a>
                   <a href="/">Mentee</a>
    
                </div>
                </div>
                
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
