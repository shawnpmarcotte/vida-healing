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
                            <h3>Specialized healthcare providers make autism diagnoses via a condition checklist that overlap the core symptoms above. They also use an autism symptom severity scale. Autism's severity scale will show the amount of support a person with autism needs. The needs will often vary per person</h3>
                            <h3>Many people with autism have sensory problems. These may include sensitivity to smells, sounds, touch, tastes, lights, pain, and touch along with other stimuli</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h2>Social Communication Issues</h2>
                            <ul className="actions">
                                <h4>Both children and adults with autism have strong difficulties with non-verbal and verbal communication</h4>
                                <h3>Many may not effectively use:</h3>
                                <li> • Speaking and verbal language (1/3 of individuals with autism cannot speak)</li>
                                <li> • Euphemisms and things not meant to be taken literally</li>
                                <li> • Physical or hand gestures</li>
                                <li> • Making eye contact</li>
                                <li> • Making expressions with your face</li>
                                <li> • The tone of one's voice</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={individualcover} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h1>Additional social challenges can include difficulty with:</h1>
                            <ul className="actions">
                                <li> • Recognizing the emotions and the intention of others</li>
                                <li> • Recognizing their own emotions</li>
                                <li> • Ability to express their emotions</li>
                                <li> • Looking for emotional comfort from other people</li>
                                <li> • Feelings of being overwhelmed in social situations</li>
                                <li> • The ability to take turns properly in social situations</li>
                                <li> • Maintaining proper personal space in social situations</li>
                                <li> • Repetitive and restrictive behaviors </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={aboutcover} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>Restricted and repetitive behaviors will likely vary across the spectrum. These may include:</h3>
                            <ul className="actions">
                                <li> • Repetitive body movements (for example: spinning, rocking, etc.)</li>
                                <li> • Repetitive motions using an object(s) (example: shaking objects and sticks)</li>
                                <li> • Staring at lighting effects or even spinning objects</li>
                                <li> • Ritualistic behaviors (e.g., lining up objects, frequently touching items in a set order)</li>
                                <li> • Obsessive interest in a few (often niche and specialized) topics </li>
                                <li> • Need for a steady routine (example: the same clothes, the same schedule, etc.)</li>
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