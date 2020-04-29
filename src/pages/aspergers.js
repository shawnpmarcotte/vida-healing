import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAspergers from '../components/BannerAspergers'

import familysecondary from '../assets/images/family-secondary.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Family = props => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Family Page" />
        </Helmet>

        <BannerAspergers />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img src={familysecondary} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>
                                Asperger syndrome generally involves:
              </h3>
                            <ul className="actions">
                                <li> • Having challenges interacting with others socially</li>
                                <li> • Having a small number of niche interests</li>
                                <li> • Having a strong desire for uniformity and sameness</li>
                            </ul>
                            <h3>The Strengths of Asperger's Syndrome can Give People:</h3>
                            <ul className="actions">
                                <li> • Incredible persistence and focus</li><br />
                                <li> • A strong ability to recognize patterns</li><br />
                                <li> • Strong attention to minute details</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={familysecondary} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>Challenges can include:</h3>
                            <ul className="actions">
                                <li> • Extreme sensitivity to sound, light, etc.</li>
                                <li> • Difficulty with the flow of social conversations</li>
                                <li> • Difficulty communicating nonverbally</li>
                                <li> • Uncoordinated and clumsy movements</li><br />
                                <li> • Depression/anxiety</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={familysecondary} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>
                                As mentioned before, these issues can vary between people. Many can work to mitigate and overcome these issues by working with a professional and having a reliable support system.
                                It is no longer recommended that individuals explore Asperger's Syndrome, though many Asperger's patients positively identify with being called an "Aspie."
              </h3>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={familysecondary} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>
                                Services and Treatments for Asperger's Syndrome
              </h3>
                            <ul className="actions">
                                <li> • Cognitive Behavioral Therapy, which will help to address any tension you have, as well as any other obstacles</li>
                                <li> • Social skills instruction sessions can assist with conversational abilities as well as understanding social cues</li>
                                <li> • Speech therapy can assist with vocal control</li>
                                <li> • Occupational and physical therapy can increase coordination</li>
                                <li> • Psychoactive medicines can help manage associated anxiety, depression, and attention deficit and hyperactivity disorder (ADHD)</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={familysecondary} alt="" />
                    <div className="content">
                        <div className="inner">
                            <h3>
                                The Understanding of Asperger's Syndrome Over the Years
              </h3>
                            <ul className="actions">
                                <h4> • 1944: Hans Asperger, a pediatrician from Austria, did a study on four young children. They all had remarkably high intelligence and a very narrow set of interests, despite lacking social abilities. All of them were also very clumsy</h4>
                                <h4> • 1981: British psychiatrist Lorna Wing had a series of remarkably similar case studies. Within these studies, she coined the term "Asperger's Syndrome."</h4>
                                <h4> • 1994: The DSM-IV adds Asperger's Syndrome to its print manual pages</h4>
                                <h4> • 2013: The DSM-V puts Asperger's Syndrome and some other individualized autism diagnoses within an extensive umbrella diagnosis of "Autism Spectrum Disorder."</h4>
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
                                    <h2>The Understanding of Asperger's Syndrome Over the Years</h2>
                                </header>
                                <span className="image main"><img src={pic11} alt="" /></span>
                                <ul className="actions">
                                    <h4> • 1944: Hans Asperger, a pediatrician from Austria, did a study on four young children. They all had remarkably high intelligence and a very narrow set of interests, despite lacking social abilities. All of them were also very clumsy</h4>
                                    <h4> • 1981: British psychiatrist Lorna Wing had a series of remarkably similar case studies. Within these studies, she coined the term "Asperger's Syndrome."</h4>
                                    <h4> • 1994: The DSM-IV adds Asperger's Syndrome to its print manual pages</h4>
                                    <h4> • 2013: The DSM-V puts Asperger's Syndrome and some other individualized autism diagnoses within an extensive umbrella diagnosis of "Autism Spectrum Disorder."</h4>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Family
