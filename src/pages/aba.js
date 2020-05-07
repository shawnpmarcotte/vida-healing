import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbs from '../components/BannerAba'

import abaCover from '../assets/images/aba-cover.jpg'

const Aba = () => (
  <Layout>
    <Helmet>
      <title>Advanced Behavior Analysis</title>
      <meta name="Advanced Behavior Analysis" content="Advanced Behavior Analysis" />
    </Helmet>

    <BannerAbs />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={abaCover} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h2 className="pagesmain">
                Applied Behavior Analysis (ABA) is provided to assist individuals in learning new functionality equivalent replacement skills for identified challenging behaviors. Many decades of research have validated treatments based on ABA
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

export default Aba
