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
                    <img className="image" src={pic10} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h2>
                                The following may indicate your child is at risk for an autism spectrum disorder. If your child exhibits any of the following, ask your pediatrician or family doctor for an evaluation right away:
                </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={autismtwo} alt="" />
                    <div className="content">
                        <div className="inner">
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
                    <img className="image" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner">
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
                    <img className="image" src={autismfour} alt="" />
                    <div className="content">
                        <div className="inner">
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
            <section>
                <div>
                    <div id="main" className="alt">
                        <section id="one">
                            <div className="inner">
                                <header className="major">
                                </header>
                                <h4>This online screen, which is offered on our website, will only require a couple of minutes to fill out. If the answers show a substantial likelihood of autism, please talk to your pediatrician. Similarly, don't wait to ask if you have any other questions. Talk to healthcare provider today about getting a screening done.</h4>
                                <span className="image main"><img src={aboutcover} alt="" /></span>
                                <h2>If your child has any of the above issues, please investigate having your child screened and contact your healthcare provider. The M-CHAT (Modified Checklist for Autism in Toddlers™) can help you determine if a specialist is necessary to assess your kid. </h2>
                                <h2>Please contact us at Vida Healing for an appointment today ifyou need assistance</h2>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Individual
