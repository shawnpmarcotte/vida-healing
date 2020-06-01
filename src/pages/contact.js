import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerContact from '../components/BannerContact'


import contact from '../assets/images/contact.jpg'

const Family = () => (
    <Layout>
        <Helmet>
            <title>Contact</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>
        <BannerContact />
        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img className="fade-in-right" src={contact} alt="Contact Us" />
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
