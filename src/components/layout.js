import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import AutismResources from './AutismResources'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            isAutismResourcesVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
        this.handleToggleAutismResources = this.handleToggleAutismResources.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    UNSAFE_componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible,
        })
        console.log('test1')
    }

    handleToggleAutismResources() {
        this.setState({
            isAutismResourcesVisible: !this.state.isAutismResourcesVisible,
        })
        console.log('test2')
    }
    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isAutismResourcesVisible ? 'is-autism-resources-visible' : ''} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} onToggleAutismMenu={this.handleToggleAutismResources} />
                    {children}
                    <Contact />
                    <Footer />
                </div>
                {this.state.isMenuVisible && <Menu onToggleMenu={this.handleToggleMenu} />}
                {this.state.isAutismResourcesVisible && <AutismResources onToggleAutismMenu={this.handleToggleAutismResources} />}
            </div>
        )
    }
}

export default Layout

