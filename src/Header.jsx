import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {

  const [isSignupVisible, setIsSignupVisible] = useState (false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
      <header>
        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Seinfeld Classic</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts/new">New Post</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        
        <Link to="/">All Posts</Link>  | 
        <Link to="/posts/new">New Post</Link>  | 
        <Link to="/about">About</Link>
        {localStorage.jwt === undefined ? (
          <>
          <li>
            <a href="/signup"> Signup </a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          </>
        ) : (
          <li>
            <a href="#logout">Logout</a>
          </li>
        )}
      </header>
  );
};
