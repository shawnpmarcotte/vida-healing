import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMarriage from '../components/BannerMarriage'
import marriagecovertwo from '../assets/images/marriage-cover-two.jpg'


import marriagecover from '../assets/images/marriage-cover.jpg'

const Marriage = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Marriage Page" />
    </Helmet>

    <BannerMarriage />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={marriagecovertwo} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h3 className="pagesmain">
                Often times, we enter into a relationship or marriage thinking that we have all the tools necessary to maintain a healthy life together. As time moves on, we realize that we were ill-equipped and with careers, children, family members, and other factors entering the picture, it becomes necessary to find and implement new strategies if we want to be successful. We believe with a little insight, the bond between two individuals can be strengthened and a successful relationship is possible
            </h3>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={marriagecover} alt="" />
          <div className="content">
            <div className="inner">
              <h2 className="signsheader">Warning Signs of a Troubled Relationship</h2>
              <ul className="actions">
                <h3 className="pagesmain">Loneliness or Isolation</h3>
                <h3 className="pagesmain">Disconnectedness or Communication Difficulties</h3>
                <h3 className="pagesmain">Infidelity, and Loss of Passion or Romance</h3>
                <h3 className="pagesmain">Financial Issues</h3>
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
                <h2>Please Contact Us At Vida Healing Today To Learn How We can Help</h2>
              </div>
            </header>
          </div>
        </section>
      </div>
    </div>
  </Layout >
)

export default Marriage

{/* <h3>If you are looking for a caring, compassionate, and professionalmarriage or couples therapist please contact us today</h3> */ }
