import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import aboutSecondary from '../assets/images/about-secondary.jpg'

const About = () => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <BannerAbout />

    <div id="main">
      <section id="one" className="spotlights">
        <section>
          <img src={aboutSecondary} className="fade-in-right" alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h4 className="pagesmain">
                Licensed Mental Health Counselor (LMHC) and certified
                Dialectical Behavior Therapy treatment provider offering
                bilingual counseling services. Populations
                of interest are children, adolescents, adults, and families.
                Theoretical orientation consists of an eclectic approach, or a
                combination of treatment modalities, in an effort to help
                clients reach their mental health goals. Experience in crisis
                counseling, depressive disorders, anxiety, adjustment issues,
                multicultural counseling, Schizophrenia, Bipolar Disorder, group
                facilitation, victims of domestic violence, adult survivors of
                childhood sexual abuse, Attention Deficit Disorder (ADD) and
                Attention Deficit Hyperactivity Disorder (ADHD), disruptive
                behaviors, and parent-child relational problems. I have a
                special interest in young women who struggle with individuating
                from their family of origin and trying to solidify their
                individual identities
              </h4>
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
              <h2>Please Contact Us At Vida Healing For An Appointment Today If You Need Assistance</h2>
            </div>
          </header>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
