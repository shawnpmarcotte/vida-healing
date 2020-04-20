import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMarriage from '../components/BannerMarriage'

import pic09 from '../assets/images/pic09.jpg'

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
          <img src={pic09} alt="" />
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
                successful relationship is possible.
              </h4>
              <h5>
                Warning Signs of a Troubled Relationship
              </h5>
              <ul>
                <li>Loneliness </li>
                <li>Isolation</li>
                <li>Infidelity</li>
                <li>Disconnectedness</li>
                <li>Loss of passion or romance</li>
                <li>Financial Issues</li>
                <li>Communication difficulties</li>
              </ul>
              <h3>
                If you are looking for a caring, compassionate, and professional
                marriage or couples therapist please contact us today
              </h3>
              <div>

              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Marriage
