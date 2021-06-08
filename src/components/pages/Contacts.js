import React from 'react';
import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="well well-sm">
                    <h3><strong>Our Location</strong></h3>
                </div>

            <div className="row">
                <div className="col-md-7">
                <iframe src="https://www.google.com/maps/embed?
                pb=!1m18!1m12!1m3!1d31715.08052079219!2d3.5478968553446477!3d6.472812359415545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf76c9d5003ff%3A0x9658882d2738c054!2sElegant%20court!5e0!3m2!1sen!2sng!4v1615254829477!5m2!1sen!2sng"
                style={{
                    border: "0",
                    width: "100%",
                    height: "315px",
                    frameborder: "0"
                }} allowFullscreen
                />
              </div>
              <div className="col-md-5">
                  <h4><strong>Contact Us</strong></h4>
                <form>
                  <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name" />
                      </div>

                      <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email" />
                      </div>

                      <div className="form-group">
                          <input type="tel" className="form-control" placeholder="Phone" />
                      </div>

                      <textarea className="form-control" cols="30" rows="3" placeholder="Message" />
                </form>
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                    <i className="fa fa-paper-plane-o" aria-hidden="true" />
                    <i className="fab fa-telegram-plane" />
                    &nbsp;Send
                </Link>
              </div>
            </div>
            </div>
        </section>
    );
}

export default Contacts
