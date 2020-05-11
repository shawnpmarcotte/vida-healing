import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import aboutSecondary from '../assets/images/about-secondary.jpg'

const About = () => (
  <Layout>
    <Helmet>
      <title>Applied Behavior Analysis</title>
      <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
    </Helmet>

    <BannerAbout />

    <div id="main">
      <section id="two" className="spotlights">
        <section className="fade-in-right">
          <img className="image" src={aboutSecondary} alt="Applied Behavior Analysis Therapy" />
          <div className="content">
            <h3 className="pagesmain">
              Experience in crisis counseling, depressive disorders, anxiety, adjustment issues,
              multicultural counseling, Schizophrenia, Bipolar Disorder, group
              facilitation, victims of domestic violence, adult survivors of
              childhood sexual abuse, Attention Deficit Disorder (ADD) and
              Attention Deficit Hyperactivity Disorder (ADHD), disruptive
              behaviors, and parent-child relational problems. I have a
              special interest in young women who struggle with individuating
              from their family of origin and trying to solidify their
              individual identities
              </h3>
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

export default About
