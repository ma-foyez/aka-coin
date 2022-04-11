import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "./../../assets/images/logo.png"

const DashboardSidebar = () => {
    return (
        <div className='dashboard-sidebar-menu'>
            <div className="brand-logo dashboard-sidebar-logo">
                <Link to="/">
                    <img src={logo} alt="Space brand logo" />
                </Link>
            </div>
            <div className="menu-list">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Wallets</Accordion.Header>
                        <Accordion.Body>
                            <ul className=''>
                                <li> <NavLink to="/wallet-list">List Wallets</NavLink> </li>
                                <li> <NavLink to="/add-wallet">Add Wallets</NavLink> </li>
                                <li> <NavLink to="/edit-wallet">Edit Wallets</NavLink> </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Guidelines</Accordion.Header>
                        <Accordion.Body>
                            <ul className=''>
                                <li> <NavLink to="/guideline-list"> Guidelines List</NavLink> </li>
                                <li> <NavLink to="/add-guideline">Add Guidelines</NavLink> </li>
                                <li> <NavLink to="/edit-guideline">Edit Guidelines</NavLink> </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    );
};

export default DashboardSidebar;