import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import individualCover from '../assets/images/individual-cover.jpg'
import abaCover from '../assets/images/aba-cover.jpg'
import marriageCover from '../assets/images/marriage-cover.jpg'
import familyCover from '../assets/images/family-cover.jpg'
import missionCover from '../assets/images/mission-cover.jpg'
import aboutCover from '../assets/images/about-cover.jpg'
import pic07 from '../assets/images/pic07.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <div id="main">
          <section id="one" className="tiles">
            {/******************************************
             This is the SIGNS OF AUTISM article 
            ******************************************/}
            <article style={{ backgroundImage: `url(${individualCover})` }}>
              <header className="major">
                <h3>Individual Therapy</h3>
              </header>
              <Link to="/individual" className="link primary" />
            </article>
            {/******************************************
              This is the CORE SYMTPOMS OF AUTISM article 
              ******************************************/}
            <article style={{ backgroundImage: `url(${abaCover})` }}>
              <header className="major">
                <h3>Applied Behavior Analysis (ABA Therapy)</h3>
              </header>
              <Link to="/aba" className="link primary" />
            </article>
            {/********************************************** 
            This is the AUTISM: WHAT ARE THE CAUSES? article 
            ************************************************/}
            <article style={{ backgroundImage: `url(${marriageCover})` }}>
              <header className="major">
                <h3>Marriage and Couples Therapy</h3>
              </header>
              <Link to="/marriage" className="link primary" />
            </article>
            {/****************************************
             This is the ASBERGERS SYNDROME article 
            ******************************************/}
            <article style={{ backgroundImage: `url(${familyCover})` }}>
              <header className="major">
                <h3>Family Therapy</h3>
              </header>
              <Link to="/family" className="link primary" />
            </article>
            {/* <article style={{ backgroundImage: `url(${marriageCover})` }}>
              <header className="major">
                <h3>Autism: Facts and Statistics</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/autismfacts" className="link primary" />
            </article> */}
            {/* <section>
              <div>
                <header className="major">
                  <h3>
                    IT DOES NOT MATTER HOW SLOWLY YOU GO, AS LONG AS YOU DO NOT STOP
                </h3>
                </header>
                <h4> - CONFUCIOUS</h4>
              </div>
            </section> */}
            {/*****************************************
             This is the MISSION article 
             ******************************************/}
            {/* <article style={{ backgroundImage: `url(${missionCover})` }}>
              <header className="major">
                <h3>Mission</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/mission" className="link primary" />
            </article> */}
            {/******************************************
              This is the ABOUT article 
              ******************************************/}
            {/* <article style={{ backgroundImage: `url(${aboutCover})` }}>
              <header className="major">
                <h3>About</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/about" className="link primary" />
            </article> */}
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h3>
                  GO CONFIDENTLY IN THE DIRECTION OF YOUR DREAMS. LIVE THE LIFE
                  YOU HAVE IMAGINED.
                </h3>
              </header>
              <h4> - HENRY DAVID THOREAU</h4>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
