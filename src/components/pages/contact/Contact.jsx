import React from "react";
import Back from "../../common/back/Back";
import "./Contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.515679275875!2d106.65549907596927!3d10.771759989376749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec18e8d2c03%3A0x67495af602943e42!2zxJBoIELDoWNoIEtob2EgVHAgSGNt!5e0!3m2!1svi!2sus!4v1722531685090!5m2!1svi!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>
                  example@example.com or{" "}
                  <a href="mailto:example@example.com">Click Here</a>
                </p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>
                  + 1235 2355 98 or <a href="tel:+ 1235 2355 98">Click Here</a>
                </p>
              </div>
            </div>

            <form action="" method="post">
              <div className="flexSB">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea cols="30" rows="10">
                Type a message here...
              </textarea>
              <button className="primary-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>

            <h3>FOLLOW US HERE</h3>
            <span className="social">
              <a href="www.facebook.com" target="_blank">
                FACEBOOK
              </a>
              <a href="www.x.com" target="_blank">
                X
              </a>
              <a href="www.instagram.com" target="_blank">
                INSTAGRAM
              </a>
              <a href="www.dribbble.com" target="_blank">
                DRIBBBLE
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
