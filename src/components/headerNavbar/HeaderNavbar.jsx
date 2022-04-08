import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "./../../assets/images/logo.png"

const HeaderNavbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header>
            <Container>
                {/* medium to large devices navbar  */}
                <div className="d-none d-md-block">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="brand-logo responsive-nav">
                            <Link to="/">
                                <img src={logo} alt="Space brand logo" />
                            </Link>
                        </div>
                        <div className="navbar-menu">
                            <ul className='d-flex justify-content-between'>
                                <li> <NavLink to="/ecosystem">Ecosystem</NavLink> </li>
                                <li> <NavLink to="/buy">Buy</NavLink> </li>
                                <li> <NavLink to="/what-ako">What is AKO?</NavLink> </li>
                                <li> <NavLink to="/learn">Learn</NavLink> </li>
                                <li> <NavLink to="/community" >Community</NavLink> </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Small device navbar */}
                <div className="d-block d-md-none">
                    <div className="brand-logo responsive-nav">
                        <Link to="/">
                            <img src={logo} alt="Space brand logo" />
                        </Link>
                        {
                            toggleMenu ?
                                <svg onClick={() => setToggleMenu(!toggleMenu)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> :
                                <svg onClick={() => setToggleMenu(!toggleMenu)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        }
                    </div>
                    <div className={`navbar-menu responsive ${toggleMenu === true && "show"}`}>
                        <ul>
                            <li> <NavLink to="/ecosystem">Ecosystem</NavLink> </li>
                            <li> <NavLink to="/buy">Buy</NavLink> </li>
                            <li> <NavLink to="/what-ako">What is AKO?</NavLink> </li>
                            <li> <NavLink to="/learn">Learn</NavLink> </li>
                            <li> <NavLink to="/community" >Community</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>

    );
};

export default HeaderNavbar;