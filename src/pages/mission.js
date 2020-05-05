import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerMission'
import mission3 from '../assets/images/mission3.jpg'

const Landing = () => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Mission Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img className="image" className="fade-in-right" src={mission3} alt="" />
          <div className="content">
            <div className="fade-in-right">
              <h3 className="pagesmain">
                We aim to create an environment where our clients, children, and
                families feel that we are making a positive difference in their
                lives. We strive to do this by providing a team of highly
                trained personnel that are caring and thorough. It is our goal
                to have a significant impact on the lives of our clients and
                their families. We aspire to create the optimal healing
                environment for those we serve in the office or their homes
              </h3>
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

export default Landing
