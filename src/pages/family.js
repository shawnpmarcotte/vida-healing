import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerFamily from '../components/BannerFamily'

import familysecondary from '../assets/images/family-secondary.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Family = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Family Page" />
    </Helmet>

    <BannerFamily />

    <div id="main">
      <section id="two" className="spotlights">
      </section>
      <section>
        <div>
          <div id="main" className="alt">
            <section id="one">
              <div className="inner">
                <header className="major">
                  <h4>
                    Family Therapy is a type of counseling that can help family members improve communication and resolve conflicts. At times, family <br />
                    therapy is necessary to address family struggles and heal a family’s wounds. At Vida Healing, we strive to offer families a way to do this<br />
                    in a safe, comfortable, and professional environment. We will assist in developing a plan for maintaining a healthy, functional family.
                  </h4>
                </header>
                <span className="image main"><img src={familysecondary} alt="" /></span>
                <h3>
                  Whether you are new parents, recently separated or divorced, and/or trying to manage the curve balls that come with raising a teenager, we are here to assist. Our goal is to establish strong communication skills and create a stronger and healthier family.
                </h3>
                <h4>
                  If you are dealing with any of the issues above, please contact us today for an appointment
                </h4>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Family
