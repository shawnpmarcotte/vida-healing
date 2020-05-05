import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerJoinTeam from '../components/BannerJoinTeam'
import jointeam from '../assets/images/jointeam.jpg'

const JoinTeam = () => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Family Page" />
        </Helmet>

        <BannerJoinTeam />

        <div id="main">
            <section>
                <div>
                    <div id="main" className="fade-in-right">
                        <section id="one">
                            <div className="inner">
                                <header className="major">
                                </header>
                                <h3>
                                    As a Vida Healing employee, you will play a vital role in shaping the lives and future of our clients. For this reason, we are dedicated to creating an inspiring culture and a working environment that attracts the most passionate people in the ABA field.  You will be considered for both full-time and part-time employment. Our ideal candidates will demonstrate a commitment to learning and excellence in the profession of Applied Behavior analysis. We welcome applicants with the relevant credentials in any area relevant to ABA
                                    </h3>
                                <span className="image main"><img src={jointeam} alt="" /></span>
                                <h3>
                                    Vida Healing currently has openings for potential employees with the appropriate credentials and training:
                                </h3>
                                <ul>
                                    <li> •  BCBA - Board Certified Behavior Analyst</li>
                                    <li> •  LMHC -Licensed Mental Health Counselors</li>
                                    <li> •  RBT - Registered Behavior Technicians</li>
                                </ul>
                                <h3>
                                    We are dedicated to living our adopted values as a driving force:
                                </h3>
                                <ul>
                                    <li> •  Client Care</li>
                                    <li> •  Integrity</li>
                                    <li> •  Accountability</li>
                                    <li> •  Education and Training</li>
                                    <li> •  Administrative support</li>
                                </ul>
                            </div>
                            <div className="inner">
                                <h4>
                                    PREFERRED QUALIFICATION: It is incumbent on all candidates applying to work with Vida Healing to have all the necessary qualifications for their position. Whether you’re interested in being an RBT, Behavior Analyst or Licensed Mental Health Counselor, we have information about what it’s like to work in our company and how to proceed
                                </h4>
                                <h4>
                                    PREREQUISITE FOR HIRE: Background screening, First aid & CPR, HIPPA, Intro to Developmental Disabilities and Zero Tolerance
                                </h4>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default JoinTeam
