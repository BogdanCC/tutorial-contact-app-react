import React, { Component } from 'react';
import PropTypes from 'prop-types'

import HeaderTemplate from './header.template';
import './header.component.css';

class Header extends Component {
    // Setting default props
    static defaultProps = {
        branding: "My App"
    };
    // Setting types for props
    static propTypes = {
        branding: PropTypes.string.isRequired
    };
    // Render Template
    render() {
        const { branding } = this.props;
        return <HeaderTemplate brand={branding} />;
    }
}

export default Header;