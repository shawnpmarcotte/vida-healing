import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import pic09 from '../assets/images/pic09.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Autism: Facts and Statistics</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h1>The Prevalence of Autism</h1>
                    <ul className="actions">
                        <h3> • In 2020, the CDC found that around 2% of kids surveyed in the United States were identified as having Autism Spectrum Disorder</h3  >
                        <h3> • 3% of boys surveyed stated they had autism.</h3 >
                        <h3> • Just 1 out of 144 females stated they had autism. </h3>
                        <h3> • There is a 4x increased likelihood of a boy being diagnosed with autism than a girl</h3>
                        <h3> • Most kids were diagnosed after the age of 4 (though autism can be reliably diagnosed by age 2)</h3>
                        <h3> • Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</h3>
                        <h3> • Autism affects people from all ethnicities and social classes</h3>
                        <h3> • Minorities groups are often diagnosed much later.</h3>
                        <h3> • The earlier it is diagnosed, the better the management and treatment can be, and the better the quality of life will be later</h3>
                        <h3> • There are no health-related detections for autism</h3>
                        <h1>Autism: What Brings it About?</h1>
                        <h3> • Extensive research has suggested that the genes are active in most autism instances</h3>
                        <h3> • Children who were born to much-older parents have a higher likelihood of autism</h3>
                        <h3> • Parents who had a child with ASD have a between 2-18% chance of having a second affected kid</h3>
                        <h3> • Studies show if identical twins have one twin with ASD, there is a thirty-six to ninety-five-percent change of it occurring in the other twin. In non-identical twins, if one has ASD, then the other twin has a thirty-one-percent chance</h3>
                        <h3> • There have been many studies in the last two years, which explored the possibility of a link between autism and vaccines during childhood. The outcomes have clearly shown that vaccines do not result in autism</h3>
                    </ul>
                </div>
            </section>
            <div id="main">
                <section id="two" className="spotlights">
                    <section>
                        <img className="image" src={pic09} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h2>Autism: Intervention and Supports</h2>
                                <ul className="actions">
                                    <h4> • Limited smiling/joyful and engaging expressions</h4>
                                    <h4> • Applied behavior analysis is based upon concepts that are explored and commonly used in autism behavioral interventions</h4>
                                    <h4> • Many kids that have autism also get a lot of benefit from speech therapy and occupational therapy.</h4>
                                    <h4> • Developmental ability regression (like community interests and language) affects about 20% of kids that are later identified as on the autism spectrum; this usually occurs between ages one and three</h4>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img className="image" src={pic09} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h2>The Challenges</h2>
                                <ul className="actions">
                                    <li> • About 1/3 of autistic kids are nonverbal and cannot speak</li>
                                    <li> • Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</li>
                                    <li> • About half of people with autism run and wander into unsafe situations</li>
                                    <li> • Nearly 66% of kids between the ages of six and fifteen have experienced bullying</li>
                                    <li> • About 30% of 8-year-olds that have ASD have self-injured before. Arm biting, skin scratching, and headbanging are among the most common manifestations of this</li>
                                    <li> • For kids with autism ages 14 and under, drowning remains a large cause of death, resulting in up to 90% of physical deaths from autism</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div id="main" className="alt">
                        <section id="one">
                            <div className="inner">
                                <header className="major">
                                </header>
                                <span className="image main"><img src={pic11} alt="" /></span>
                                <h1>Associated Medical and Mental Health Conditions</h1>
                                <h4> • Autism affects the entire body and can change the body as well</h4>
                                <h4> • Over 50% of kids with autism have sleeping problems</h4>
                                <h4> • Up to 40% of autistic kids and teens have suffered from anxiety disorders</h4>
                                <h4> • Up to about 25% of adults with autism suffer from depression</h4>
                                <h4> • Kids that have autism are up to 8 times more likely to suffer from chronic and long-term gastrointestinal problems and disorders</h4>
                                <h4> • Up to 1/3 of kids with autism also have epilepsy/seizure disorders</h4>
                                <h4> • Up to 35% of adults with autism have schizophrenia. Schizophrenia affects about 1.1 % of the population overall</h4>
                                <h4> •  Health issues linked to autism extend across an individual's entire life - from little kids to senior citizens. Nearly 1/3 of kids ages 2-5 with autism have obesity problems, and about 15% are obese. To compare, less than 25% of kids age 2-5 in the overall public are obese, and only 10% are medically obese</h4>
                                <h4> • Aripiprazole and Risperidone have been linked with irritability and agitation. These are the only FDA-approved medicines for treating autism.</h4>
                            </div>
                        </section>
                    </div>
                    <section>
                        <img className="image" src={pic09} alt="" />
                        <div className="content">
                            <div className="inner">
                                <h3>Caregivers and Families </h3>
                                <ul className="actions">
                                    <li> • The typical autistic individual requires nearly $60,000 of medical spending a year throughout their youth; much of this cost is spent on special services, and this includes lost wages of the parents as they deal with the autistic children. The costs go up with an intellectual disability</li>
                                    <li> • Moms of kids that have ASD are less likely to work outside the home, as they must spend time working with the children and their problems linked to autism. They work fewer hours a week and earn over 50% less than mothers without children with autism. They earn 35% less than moms with kids of other disorders and disabilities</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h1>Autism for Adults</h1>
                    <h4> Over the past decade, over 110,000 kids per year will enter age and adulthood out of school-based autism services</h4>
                    <h4>Teenagers with autism receive healthcare transition services about half as much as individuals that have other specific medical needs. (Younger kids with medical issues linked with autism are less prone to get transition support)</h4>
                    <h4>Over half of young adults with autism don't enroll in higher education more than two years after completing high school. This is less of an issue for young adults with autism, as it is with speech impediments and various other disorders.</h4>
                    <h4>Of the nearly 18,000 individuals with autism that utilize state-funded vocational rehabilitation programs in 2014, only about 60% of them completed the program. Of the ones that did, 80% earned around $160/week, earnings that guarantee they're way below the poverty line</h4>
                    <h4>Nearly ½ of those aged 25 with autism have never had a paying job.</h4>
                    <h4>Research has shown that jobs/job tasks that emphasize independence help to reduce and mitigate autism symptoms as well as increase everyday living skills</h4>
                </div>
            </section>
        </div>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h1>Autism in Teens and Young Adults: The Signs</h1>
                    <h4>Do you think there are signs you or an adult/teen individual you know has autism? Many people have milder autism, which goes unnoticed and undiagnosed until adulthood. You can learn more in our guide: "Is it Autism and If So, What Next?"</h4>
                    <h4>This online screen, which is offered on our website, will only require a couple of minutes to fill out. If the answers show a substantial likelihood of autism, please talk to your pediatrician. Similarly, don't wait to ask if you have any other questions. Talk to healthcare provider today about getting a screening done.</h4>
                    <h2>If your child has any of the above issues, please investigate having your child screened and contact your healthcare provider. The M-CHAT (Modified Checklist for Autism in Toddlers™) can help you determine if a specialist is necessary to assess your kid. </h2>
                    <h2>Please contact us at Vida Healing for an appointment today ifyou need assistance</h2>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic