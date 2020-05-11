import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerCoreSymptoms from '../components/BannerCoreSymptoms'

import coresymptomsthree from '../assets/images/coresymptomsthree.jpg'
import missionsecondary from '../assets/images/mission-secondary.jpg'
import autismthree from '../assets/images/autismthree.jpg'
import aboutcover from '../assets/images/about-cover.jpg'

const CoreSymptoms = props => (
    <Layout>
        <Helmet>
            <title>Autism Symptoms</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>

        <BannerCoreSymptoms />

        <div id="main">
            <section className="spotlights">
                <section className="fade-in-right">
                    <img className="image" src={missionsecondary} alt="Autism Symptoms" />
                    <div className="content">
                        <div className="inner">
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
                <section className="fade-in-right" >
                    <img className="image" src={autismthree} alt="Autism Symptoms" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">COMMUNICATION ISSUES - Symptoms:</h2>
                            <ul className="actions">
                                <h4 className="pagesmain">Speaking and verbal language (1/3 of autism cases cannot speak)</h4>
                                <h4 className="pagesmain">Euphemisms and things not meant to be taken literally</h4>
                                <h4 className="pagesmain">Physical or hand gestures / lack of eye contact</h4>
                                <h4 className="pagesmain">Making expressions with your face</h4>
                                <h4 className="pagesmain">The tone of one's voice</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={coresymptomsthree} alt="Autism Symptoms" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">Additional Social Challenges May Include:</h2>
                            <ul className="actions">
                                <h4 className="pagesmain">Ability to express emotions/recognizing emotions and intention of others</h4>
                                <h4 className="pagesmain">Feelings of being overwhelmed in social situations</h4>
                                <h4 className="pagesmain">The ability to take turns properly in social situations</h4>
                                <h4 className="pagesmain">Maintaining proper personal space in social situations</h4>
                                <h4 className="pagesmain">Repetitive and restrictive behaviors </h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={aboutcover} alt="Autism Symptoms" />
                    <div className="content">
                        <div className="inner">
                            <h2 className="signsheader">Repetitive Behaviors May Include:</h2>
                            <ul className="actions">
                                <h4 className="pagesmain">Repetitive movements like rocking motions or shaking sticks etc.</h4>
                                <h4 className="pagesmain">Ritualistic behaviors: lining up objects, touching items in a set order</h4>
                                <h4 className="pagesmain">Obsessive interest in a few (often niche and specialized) topics </h4>
                                <h4 className="pagesmain">Need for a steady routine (ex. the same clothes, the same schedule, etc.)</h4>
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

export default CoreSymptoms