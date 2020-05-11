import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerIndividual from '../components/BannerIndividual'

import pic09 from '../assets/images/pic09.jpg'

const Individual = props => (
  <Layout>
    <Helmet>
      <title>Individual Therapy</title>
      <meta name="Individual Therapy" content="Individual Therapy" />
    </Helmet>

    <BannerIndividual />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={pic09} alt="Individual Therapy" />
          <div className="content">
            <div className="fade-in-right">
              <h2 className="pagesmain">
                Depression and anxiety are two of the most common mental health issues in America. You don’t have to face your issues alone. We provide Individual Therapy and believe that this is a joint process between a Therapist and the person in therapy
                </h2>
            </div>
          </div>
        </section>
      </section>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header>
              <div className="pulsate-fwd">
                <h2>Please Contact Us At Vida Healing Today To Learn How We can Help</h2>
              </div>
            </header>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Individual
