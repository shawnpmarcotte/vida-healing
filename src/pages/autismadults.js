import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAutismAdults from '../components/BannerAutismAdults'

import factsandstats5 from '../assets/images/factsandstats5.jpg'



const AutismAdults = () => (
    <Layout>
        <Helmet>
            <title>Autism In Adults</title>
            <meta name="Applied Behavior Analysis" content="Applied Behavior Analysis" />
        </Helmet>
        <BannerAutismAdults />
        <div >
            <section className="fade-in-right" id="one">
                <div className="inner">
                    <span className="image main"><img src={factsandstats5} alt="" /></span>
                    <h3 className="pagesmain">Over the past decade, over 110,000 kids per year will enter age and adulthood out of school-based autism services</h3>
                    <h3 className="pagesmain">Teenagers with autism receive healthcare transition services about half as much as individuals that have other specific medical needs. (Younger kids with medical issues linked with autism are less prone to get transition support)</h3>
                    <h3 className="pagesmain">Over half of young adults with autism don't enroll in higher education more than two years after completing high school. This is less of an issue for young adults with autism, as it is with speech impediments and various other disorders</h3>
                    <h3 className="pagesmain">Of the nearly 18,000 individuals with autism that utilize state-funded vocational rehabilitation programs in 2014, only about 60% of them completed the program. Of the ones that did, 80% earned around $160/week, earnings that guarantee they're way below the poverty line</h3>
                    <h3 className="pagesmain">Nearly ½ of those aged 25 with autism have never had a paying job</h3>
                    <h3 className="pagesmain">Research has shown that jobs/job tasks that emphasize independence help to reduce and mitigate autism symptoms as well as increase everyday living skills</h3>
                </div>
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

export default AutismAdults