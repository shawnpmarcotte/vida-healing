import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSignsOfAutism from '../components/BannerSignsOfAutism'

import autismtwo from '../assets/images/autismtwo.jpg'
import pic10 from '../assets/images/pic10.jpg'
import autismthree from '../assets/images/autismthree.jpg'
import autismfour from '../assets/images/autismfour.jpg'
import aboutcover from '../assets/images/about-cover.jpg'


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
                            <h2>
                                The following may indicate your child is at risk for an autism spectrum disorder. If your child exhibits any of the following, ask your pediatrician or family doctor for an evaluation right away:
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismtwo} alt="" />
                    <div className="content">
                        <div className="fade-in-right" className="inner">
                            <h3>By six months:</h3>
                            <ul className="actions">
                                <li> • Limited smiling/joyful and engaging expressions</li>
                                <li> • Limited to no eye contact</li>
                                <h3>By nine months:</h3>
                                <li> • Little to no smiling, sharing expressions, and other happy facial expressions
By twelve months</li>
                                <li> • Little to no attempts to talk/babbling</li>
                                <li> • Little to no hand gestures with others, such as waving and pointing</li>
                                <li> • Little to no reaction to their name being said</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h3>By twelve months:</h3>
                            <ul className="actions">
                                <li> • Little to no attempts to talk/babbling</li>
                                <li> • Little to no hand gestures with others, such as waving and pointing</li>
                                <li> • Little to no reaction to their name being said</li>
                                <h3>By sixteen months:</h3>
                                <li> • Few to no spoken words</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismfour} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h3>By twenty-four months:</h3>
                            <ul className="actions">
                                <li> • Few to no two-word phrases (or attempts to say these phrases)</li>
                                <li> • Loss of prior speech and communication skills</li>
                                <li> • Avoiding eye contact with other people</li>
                                <li> • Having trouble understanding others' feelings</li>
                                <li> • Stalled development of language</li>
                                <li> • Repeating certain words repeatedly (echolalia)</li>
                                <li> • Resisting small changes in the situation and surrounding</li>
                                <li> • A restriction of interests </li>
                                <li> • Repetitious actions and behaviors (like rocking and flapping)</li>
                                <li> • Abnormal and intense reaction to sensations, sounds, etc.</li>
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
    </Layout>
)

export default Individual
