import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="row w-100">
            <div className="col-auto">
              <Link className="navbar-brand" to="/">Your Logo</Link>
            </div>
            <div className="col"></div>
            <div className="col-auto">
              <Link to='/login' className="btn logout-btn">Logout</Link>

            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
          <h1>Welcome to Your Application</h1>
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
