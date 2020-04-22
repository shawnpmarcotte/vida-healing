import React, { useState } from 'react'
import validators from './validators'

const Contact = props => {
  const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    number: '',
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(validators(formData))
  }
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#" onSubmit={handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="field half first">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && <p>{errors.subject}</p>}
            </div>
            <div className="field half">
              <label htmlFor="number">Phone Number</label>
              <input
                type="text"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleInputChange}
              />
              {errors.number && <p>{errors.number}</p>}
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
}

export default Contact
