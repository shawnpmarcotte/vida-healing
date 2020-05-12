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

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible,
        })
    }

    handleToggleAutismResources() {
        this.setState({
            isAutismResourcesVisible: !this.state.isAutismResourcesVisible,
        })
    }
    render() {
        const { children } = this.props

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible || this.state.isAutismResourcesVisible ? 'is-menu-visible' : 'is-autism-resources-visible'}`}>
                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} onToggleAutismMenu={this.handleToggleAutismResources} />
                    {children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
                <AutismResources onToggleAutismMenu={this.handleToggleAutismResources} />
            </div>
        )
    }
}

export default Layout
