import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerCoreSymptoms from '../components/BannerCoreSymptoms'

import coresymptomsthree from '../assets/images/coresymptomsthree.jpg'
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
                            <ul className="actions">
                                <div className="pagesmain">
                                    <h4 className="pagesmain">Difficulty communicating with others</h4>
                                    <h4 className="pagesmain">Repetitive and restricted behavior and actions</h4>
                                    <h4 className="pagesmain">Persistant interferance with regular living</h4>
                                    <h4 className="pagesmain">Can start early on in childhood (and may go unnoticed and unrecognized)</h4>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" className="fade-in-right" src={autismthree} alt="" />
                    <div className="content">
                        <div className="inner" className="fade-in-right">
                            <h2 className="signsheader">COMMUNICATION ISSUES - Symptoms:</h2>
                            <ul className="actions">
                                <h5 className="pagesmain">Speaking and verbal language (1/3 of autism cases cannot speak)</h5>
                                <h5 className="pagesmain">Euphemisms and things not meant to be taken literally</h5>
                                <h5 className="pagesmain">Physical or hand gestures / lack of eye contact</h5>
                                <h5 className="pagesmain">Making expressions with your face</h5>
                                <h5 className="pagesmain">The tone of one's voice</h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={coresymptomsthree} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">Additional Social Challenges May Include:</h2>
                            <ul className="actions">
                                <h5 className="pagesmain">Ability to express emotions/recognizing emotions and the intention of others</h5>
                                <h5 className="pagesmain">Feelings of being overwhelmed in social situations</h5>
                                <h5 className="pagesmain">The ability to take turns properly in social situations</h5>
                                <h5 className="pagesmain">Maintaining proper personal space in social situations</h5>
                                <h5 className="pagesmain">Repetitive and restrictive behaviors </h5>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={aboutcover} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">Repetitive Behaviors May Include:</h2>
                            <ul className="actions">
                                <h5 className="pagesmain">Repetitive movements like rocking/motions using objects (ex. shaking sticks)</h5>
                                <h5 className="pagesmain">Ritualistic behaviors (e.g., lining up objects, frequently touching items in a set order)</h5>
                                <h5 className="pagesmain">Obsessive interest in a few (often niche and specialized) topics </h5>
                                <h5 className="pagesmain">Need for a steady routine (example: the same clothes, the same schedule, etc.)</h5>
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
    </Layout>
)

export default Aba

{/* <h3>
                Contact Us at Vida Healing today if you have a
                child or family member that you think will benefit from these
                services
              </h3> */}