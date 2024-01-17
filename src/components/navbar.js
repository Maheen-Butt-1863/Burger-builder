import React from "react";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: '#703b07' }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <div style={{ backgroundColor: 'white', padding: '5px', marginRight: '10px' }}>
              <img src="/main-logo.png" alt="Logo" style={{ width: '50px' }} />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Burger Builder
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {' '}
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {' '}
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {' '}
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
