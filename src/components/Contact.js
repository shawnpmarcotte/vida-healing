import React, { useState } from 'react'
import validators from './validators'

const Contact = props => {
  const INITIAL_STATE = {
    name: '',
    email: '',
    subject: '',
    number: '',
    message: '',
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
    const tempErrors = validators(formData)
    setErrors(tempErrors)
    formData &&
      !tempErrors.name &&
      !tempErrors.email &&
      !tempErrors.subject &&
      !tempErrors.number &&
      !tempErrors.message &&
      setFormData(INITIAL_STATE)
  }
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#" onSubmit={handleSubmit}>
            {/************************************
             * NAME
             *************************************/}

            <div className="field half first">
              <h4 htmlFor="name">NAME</h4>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>

            {/************************************
             * EMAIL
             *************************************/}

            <div className="field half">
              <h4 htmlFor="email">EMAIL</h4>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            {/************************************
             * SUBJECT
             *************************************/}

            <div className="field half first">
              <h4 htmlFor="subject">SUBJECT</h4>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && <p>{errors.subject}</p>}
            </div>

            {/************************************
             * PHONE NUMBER
             *************************************/}

            <div className="field half">
              <h4 htmlFor="number">PHONE NUMBER</h4>
              <input
                type="text"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleInputChange}
              />
              {errors.number && <p>{errors.number}</p>}
            </div>

            {/************************************
             * MESSAGE
             *************************************/}

            <div className="field">
              <h4 htmlFor="message">MESSAGE</h4>
              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <p>{errors.message}</p>}
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
                <a href="#">vidahealingllc@gmail.com</a>
              </h4>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>PHONE</h3>
              <h4>
                <span>(305) 389-3224</span>
              </h4>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>ADDRESS</h3>
              <h4>
                <span>
                  2701 W. Oakland Park Blvd Suite 410-9
                  <br />
                  Oakland Park, FL 33311
                  <br />
                  United States of America
                </span>
              </h4>
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
