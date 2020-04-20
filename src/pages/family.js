import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFamily from '../components/BannerFamily'

import pic08 from '../assets/images/pic08.jpg'

const Family = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Family Page" />
    </Helmet>

    <BannerFamily />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <h4>Family</h4>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Family
