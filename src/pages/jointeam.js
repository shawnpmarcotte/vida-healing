import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerJoinTeam from '../components/BannerJoinTeam'
import jointeam from '../assets/images/jointeam.jpg'

const JoinTeam = () => (
    <Layout>
        <Helmet>
            <title>Join Our Team</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>

        <BannerJoinTeam />

        <div id="main">
            <section>
                <div>
                    <div id="main" className="fade-in-right">
                        <section id="one">
                            <div className="inner">
                                <h2 className="signsblock">
                                    We are dedicated to living our adopted values as a driving force:
                                </h2>
                                <ul className="pagesmainthree">
                                    <li className="pagesmainthree">Client Care</li>
                                    <li className="pagesmainthree">Integrity</li>
                                    <li className="pagesmainthree">Accountability</li>
                                    <li className="pagesmainthree">Education and Training</li>
                                    <li className="pagesmainthree">Administrative Support</li><br />
                                </ul>
                                <span className="image main"><img src={jointeam} alt="Applied Behavior Analysis" /></span>
                                <h1 className="signsblock">
                                    Vida Healing currently has openings for potential employees with the appropriate credentials and training:
                                </h1>
                                <ul>
                                    <h3 className="pagesmain"> •  BCBA - Board Certified Behavior Analyst</h3>
                                    <h3 className="pagesmain"> •  LMHC -Licensed Mental Health Counselors</h3>
                                    <h3 className="pagesmain"> •  RBT - Registered Behavior Technicians</h3>
                                </ul>
                                <h3 className="signsblock">
                                    PREFERRED QUALIFICATION: It is incumbent on all applicants to work with Vida Healing to have all the necessary qualifications for their position. Whether you’re interested in being an RBT, Behavior Analyst or Licensed Mental Health Counselor, we have information about our company culture and how to proceed
                                </h3>
                                <h3 className="signsblock" className="pagesmain">
                                    PREREQUISITE FOR HIRE
                                </h3>
                                <h1 className="signsblock">
                                    Background screening, First aid & CPR, HIPPA, Intro to Developmental Disabilities and Zero Tolerance
                                </h1>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header>
                        <div className="pulsate-fwd">
                            <h2>Please Contact Us Below To Inquire About Our Open Positions</h2>
                        </div>
                    </header>
                </div>
            </section>
        </div>
    </Layout>
)

export default JoinTeam
