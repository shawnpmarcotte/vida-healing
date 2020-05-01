import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFamily from '../components/BannerFamily'
import familysecondary from '../assets/images/family-secondary.jpg'
import familytwo from '../assets/images/familytwo.jpg'

const Family = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Family Page" />
    </Helmet>

    <BannerFamily />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={familytwo} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h3>
                Family Therapy is a type of counseling that can help family members improve communication and resolve conflicts. At times, family
                therapy is necessary to address family struggles and heal a family’s wounds. At Vida Healing, we strive to offer families a way to do this
                in a safe, comfortable, and professional environment. We will assist in developing a plan for maintaining a healthy, functional family
            </h3>
            </div>
          </div>
        </section>
        <section>
          <img className="image" className="fade-in-right" src={familysecondary} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h3>
                Whether you are new parents, recently separated or divorced, and/or trying to manage the curve balls that come with raising a teenager, we are here to assist. Our goal is to establish strong communication skills and create a stronger and healthier family
              </h3>
              <ul className="actions">
              </ul>
            </div>
          </div>
        </section>
      </section>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header>
              <div className="pulsate-fwd">
                <h2>Please contact us at Vida Healing for an appointment today if you need assistance</h2>
              </div>
            </header>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Family
