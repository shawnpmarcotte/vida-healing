import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerSignsOfAutism from '../components/BannerSignsOfAutism'

import autismtwo from '../assets/images/autismtwo.jpg'
import pic10 from '../assets/images/pic10.jpg'
import autismthree from '../assets/images/autismthree.jpg'
import autismfour from '../assets/images/autismfour.jpg'



const SignsOfAutism = props => (
    <Layout>
        <Helmet>
            <title>Signs of Autism</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>

        <BannerSignsOfAutism />

        <div id="main">
            <section className="spotlights">
                <section className="fade-in-right">
                    <img className="image" src={pic10} alt="Signs of Autism" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="pagesmain">
                                If your child exhibits any of the following symptoms, please ask your pediatrician or family doctor for an evaluation right away:
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="fade-in-right">
                    <img className="image" src={autismtwo} alt="Signs of Autism" />
                    <div className="content">
                        <div className="inner">
                            <h3 className="signsheader">BY SIX MONTHS</h3>
                            <ul className="actions">
                                <h4 className="pagesmaintwo">Limited smiling/eye contact/joyful and engaging expressions</h4>
                                <h4 className="signsheader">BY NINE MONTHS</h4>
                                <h4 className="pagesmaintwo">Little to no smiling, sharing expressions, or happy expressions</h4>
                                <h4 className="pagesmaintwo">Little to no attempts to talk/babbling</h4>
                                <h4 className="pagesmaintwo">Little to no hand gestures with others</h4>
                                <h4 className="pagesmaintwo">Little to no reaction to their name being said</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="fade-in-right">
                    <img className="image" src={autismthree} alt="Signs of Autism" />
                    <div className="content">
                        <div className="inner">
                            <h3 className="signsheader">BY TWELVE MONTHS</h3>
                            <ul className="actions">
                                <h4 className="pagesmaintwo">Little to no attempts to talk/babbling</h4>
                                <h4 className="pagesmaintwo">Little to no hand gestures with others, such as waving and pointing</h4>
                                <h4 className="pagesmaintwo">Little to no reaction to their name being said</h4>
                                <h3 className="signsheader">BY SIXTEEN MONTHS</h3>
                                <h4 className="pagesmaintwo">Few to no spoken words</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={autismfour} alt="Signs of Autism" />
                    <div className="content">
                        <div className="inner">
                            <h3 className="signsheader">BY TWENTY-FOUR MONTHS</h3>
                            <ul className="actions">
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
                            <h2>Please Contact Us At Vida Healing Today To Learn How We can Help</h2>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </Layout >
)

export default SignsOfAutism
