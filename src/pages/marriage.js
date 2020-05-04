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
              <h4>
                Often times, we enter into a relationship or marriage thinking that we have all the tools necessary to maintain a healthy life together. As time moves on, we realize that we were ill-equipped and with careers, children, family members, and other factors entering the picture, it becomes necessary to find and implement new strategies if we want to be successful. It easy to fall into negative behaviors and look for a way out. At Vida Healing, we believe that with a little guidance and therapy, marriages and couples can change the way they communicate with one another. There are times when a relationship seems hopeless and there is no help in sight. But, we believe with a little insight, the bond between two individuals can be strengthened and a successful relationship is possible
            </h4>
            </div>
          </div>
        </section>
        <section>
          <img className="image" src={marriagecover} alt="" />
          <div className="content">
            <div className="inner">
              <h2>Warning Signs of a Troubled Relationship</h2>
              <ul className="actions">
                <h3> • Loneliness</h3>
                <h3> • Isolation</h3>
                <h3> • Infidelity</h3>
                <h3> • Disconnectedness</h3>
                <h3> • Loss of passion or romance</h3>
                <h3> • Financial Issues</h3>
                <h3> • Communication difficulties</h3>
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
  </Layout >
)

export default Marriage

{/* <h3>If you are looking for a caring, compassionate, and professionalmarriage or couples therapist please contact us today</h3> */ }
