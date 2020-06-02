import React from 'react'

const Contact = props => {
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form
            name="contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            {/************************************
             * NAME
             *************************************/}

            <div className="field half first">
              <h4 htmlFor="name">NAME</h4>
              <input type="text" name="name" id="name" />
            </div>

            {/************************************
             * EMAIL
             *************************************/}

            <div className="field half">
              <h4 htmlFor="email">EMAIL</h4>
              <input type="text" name="email" id="email" />
            </div>

            {/************************************
             * SUBJECT
             *************************************/}

            <div className="field half first">
              <h4 htmlFor="subject">SUBJECT</h4>
              <input type="text" name="subject" id="subject" />
            </div>

            {/************************************
             * PHONE NUMBER
             *************************************/}

            <div className="field half">
              <h4 htmlFor="number">PHONE NUMBER</h4>
              <input type="text" name="number" id="number" />
            </div>

            {/************************************
             * MESSAGE
             *************************************/}

            <div className="field">
              <h4 htmlFor="message">MESSAGE</h4>
              <textarea name="message" id="message" rows="6" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>

          {/*************************************** 
          END OF THE FORM 
          *****************************************/}
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>EMAIL</h3>
              <h4>
                <a href="mailto:vidahealingllc@gmail.com">
                  vidahealingllc@gmail.com
                </a>
              </h4>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>PHONE</h3>
              <h4>
                <a href="tel:[305-562-4279]">
                  <span className="bottom">(305) 389-3224</span>
                </a>
              </h4>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>We have offices in South Florida and the Tampa Bay Area</h3>
            </div>
            <section>
              <footer id="footer">
                <div className="inner">
                  <ul className="icons">
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=13053893224&text=&source=&data=&app_absent="
                        className="icon alt fa-whatsapp"
                        target="blank"
                      >
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
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
                    {/* <li>
                      <a
                        href="https://www.linkedin.com/in/nely-henderson-43a19a92/"
                        className="icon alt fa-linkedin"
                        target="blank"
                      >
                        <span className="label">LinkedIn</span>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </footer>
            </section>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Contact
