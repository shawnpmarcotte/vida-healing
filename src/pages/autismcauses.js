import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAutismCauses from '../components/BannerAutismCauses'

import autismcauses1 from '../assets/images/autismcauses1.jpg'
import autismcauses2 from '../assets/images/autismcauses2.jpg'
import autismcauses3 from '../assets/images/autismcauses3.jpg'
import autismcausesmain from '../assets/images/autismcausesmain.jpg'


const Marriage = props => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Marriage Page" />
        </Helmet>

        <BannerAutismCauses />

        <div id="main">
            <section id="one" className="fade-in-right">
                <div className="inner">
                    <h1 className="signsheader">The Genetic Risk Factors</h1>
                    <span className="image main"><img src={autismcausesmain} alt="" /></span>
                    <h3 className="pagesmain">The research tells us that autism tends to work in families. Some gene alterations raise the chance that a kid will develop autism. If one of the parents has one or more of the genes in question, there's a likelihood they'll get transferred to a kid (even if the parent doesn't have autism). Sometimes, these genetic changes occur in embryos spontaneously. Most of the genes don't guarantee autism, but they do increase the risk.</h3>
                    <ul>
                    </ul>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={autismcauses3} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="signsheader">Environmental Risk Factors</h2>
                            <h4 className="pagesmain">Research even shows that some environmental influences might additionally increase - or even reduce - autism risk in individuals that are genetically susceptible to the disorder</h4>
                            <h2 className="signsheader">Other Associated Risks with Autism</h2>
                            <ul className="pagesmain">
                                <h4>Either parent being much older than the typical parent</h4>
                                <h4>Complications during pregnancy (ex. prematurity less than 26 weeks, low birth weight, multiple pregnancies at once (triplets, twins, etc.)</h4>
                                <h4>Pregnancies that are spaced less than a season apart</h4>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <h1 className="signsheader">Possible Autism Risk:</h1>
                            <h4 className="pagesmain">Prenatal vitamins that contain folic acid, before and during conception / throughout pregnancy</h4>
                            <span className="image main"><img src={autismcauses2} alt="" /></span>
                            <h1 className="signsheader">No Impact on Risk:</h1>
                            <h4 className="pagesmain">Vaccines. Every family has a unique situation with their autism diagnose(es); for some, it corresponds with their child's vaccine timing. Researchers have done a lot of research over the past few years to determine whether there's some link between childhood vaccinations and autism</h4>
                            <h4 className="pagesmain">The outcomes have shown that autism isn't caused by vaccines. The American Academy of Pediatrics has assembled a thorough list of their analysis on this topic</h4>

                        </div>
                    </section>
                </div>
                <section>
                    <img src={autismcauses1} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1>Differing Brain Biology and their Impact on Autism Risk</h1>
                            <h3>How can these nongenetic and genetic influences give rise to autism?</h3>
                            <ul>
                                <h4 className="pagesmain">Most people seem to influence the essential elements of early brain development. A few seem to influence how brain nerve cells, or maybe neurons, speak with one another. </h4>
                                <h4 className="pagesmain">Others seem to influence how entire areas of the human brain speak with one another. Investigation continues to check out these differences with a watch to improving treatments as well as supports, which will enhance the quality of life.</h4>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div id="main" className="alt">
                <div className="inner">
                    <header>
                        <h5>
                            <h5 className="signsblock">
                                The information listed above is not meant to diagnose autism for you or a loved one. Please consult your physician so they can make a proper diagnosis
                            </h5>
                        </h5>
                        <div className="pulsate-fwd">
                            <h2>Please contact us at Vida Healing for an appointment today if you need assistance</h2>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </Layout >
)

export default Marriage

{/* <h3>If you are looking for a caring, compassionate, and professionalmarriage or couples therapist please contact us today</h3> */ }
