import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import aboutSecondary from '../assets/images/about-secondary.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="About Page" />
    </Helmet>

    <BannerAbout />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img src={aboutSecondary} alt="" />
          <div className="content">
            <div className="inner">
              {/* <header className="major">
                                <h3>Orci maecenas</h3>
                            </header> */}
              <h4>
                Licensed Mental Health Counselor (LMHC) and certified
                Dialectical Behavior Therapy treatment provider offering
                bilingual (English and Spanish) counseling services. Populations
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
                individual identities. Interested in Services? Fill out the form
                below and I’ll get back to you!
              </h4>
              <ul className="actions">
                {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
        {/* <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
      </section>
    </div>
  </Layout>
)

export default About
