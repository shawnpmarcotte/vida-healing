import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import factsandstats from '../assets/images/factsandstats.jpg'
import factsandstats1 from '../assets/images/factsandstats1.jpg'
import factsandstats2 from '../assets/images/factsandstats2.jpg'
import factsandstats3 from '../assets/images/factsandstats3.jpg'
import factsandstats4 from '../assets/images/factsandstats4.jpg'

const AutismFacts = () => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
        <div id="main" className="alt" >
            <section id="one" className="fade-in-right">
                <div className="inner">
                    <header className="major">
                        <h1>Autism: Facts and Statistics</h1>
                    </header>
                    <span className="image main"><img src={factsandstats} alt="" /></span>
                    <h1 className="signsblock">The Prevalence of Autism</h1>
                    <ul className="actions">
                        <h3 className="pagesmain">In 2020, the CDC found that around 2% of kids surveyed in the United States were identified as having Autism Spectrum Disorder</h3  >
                        <h3 className="pagesmain">3% of boys surveyed stated they had autism</h3 >
                        <h3 className="pagesmain">Just 1 out of 144 females stated they had autism</h3>
                        <h3 className="pagesmain">There is a 4x increased likelihood of a boy being diagnosed with autism than a girl</h3>
                        <h3 className="pagesmain">Most kids were diagnosed after the age of 4 (though autism can be reliably diagnosed by age 2)</h3>
                        <h3 className="pagesmain">Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</h3>
                        <h3 className="pagesmain">Autism affects people from all ethnicities and social classes</h3>
                        <h3 className="pagesmain">Minorities groups are often diagnosed much later</h3>
                        <h3 className="pagesmain">The earlier it is diagnosed, the better the management and treatment can be, and the better the quality of life will be later</h3>
                        <h3 className="pagesmain">There are no health-related detections for autism</h3>
                        <span className="image main"><img src={factsandstats3} alt="" /></span>
                        <h1 className="signsblock">Autism: What Brings it About?</h1>
                        <h3 className="pagesmain">Extensive research has suggested that the genes are active in most autism instances</h3>
                        <h3 className="pagesmain">Children who were born to much-older parents have a higher likelihood of autism</h3>
                        <h3 className="pagesmain">Parents who had a child with ASD have a between 2-18% chance of having a second affected kid</h3>
                        <h3 className="pagesmain">Studies show if identical twins have one twin with ASD, there is a thirty-six to ninety-five-percent change of it occurring in the other twin. In non-identical twins, if one has ASD, then the other twin has a thirty-one-percent chance</h3>
                        <h3 className="pagesmain">There have been many studies in the last two years, which explored the possibility of a link between autism and vaccines during childhood. The outcomes have clearly shown that vaccines do not result in autism</h3>
                    </ul>
                </div>
            </section>
            <div id="main">
                <section id="two" className="spotlights">
                    <section>
                        <img className="image" src={factsandstats1} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h1 className="signsblock">INTERVENTION AND SUPPORT</h1>
                                <ul className="actions">
                                    <h4 className="pagesmain">Early treatment boosts interaction, social skills, and learning. It also supports underlying brain development</h4>
                                    <h4 className="pagesmain">Applied behavior analysis is based upon concepts that are explored and commonly used in autism behavioral interventions</h4>
                                    <h4 className="pagesmain">Many kids that have autism also get a lot of benefit from speech therapy and occupational therapy</h4>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img className="image" src={factsandstats2} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h1 className="signsblock">THE CHALLENGES</h1>
                                <ul className="actions">
                                    <div className="pagesmain">
                                        <h4>About 1/3 of autistic kids are nonverbal and cannot speak</h4>
                                        <h4>About half of people with autism run/wander into unsafe situations</h4>
                                        <h4>66% of kids between ages 6-15 experience bullying</h4>
                                        <h4>Drowning accounts for about 90% of physical deaths in kids with autism ages 14 and under</h4>
                                        <h4>About 30% of 8-year-olds that have ASD have self-injured before (ex. arm biting/skin scratching/headbanging)</h4>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img className="image" src={factsandstats4} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h1 className="signsblock">Caregivers and Families </h1>
                                <ul className="actions">
                                    <h4 className="pagesmain">The typical autistic individual requires nearly $60k for annual medical expenses; Lost wages of the parents as they deal with the autistic children also must be taken into account.<br />
                                    Moms of kids that have ASD are less likely to work outside the home, as they must spend time working with the children and their problems linked to autism. They work fewer hours a week and earn over 50% less than mothers without children with autism. They earn 35% less than moms with kids of other disorders and disabilities</h4>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
        <div id="main" className="alt">
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

export default AutismFacts