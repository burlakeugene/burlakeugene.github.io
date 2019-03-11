import React, { Component } from 'react'
import Logo from '../Logo';
import './styles/styles.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <Logo />
                </div>
            </header>
        )
    }
}

export default Header;