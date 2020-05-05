import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSignsOfAutism from '../components/BannerSignsOfAutism'

import autismtwo from '../assets/images/autismtwo.jpg'
import pic10 from '../assets/images/pic10.jpg'
import autismthree from '../assets/images/autismthree.jpg'
import autismfour from '../assets/images/autismfour.jpg'



const Individual = props => (
    <Layout>
        <Helmet>
            <title>Signs of Autism</title>
            <meta name="description" content="Signs Of Autism" />
        </Helmet>

        <BannerSignsOfAutism />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img className="image" className="fade-in-right" src={pic10} alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="pagesmain">
                                The following may indicate your child is at risk for an Autism Spectrum Disorder. If your child exhibits any of the following symptoms, please ask your pediatrician or family doctor for an evaluation right away:
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismtwo} alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="signsheader">BY SIX MONTHS</h2>
                            <ul className="actions">
                                <h4 className="pagesmaintwo">Limited smiling/joyful and engaging expressions</h4>
                                <h4 className="pagesmaintwo">Limited to no eye contact</h4>
                                <h2 className="signsheader">BY NINE MONTHS</h2>
                                <h4 className="pagesmaintwo">Little to no smiling, sharing expressions, and other happy facial expressions
By twelve months</h4>
                                <h4 className="pagesmaintwo">Little to no attempts to talk/babbling</h4>
                                <h4 className="pagesmaintwo">Little to no hand gestures with others</h4>
                                <h4 className="pagesmaintwo">Little to no reaction to their name being said</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h2 className="signsheader">BY TWELVE MONTHS</h2>
                            <ul className="actions">
                                <h4 className="pagesmaintwo">Little to no attempts to talk/babbling</h4>
                                <h4 className="pagesmaintwo">Little to no hand gestures with others, such as waving and pointing</h4>
                                <h4 className="pagesmaintwo">Little to no reaction to their name being said</h4>
                                <h2 className="signsheader">BY SIXTEEN MONTHS</h2>
                                <h4 className="pagesmaintwo">Few to no spoken words</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={autismfour} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">BY TWENTY-FOUR MONTHS</h2>
                            <ul className="actions">
                                <h4 className="pagesmaintwo">Few to no two-word phrases (or attempts to say these phrases)</h4>
                                <h4 className="pagesmaintwo">Having trouble understanding others' feelings</h4>
                                <h4 className="pagesmaintwo">Stalled development of language</h4>
                                <h4 className="pagesmaintwo">Repeating certain words repeatedly (echolalia)</h4>
                                <h4 className="pagesmaintwo">A restriction of interests </h4>
                                <h4 className="pagesmaintwo">Repetitious actions and behaviors (like rocking and flapping)</h4>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div id="main" className="alt">
                <div className="inner">
                    <header>
                        <div className="pulsate-fwd">
                            <h2>Please Contact Us At Vida Healing For An Appointment Today If You Need Assistance</h2>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </Layout >
)

export default Individual
