import React from "react";

const ContactScreen = () => {
  return (
    <div>
      <div
        className="page-header text-center"
        style={{
          backgroundImage: "url(" + "assets/images/page-header-bg.jpg" + ")",
        }}
      >
        <div className="container">
          <h1 className="page-title">
            Contact Us<span>Pages</span>
          </h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact us
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.500103823545!2d8.85994751576276!3d45.29832245251714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786e328de92df7f%3A0xbd53955262fcac36!2sVia%20Santa%20Maria%2C%2027029%20Vigevano%20PV!5e0!3m2!1sen!2sit!4v1612701682080!5m2!1sen!2sit"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-box text-center">
                <h3>Office</h3>
                <address>
                  1 New York Plaza, New York, <br />
                  NY 10004, USA
                </address>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-box text-center">
                <h3>Start a Conversation</h3>
                <div>
                  <a href="mailto:#">info@Molla.com</a>
                </div>
                <div>
                  <a href="tel:#">+1 987-876-6543</a>,{" "}
                  <a href="tel:#">+1 987-976-1234</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-box text-center">
                <h3>Social</h3>
                <div className="social-icons social-icons-color justify-content-center">
                  <a
                    href="#"
                    className="social-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon social-twitter"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon social-instagram"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon social-youtube"
                    title="Youtube"
                    target="_blank"
                  >
                    <i className="icon-youtube"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon social-pinterest"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-3 mb-5 mt-md-1" />
          <div className="touch-container row justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="text-center">
                <h2 className="title mb-1">Get In Touch</h2>
                <p className="lead text-primary">
                  We collaborate with ambitious brands and people; we’d love to
                  build something great together.
                </p>
                <p className="mb-3">
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                </p>
              </div>

              <form action="#" className="contact-form mb-2">
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="cname" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cname"
                      placeholder="Name *"
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label htmlFor="cemail" className="sr-only">
                      Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="cemail"
                      placeholder="Email *"
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label htmlFor="cphone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="cphone"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <label htmlFor="csubject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="csubject"
                  placeholder="Subject"
                />

                <label htmlFor="cmessage" className="sr-only">
                  Message
                </label>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="4"
                  id="cmessage"
                  required
                  placeholder="Message *"
                ></textarea>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-primary-2 btn-minwidth-sm"
                  >
                    <span>SUBMIT</span>
                    <i className="icon-long-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
