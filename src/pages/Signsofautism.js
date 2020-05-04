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
                            <h2 className="signsblock">
                                The following may indicate your child is at risk for an Autism Spectrum Disorder. If your child exhibits any of the following symptoms, please ask your pediatrician or family doctor for an evaluation right away:
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismtwo} alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1 className="signsheader">BY SIX MONTHS:</h1>
                            <ul className="actions">
                                <h5> • Limited smiling/joyful and engaging expressions</h5>
                                <h5> • Limited to no eye contact</h5>
                                <h1 className="signsheader">BY NINE MONTHS:</h1>
                                <h5> • Little to no smiling, sharing expressions, and other happy facial expressions
By twelve months</h5>
                                <h5> • Little to no attempts to talk/babbling</h5>
                                <h5> • Little to no hand gestures with others, such as waving and pointing</h5>
                                <h5> • Little to no reaction to their name being said</h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h1 className="signsheader">BY TWELVE MONTHS:</h1>
                            <ul className="actions">
                                <h5> • Little to no attempts to talk/babbling</h5>
                                <h5> • Little to no hand gestures with others, such as waving and pointing</h5>
                                <h5> • Little to no reaction to their name being said</h5>
                                <h1 className="signsheader">BY SIXTEEN MONTHS:</h1>
                                <h5> • Few to no spoken words</h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={autismfour} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h1 className="signsheader">BY TWENTY-FOUR MONTHS:</h1>
                            <ul className="actions">
                                <h5> • Few to no two-word phrases (or attempts to say these phrases)</h5>
                                <h5> • Having trouble understanding others' feelings</h5>
                                <h5> • Stalled development of language</h5>
                                <h5> • Repeating certain words repeatedly (echolalia)</h5>
                                <h5> • Resisting small changes in the situation and surrounding</h5>
                                <h5> • A restriction of interests </h5>
                                <h5> • Repetitious actions and behaviors (like rocking and flapping)</h5>
                                <h5> • Abnormal and intense reaction to sensations, sounds, etc.</h5>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div id="main" className="alt">
                <div className="inner">
                    <header>
                        <div className="pulsate-fwd">
                            <h2>Please contact us at Vida Healing for an appointment today if you need assistance</h2>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </Layout >
)

export default Individual
