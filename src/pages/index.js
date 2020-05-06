import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic09 from '../assets/images/pic09.jpg'
import abaCover from '../assets/images/aba-cover.jpg'
import marriagecovertwo from '../assets/images/marriage-cover-two.jpg'
import familyCover from '../assets/images/family-cover.jpg'




class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Vida Healing | Applied Behavior Analysis Therapy"
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
            <article style={{ backgroundImage: `url(${pic09})` }}>
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
            <article style={{ backgroundImage: `url(${marriagecovertwo})` }}>
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
          </section>
          <section id="two">
            <div className="inner">
              <header className="major" className="pulsate-fwd">
                <h3>
                  "GO CONFIDENTLY IN THE DIRECTION OF YOUR DREAMS. LIVE THE LIFE
                  YOU HAVE IMAGINED"
                </h3>
              </header>
              <h4 className="pulsate-fwd"> - HENRY DAVID THOREAU</h4>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
