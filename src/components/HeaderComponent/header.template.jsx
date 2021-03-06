import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTemplate = props => {
    const { brand } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">{brand}</Link>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><i className="fas fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i> Add contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><i className="fas fa-question"></i> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/test" className="nav-link"><i className="fas fa-wrench"></i> Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderTemplate;