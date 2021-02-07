import React from "react";

const Error404Screen = () => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              404
            </li>
          </ol>
        </div>
      </nav>

      <div
        className="error-content text-center"
        style={{
          backgroundImage:
            "url(" + "assets/images/backgrounds/error-bg.jpg" + ")",
        }}
      >
        <div className="container">
          <h1 className="error-title">Error 404</h1>
          <p>We are sorry, the page you've requested is not available.</p>
          <a href="/" className="btn btn-outline-primary-2 btn-minwidth-lg">
            <span>BACK TO HOMEPAGE</span>
            <i className="icon-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404Screen;
