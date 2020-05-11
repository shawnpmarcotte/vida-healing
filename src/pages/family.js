import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFamily from '../components/BannerFamily'
import familycover from '../assets/images/family-cover.jpg'
import familysecondary from '../assets/images/family-secondary.jpg'


const Family = props => (
  <Layout>
    <Helmet>
      <title>Family Therapy</title>
      <meta name="Family Therapy" content="Family Therapy" />
    </Helmet>

    <BannerFamily />

    <div id="main">
      <section className="spotlights">
        <section className="fade-in-right">
          <img className="image" src={familycover} alt="Family Therapy" />
          <div className="content">
            <div>
              <h2 className="pagesmain">
                At times, family therapy is necessary to address family struggles and heal a family’s wounds. We will assist in developing a plan for maintaining a healthy, happy, functional family
            </h2>
            </div>
          </div>
        </section>
        <section className="fade-in-right">
          <img className="image" src={familysecondary} alt="Family Therapy" />
          <div className="content">
            <div>
              <h2 className="pagesmain">
                Whether you are new parents, recently separated or divorced, and/or trying to manage the curve balls that come with raising a teenager, we are here to assist. Our goal is to establish strong communication skills and create a stronger and healthier family
              </h2>
              <ul className="actions">
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
  </Layout>
)

export default Family
