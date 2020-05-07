import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerMission'
import mission3 from '../assets/images/mission3.jpg'

const Mission = () => (
  <Layout>
    <Helmet>
      <title>Mission</title>
      <meta name="Applied Behavior Analysis" content="MApplied Behavior Analysis" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={mission3} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h2 className="pagesmain">
                It is our goal
                to have a significant impact on the lives of our clients and
                their families. We aspire to create the optimal healing
                environment for those we serve in the office or their homes
              </h2>
              <ul className="actions">
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
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
  </Layout>
)

export default Mission
