import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import contact from '../assets/images/contact.jpg'

const Family = () => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Family Page" />
        </Helmet>
        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img className="fade-in-right" src={contact} alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="pagesmain">We Specialize in Applied Behavior Analysis (ABA), Individual Therapy, Family Therapy, and Marriage and Couples Therapy. Please Reach out to Vida Healing Today to Schedule an Appointment!</h2>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </Layout>
)

export default Family
