import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'


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
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>Services</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>Applied Behavior Analysis (ABS)</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>Mission</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/mission" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>About</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h3>GO CONFIDENTLY IN THE DIRECTION OF YOUR DREAMS.LIVE THE LIFE YOU HAVE IMAGINED.</h3>
                            </header>
                            <h4> - HENRY DAVID THOREAU</h4>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex