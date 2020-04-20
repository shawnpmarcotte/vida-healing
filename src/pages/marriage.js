import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMarriage from '../components/BannerMarriage'

import pic08 from '../assets/images/pic08.jpg'

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
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <h4>
                Often times, we enter into a relationship or marriage thinking
                that we have all the tools necessary to maintain a healthy life
                together. As time moves on, we realize that we were ill-equipped
                and with careers, children, family members, and other factors
                entering the picture, it becomes necessary to find and implement
                new strategies if we want to be successful. It easy to fall into
                negative behaviors and look for a way out. At Vida Healing, we
                believe that with a little guidance and therapy, marriages and
                couples can change the way they communicate with one another.
                There are times when a relationship seems hopeless and there is
                no help in sight. But, we believe with a little insight, the
                bond between two individuals can be strengthened and a
                successful relationship is possible. <br />
                <strong> Warning Signs of a Troubled Relationship</strong>{' '}
                <ul>
                  <li>Loneliness </li>
                  <li>Isolation</li>
                  <li>Infidelity</li>
                  <li>Disconnectedness</li>
                  <li>Loss of passion or romance</li>
                  <li>Financial Issues</li>
                  <li>Communication difficulties</li>
                </ul>
                If you are looking for a caring, compassionate, and professional
                marriage or couples therapist <a href="#">Contact Us</a> today.
              </h4>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Marriage
