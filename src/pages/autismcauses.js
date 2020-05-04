import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAutismCauses from '../components/BannerAutismCauses'

import marriagecover from '../assets/images/marriage-cover.jpg'

const Marriage = props => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Marriage Page" />
        </Helmet>

        <BannerAutismCauses />

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <img className="fade-in-right" src={marriagecover} alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h3 className="signsblock">
                                A common question that comes after an autism diagnosis is, "What's the root cause of autism?"
                                The best studies on the topic suggest autism comes from a mix of genetic and nongenetic/ environmental factors.
                            </h3>
                            <h3 className="signsblock">
                                These mentioned influences seem to increase the likelihood that a child will develop autism.
                                It is vital, however, to remember that just because there's a risk doesn't mean it's the cause. For example, several gene changes associated with autism may also be in individuals who do not have the disorder. Likewise, not everybody exposed to an environmental risk factor for autism is going to develop the disorder. Many won't.
                            </h3>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={marriagecover} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1 className="signsheader">Autism: The Genetic Risk Factors</h1>
                            <ul>
                                <h4> • The research tells us that autism tends to work in families. Some gene alterations raise the chance that a kid will develop autism. If one of the parents has one or more of the genes in question, there's a likelihood they'll get transferred to a kid (even if the parent doesn't have autism). Sometimes, these genetic changes occur in embryos spontaneously. Most of the genes don't guarantee autism, but they do increase the risk.</h4>
                                <h4> • Just 1 out of 144 females stated they had autism</h4>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={marriagecover} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1 className="signsheader">Autism's Environmental Risk Factors</h1>
                            <h4>Research even shows that some environmental influences might additionally increase - or even reduce - autism risk in individuals that are genetically susceptible to the disorder. Importantly, the expansion or maybe reduction in danger seems to be little for only one of those risk factors:</h4>
                            <ul>
                                <h3>The Increased Risks Associated with Autism:</h3>
                                <h4> • A parent that is much older than the typical parent (either parent)</h4>
                                <h4> • Complications during pregnancy (example: prematurity less than 26 weeks, low birth weight, multiple pregnancies at once (triplets, twins, etc.)</h4>
                                <h4> • Pregnancies that are spaced less than a season apart</h4>
                            </ul>
                            <div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={marriagecover} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1 className="signsheader">Reducing the Risk of Autism</h1>
                            <h3>Possible autism risk:</h3>
                            <ul>
                                <h4> • Prenatal vitamins that contain folic acid, before and during conception / throughout pregnancy</h4>
                                <h4> • Complications during pregnancy (example: prematurity less than 26 weeks, low birth weight, multiple pregnancies at once (triplets, twins, etc.)</h4>
                                <h4> • Pregnancies that are spaced less than a season apart</h4>
                            </ul>
                            <h3>No impact on risk:</h3>
                            <ul>
                                <h4> • Vaccines. Every family has a unique situation with their autism diagnose(es); for some, it corresponds with their child's vaccine timing. Researchers have done a lot of research over the past few years to determine whether there's some link between childhood vaccinations and autism</h4>
                                <h4> • The outcomes have shown that autism isn't caused by vaccines. The American Academy of Pediatrics has assembled a thorough list of their analysis on this topic</h4>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={marriagecover} className="fade-in-right" alt="" />
                    <div className="content">
                        <div className="fade-in-right">
                            <h1>Differing Brain Biology and their Impact on Autism Risk</h1>
                            <h3>How can these nongenetic and genetic influences give rise to autism?</h3>
                            <ul>
                                <h4> • Most people seem to influence the essential elements of early brain development. A few seem to influence how brain nerve cells, or maybe neurons, speak with one another. </h4>
                                <h4> • Others seem to influence how entire areas of the human brain speak with one another. Investigation continues to check out these differences with a watch to improving treatments as well as supports, which will enhance the quality of life.</h4>
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
    </Layout >
)

export default Marriage

{/* <h3>If you are looking for a caring, compassionate, and professionalmarriage or couples therapist please contact us today</h3> */ }
