import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbs from '../components/BannerAba'

import pic10 from '../assets/images/pic10.jpg'
import aboutcover from '../assets/images/about-cover.jpg'
import abaCover from '../assets/images/aba-cover.jpg'

const Aba = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Aba Page" />
    </Helmet>

    <BannerAbs />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={abaCover} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h3>
                Applied Behavior Analysis (ABA) is provided to assist individuals in learning new functionality equivalent replacement skills for identified challenging behaviors. Behavior Analysis is the scientific study of behavior. Applied Behavior Analysis (ABA) is the application of the principles of learning and motivation from Behavior Analysis, and the procedures and technology derived from those principles, to the solution of problems of social significance. Many decades of research have validated treatments based on ABA
            </h3>
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

export default Aba

{/* <h3>
                Contact Us at Vida Healing today if you have a
                child or family member that you think will benefit from these
                services
              </h3> */}