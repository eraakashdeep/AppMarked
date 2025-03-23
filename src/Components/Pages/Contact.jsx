import React, { useState } from "react";

const Contact = () => {
  const resetField = () => {
    const form = document.getElementById("appmarked-form");
    form.reset();
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5>Get In Touch</h5>
              <p className="mb-4">
                The contact form is currently inactive. Please contact on phone,
                mail or social-media.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">AppMarked,Chicago-IL</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+91 7608829869</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">support@appmarked.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4327.512444698837!2d80.17810250948644!3d12.620432297105136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53ab5250243c71%3A0xbb338ff75412f3f5!2sDhanalakshmi%20Srinivasan%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710127521636!5m2!1sen!2sin"
                frameBorder={0}
                style={{ minHeight: "300px", border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form
                id="appmarked-form"
                target="_blank"
                action="https://formsubmit.co/appmarked.learning@gmail.com"
                method="POST"
              >
                <h3 style={{ textAlign: "center", color: "CaptionText" }}>
                  REQUEST QUERY FOR DOUBT
                </h3>
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for you response"
                />
                <input type="hidden" name="_subject" value="APPMARKED" />
                <input
                  type="hidden"
                  name="_next"
                  // value="http://localhost:5173/"
                    value="https://www.appmarked.com/"
                />
                <input
                  type="hidden"
                  name="_replyto"
                  value="email"
                  placeholder="Email Address"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_cc" value="support@appmarked.com" />
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold" }}>Name</label>
                  <input
                    style={{
                      width: "100%",
                      height: "20px",
                      borderRadius: "5px",
                    }}
                    placeholder="Enter Full Name"
                    type="text"
                    name="Name"
                    required
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold" }}>Email</label>
                  <input
                    style={{
                      width: "100%",
                      height: "20px",
                      borderRadius: "5px",
                    }}
                    placeholder="Enter Correct Email"
                    type="email"
                    name="Email"
                    required
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold" }}>Phone No</label>
                  <input
                    style={{
                      width: "100%",
                      height: "20px",
                      borderRadius: "5px",
                    }}
                    placeholder="Enter Phone Number"
                    type="number"
                    name="Phone"
                    required
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <label style={{ fontWeight: "bold" }}>Subject Query</label>
                  <textarea
                    rows={10}
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                    }}
                    placeholder="Enter Your Query"
                    name="Subject"
                    required
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    style={{
                      borderRadius: "5px",
                      width: "30%",
                      height: "25px",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: "bold",
                      background: "#b4027b",
                    }}
                    onClick={resetField}
                  >
                    Clear
                  </button>
                  <button
                    style={{
                      borderRadius: "5px",
                      marginLeft: "10px",
                      width: "30%",
                      height: "25px",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: "bold",
                      background: "#b4027b",
                    }}
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
