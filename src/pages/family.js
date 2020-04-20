import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFamily from '../components/BannerFamily'

import pic08 from '../assets/images/pic08.jpg'

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
          <img src={pic08} alt="" />
          <div className="content">
            <div className="inner">
              <h4>
                Family Therapy is a type of counseling that can help family
                members improve communication and resolve conflicts. At times,
                family therapy is necessary to address family struggles and heal
                a family’s wounds. At Vida Healing, we strive to offer families
                a way to do this in a safe, comfortable, and professional
                environment. We will assist in developing a plan for maintaining
                a healthy, functional family. Whether you are new parents,
                recently separated or divorced, and/or trying to manage the
                curve balls that come with raising a teenager, we are here to
                assist. Our goal is to establish strong communication skills and
                create a stronger and healthier family.
                <br />
                If you are dealing with any of the issues above, please contact us below for an appointment
              </h4>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Family
