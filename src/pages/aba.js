import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbs from '../components/BannerAba'

import pic08 from '../assets/images/pic08.jpg'

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
          <img src={pic08} alt="" />
          <div className="content">
            <div className="inner">
              <h4>
                Applied Behavior Analysis (ABA) is provided to assist
                individuals in learning new functionality equivalent replacement
                skills for identified challenging behaviors. Behavior Analysis
                is the scientific study of behavior. Applied Behavior Analysis
                (ABA) is the application of the principles of learning and
                motivation from Behavior Analysis, and the procedures and
                technology derived from those principles, to the solution of
                problems of social significance. Many decades of research have
                validated treatments based on ABA.
              </h4>
              <h3>
                Contact Us at Vida Healing today if you have a
                child or family member that you think will benefit from these
                services
              </h3>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Aba
