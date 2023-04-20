import { Link } from "react-router-dom";

export function Header() {
  return (
      <header>
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
                  <Link to="/posts-index">All Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/posts-new">New Post</Link>
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
        <a href="#">Home</a> | 
        <Link to="/about">About</Link> | 
        <Link to="/posts-index">All Posts</Link> | 
        <Link to="/posts/new">New Post</Link> |
        <Link to="/signup">Signup</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/logout">Logout</Link>
      </header>
  );
};
