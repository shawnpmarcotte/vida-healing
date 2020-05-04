import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerCoreSymptoms from '../components/BannerCoreSymptoms'

import pic10 from '../assets/images/pic10.jpg'
import missionsecondary from '../assets/images/mission-secondary.jpg'
import autismthree from '../assets/images/autismthree.jpg'
import individualcover from '../assets/images/individual-cover.jpg'
import aboutcover from '../assets/images/about-cover.jpg'

const Aba = props => (
    <Layout>
        <Helmet>
            <title>Autism Symptoms</title>
            <meta name="description" content="Aba Page" />
        </Helmet>

        <BannerCoreSymptoms />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img className="image" className="fade-in-right" src={missionsecondary} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h3 className="signsblock">Specialized healthcare providers make autism diagnoses via a condition checklist that overlap the core symptoms above. They also use an autism symptom severity scale. Autism's severity scale will show the amount of support a person with autism needs. The needs will often vary per person</h3>
                            <h3 className="signsblock">Many people with autism have sensory problems. These may include sensitivity to smells, sounds, touch, tastes, lights, pain, and touch along with other stimuli</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h1 className="signsheader">COMMUINCATION ISSUES - Symptoms may include:</h1>
                            <ul className="actions">
                                <h3></h3>
                                <h5> • Speaking and verbal language (1/3 of autism cases cannot speak)</h5>
                                <h5> • Euphemisms and things not meant to be taken literally</h5>
                                <h5> • Physical or hand gestures</h5>
                                <h5> • Making eye contact</h5>
                                <h5> • Making expressions with your face</h5>
                                <h5> • The tone of one's voice</h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={individualcover} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h1 className="signsheader">Additional social challenges can include difficulty with:</h1>
                            <ul className="actions">
                                <h5> • Recognizing the emotions and the intention of others</h5>
                                <h5> • Recognizing their own emotions</h5>
                                <h5> • Ability to express their emotions</h5>
                                <h5> • Looking for emotional comfort from other people</h5>
                                <h5> • Feelings of being overwhelmed in social situations</h5>
                                <h5> • The ability to take turns properly in social situations</h5>
                                <h5> • Maintaining proper personal space in social situations</h5>
                                <h5> • Repetitive and restrictive behaviors </h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={aboutcover} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h1 className="signsheader">Rsepetitive behaviors will likely vary - These may include:</h1>
                            <ul className="actions">
                                <h5> • Repetitive body movements (for example: spinning, rocking, etc.)</h5>
                                <h5> • Repetitive motions using an object(s) (example: shaking objects and sticks)</h5>
                                <h5> • Staring at lighting effects or even spinning objects</h5>
                                <h5> • Ritualistic behaviors (e.g., lining up objects, frequently touching items in a set order)</h5>
                                <h5> • Obsessive interest in a few (often niche and specialized) topics </h5>
                                <h5> • Need for a steady routine (example: the same clothes, the same schedule, etc.)</h5>
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

export default Aba

{/* <h3>
                Contact Us at Vida Healing today if you have a
                child or family member that you think will benefit from these
                services
              </h3> */}