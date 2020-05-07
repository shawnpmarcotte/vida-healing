import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAutismCauses from '../components/BannerAutismCauses'

import autismcauses1 from '../assets/images/autismcauses1.jpg'
import autismcauses2 from '../assets/images/autismcauses2.jpg'
import autismcauses3 from '../assets/images/autismcauses3.jpg'
import autismcauses4 from '../assets/images/autismcauses4.jpg'


const AutismCauses = props => (
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
                    <span className="image main"><img src={autismcauses4} alt="" /></span>
                    <h2 className="pagesmain">The research tells us that autism tends to work in families. Some gene alterations raise the chance that a kid will develop autism. If one of the parents has one or more of the genes in question, there's a likelihood they'll get transferred to a kid (even if the parent doesn't have autism). Sometimes, these genetic changes occur in embryos spontaneously. Most of the genes don't guarantee autism, but they do increase the risk</h2>
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
                            <h4 className="pagesmain">Research even shows that some environmental influences might additionally increase - or even reduce - autism risk in individuals that are genetically susceptible to the disorder. Importantly, the expansion or maybe reduction in danger seems to be little for only one of those risk factors:</h4>
                            <h2 className="signsheader">Differing Brain Biology and their Impact on Autism Risk</h2>
                            <h4 className="pagesmain">
                                How can these non-genetic and genetic influences give rise to autism? Most people seem to influence the essential elements of early brain development. A few seem to influence how brain nerve cells, or maybe neurons, speak with one another. Others seem to influence how entire areas of the human brain speak with one another. Investigation continues to check out these differences with a watch to improving treatments as well as supports, which will enhance the quality of life
                            </h4>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <h1 className="signsheader">Possible Autism Risk:</h1>
                            <h3 className="pagesmain">Prenatal vitamins that contain folic acid, before and during conception / throughout pregnancy</h3>
                            <span className="image main"><img src={autismcauses2} alt="" /></span>
                            <h1 className="signsheader">No Impact on Risk:</h1>
                            <h3 className="pagesmain">Vaccines. Every family has its own unique circumstances with their autism diagnose(es); for some, it corresponds with their child's vaccine timing. Researchers have done a lot of research over the past few years to determine whether there's some link between childhood vaccinations and autism. <br />The outcomes have shown that autism isn't caused by vaccines. The American Academy of Pediatrics has assembled a thorough list of their analysis on this topic </h3>

                        </div>
                    </section>
                </div>
                <section>
                    <img src={autismcauses1} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h2 className="signsheader">Other Associated Risks with Autism</h2>
                            <ul className="pagesmain">
                                <h4 className="pagesmain">Either parent being much older than the typical parent</h4>
                                <h4 className="pagesmain">Complications during pregnancy (ex. prematurity less than 26 weeks, low birth weight, multiple pregnancies at once (triplets, twins, etc.)</h4>
                                <h4 className="pagesmain">Pregnancies that are spaced less than a season apart</h4>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <div id="main" className="alt">
                <div className="inner">
                    <header>
                        <h5>
                            <h3 className="signsblock">
                                The information listed above is not meant to diagnose autism for you or a loved one
                            </h3>
                        </h5>
                        <div className="pulsate-fwd">
                            <h2>Please Contact Us At Vida Healing Today To Learn How We can Help</h2>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    </Layout >
)

export default AutismCauses

