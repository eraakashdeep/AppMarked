import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <p className="text-center">
          Feel free to reach out through any of the following methods:
        </p>
        <div className="text-center my-4">
          <a href="tel:+917608829869" target="_blank" className="mx-2">
            <i className="fas fa-phone"></i> Phone
          </a>
          <a href="https://wa.me/917608829869" target="_blank" className="mx-2">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="mailto:appmarked.us@gmail.com" target="_blank" className="mx-2">
            <i className="fas fa-envelope"></i> Gmail
          </a>
          <a href="https://www.linkedin.com/company/appmarked/" target="_blank" className="mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/appmarked/" target="_blank" className="mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/appmarked" target="_blank" className="mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://x.com/app_marked" target="_blank" className="mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.youtube.com/@AppMarked" target="_blank" className="mx-2">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <h5 className="text-center">Send us a message</h5>
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form my-3">
                <label for="Message">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
