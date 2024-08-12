import React from 'react';

const Navbar = () => {
    const styles = {
        navbar: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
        },
        navLinks: {
          display: 'flex',
        },
        link: {
          color: 'white',
          textDecoration: 'none',
          padding: '6px',
        },
        loginForm: {
          display: 'flex',
        },
      };
  return (
    <nav className="navbar">
      <div className="logo">
        <img 
          src="public\logo192.png" 
          alt="Logo" 
        />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
