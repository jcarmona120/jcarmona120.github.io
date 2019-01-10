import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Github from './images/github.svg';
import Twitter from './images/twitter-logo-button.svg'
import styled from 'styled-components'

export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenu: false
        }

        this.showMobileMenu = this.showMobileMenu.bind(this)
    }
   

    showMobileMenu = () => {
        this.setState({
          mobileMenu: !this.state.mobileMenu
        })
        console.log(this.state.mobileMenu)
      }

    render() {
        const NavBar = styled.nav`
            console.log(props)

            @media (max-width: 800px) {
                display: ${props => props.mobileMenu ? 'block' : 'none'}
            }
        `

        return (
            <div className="app-nav-mobile">
              
                <NavBar mobileMenu = {this.state.mobileMenu}>
                    <ul className="carmona-links">
                        <li>
                            <h3><Link to="/projects" className="carmona-links_link">PORTFOLIO</Link></h3>
                        </li>
                    </ul>
                </NavBar>
            </div>
        )
    }
}


