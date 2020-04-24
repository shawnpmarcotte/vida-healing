import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerMarriage from '../components/BannerMarriage'

import marriagecover from '../assets/images/marriage-cover.jpg'

const Marriage = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Marriage Page" />
    </Helmet>

    <BannerMarriage />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <img src={marriagecover} alt="" />
          <div className="content">
            <div className="inner">
              <h1>The Prevalence of Autism</h1>
              <ul>
                <li> • In 2020, the CDC found that around 2% of kids surveyed in the United States were identified as having Autism Spectrum Disorder. </li>
                <li> • Just 1 out of 144 females stated they had autism</li>
                <li> • There is a 4x increased likelihood of a boy being diagnosed with autism than a girl.</li>
                <li> • Most kids were diagnosed after the age of 4 (though autism can be reliably diagnosed by age 2).</li>
                <li> • Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</li>
                <li> • Autism affects people from all ethnicities and social classes</li>
                <li> • Minorities groups are often diagnosed much later</li>
                <li> • The earlier it is diagnosed, the better the management and treatment can be, and the better the quality of life will be later</li>
                <li> • There are no health-related detections for autism</li>
              </ul>
              <div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img src={marriagecover} alt="" />
          <div className="content">
            <div className="inner">
              <h1>Autism: What Brings it About?</h1>
              <ul>
                <li> • In 2020, the CDC found that around 2% of kids surveyed in the United States were identified as having Autism Spectrum Disorder. </li>
                <li> • Just 1 out of 144 females stated they had autism</li>
                <li> • There is a 4x increased likelihood of a boy being diagnosed with autism than a girl.</li>
                <li> • Most kids were diagnosed after the age of 4 (though autism can be reliably diagnosed by age 2).</li>
                <li> • Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</li>
                <li> • Autism affects people from all ethnicities and social classes</li>
                <li> • Minorities groups are often diagnosed much later</li>
                <li> • The earlier it is diagnosed, the better the management and treatment can be, and the better the quality of life will be later</li>
                <li> • There are no health-related detections for autism</li>
              </ul>
              <div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img src={marriagecover} alt="" />
          <div className="content">
            <div className="inner">
              <h1>The Prevalence of Autism</h1>
              <ul>
                <li> • In 2020, the CDC found that around 2% of kids surveyed in the United States were identified as having Autism Spectrum Disorder. </li>
                <li> • Just 1 out of 144 females stated they had autism</li>
                <li> • There is a 4x increased likelihood of a boy being diagnosed with autism than a girl.</li>
                <li> • Most kids were diagnosed after the age of 4 (though autism can be reliably diagnosed by age 2).</li>
                <li> • Over 30% of kids with ASD have at least one intellectual disability (under 70 IQ), about ¼ of kids are in the borderline range (IQ between 71 and 85), and about 45% have a typical-to-above-average (>85)</li>
                <li> • Autism affects people from all ethnicities and social classes</li>
                <li> • Minorities groups are often diagnosed much later</li>
                <li> • The earlier it is diagnosed, the better the management and treatment can be, and the better the quality of life will be later</li>
                <li> • There are no health-related detections for autism</li>
              </ul>
              <div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Marriage

{/* <h3>If you are looking for a caring, compassionate, and professionalmarriage or couples therapist please contact us today</h3> */ }
