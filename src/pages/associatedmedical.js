import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAssociatedMedical from '../components/BannerAssociatedMedical'

import factsandstats7 from '../assets/images/factsandstats7.jpg'


const Generic = () => (
    <Layout>
        <Helmet>
            <title>Applied Behavior Analysis</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>
        <BannerAssociatedMedical />
        <div id="main" className="fade-in-right">
            <section id="one">
                <div className="inner">
                    <span className="image main"><img src={factsandstats7} alt="" /></span>
                    <h3 className="pagesmain">Autism affects the entire body and can change the body as well</h3>
                    <h3 className="pagesmain">Over 50% of kids with autism have sleeping problems</h3>
                    <h3 className="pagesmain">Up to 40% of autistic kids and teens have suffered from anxiety disorders</h3>
                    <h3 className="pagesmain">Up to about 25% of adults with autism suffer from depression</h3>
                    <h3 className="pagesmain">Kids that have autism are up to 8 times more likely to suffer from chronic and long-term gastrointestinal problems and disorders</h3>
                    <h3 className="pagesmain">Up to 1/3 of kids with autism also have epilepsy/seizure disorders</h3>
                    <h3 className="pagesmain">Up to 35% of adults with autism have schizophrenia. Schizophrenia affects about 1.1 % of the population</h3>
                    <h3 className="pagesmain">Health issues linked to autism extend across an individual's entire life. Nearly 1/3 of kids ages 2-5 with autism have obesity problems. To compare, less than 25% of kids age 2-5 in the overall public are obese</h3>
                    <h3 className="pagesmain">Aripiprazole and Risperidone have been linked with irritability and agitation. These are the only FDA-approved medicines for treating autism</h3>
                </div>
            </section>
        </div>
        <div id="main">
            <div className="inner">
                <div className="pulsate-fwd">
                    <h2>Please Contact Us At Vida Healing Today To Learn How We can Help</h2>
                </div>
            </div>
        </div>
    </Layout >
)

export default Generic