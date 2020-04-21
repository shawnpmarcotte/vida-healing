import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field half first">
            <label htmlFor="name">Subject</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Phone Number</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="#">vidahealingllc@gmail.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>(305) 389-3224</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              2701 W. Oakland Park Blvd Suite 410-9
              <br />
              Oakland Park, FL 33311
              <br />
              United States of America
            </span>
          </div>
          <section>
            <footer id="footer">
              <div className="inner">
                <ul className="icons">
                  {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                  <li>
                    <a
                      href="https://www.facebook.com/VidaHealingLLC/"
                      className="icon alt fa-facebook"
                      target="blank"
                    >
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/vidahealingllc/"
                      className="icon alt fa-instagram"
                      target="blank"
                    >
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  {/* <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nely-henderson-43a19a92/"
                      className="icon alt fa-linkedin"
                      target="blank"
                    >
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
                <ul className="copyright">
                  <li>&copy; Copyright © 2018 Vida Healing, LLC</li>
                </ul>
              </div>
            </footer>
          </section>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
