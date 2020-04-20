import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerIndividual from '../components/BannerIndividual'

import pic08 from '../assets/images/pic08.jpg'

const Individual = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Individual Page" />
    </Helmet>

    <BannerIndividual />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img src={pic08} alt="" />
          <div className="content">
            <div className="inner">
              <h4>
                You don’t have to face your issues alone. We provide individual
                therapy and we believe that this is a joint process between a
                therapist and the person in therapy. Depression and anxiety are
                two of the most common mental health issues in America. At Vida
                Healing, we can assist you in learning how to deal with your
                depression or anxiety through therapy. We will work with you in
                developing helpful strategies for dealing with these issues and
                create an environment where you feel safe to work with us.
              </h4>
              <h3>Please contact us at Vida Healing for an appointment
                today if you need assistance</h3>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Individual
