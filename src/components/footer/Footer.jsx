import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../assets/images/logo.png"
import github from "./../../assets/svg/github-brands.svg"
import messageBot from "./../../assets/svg/message-bot.svg"
import facebook from "./../../assets/svg/facebook.svg"
import insgram from "./../../assets/svg/instagram-brands.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-6 mt-2">
                            <div className="transaction">
                                <p>Transactions/Second</p>
                                <h3 className="transaction-amount">2,905</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-2">
                            <div className="transaction">
                                <p>Total Transactions</p>
                                <h3 className="transaction-amount">$64,540,129</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-2">
                            <div className="transaction">
                                <p>Avg. Cost/Transaction</p>
                                <h3 className="transaction-amount">$0.00025</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-2">
                            <div className="transaction">
                                <p>Validator Nodes</p>
                                <h3 className="transaction-amount">1,645</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="brand-logo">
                            <Link to="/">
                                <img src={logo} alt="Space brand logo" />
                            </Link>
                        </div>
                        <div className="footer-nav">
                            <ul>
                                <li><Link to="/ecosystem">Living Ecosystem</Link></li>
                                <li><Link to="/decentralized">Decentralized Token</Link></li>
                            </ul>
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                        <div className="footer-inner">
                            <h5 className="title">Pages</h5>
                            <Link to="/">Network Statistic</Link>
                            <Link to="/">What is AkaCoin</Link>
                            <Link to="/">Wallets</Link>
                            <Link to="/">Quick Start Guide</Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                        <div className="footer-inner">
                            <h5 className="title">Learn</h5>
                            <Link to="/">Blog</Link>
                            <Link to="/">Video</Link>
                            <Link to="/">Podcast</Link>
                            <Link to="/">Network states</Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 col-6">
                        <div className="footer-inner">
                            <h5 className="title">Support</h5>
                            <Link to="/">Customers Service</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Community</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                        <div className="footer-inner">
                            <h5 className="title">About AKA.Coin</h5>
                            <Link to="/">About us</Link>
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Term of use</Link>
                            <Link to="/">Quick start guide</Link>
                            <Link to="/">Language support</Link>
                            <Link to="/">Cookie policy</Link>
                        </div>
                    </div>
                </div>
                {/* footer copy right  */}
                <div className="footer-copyright">
                    <p className='copy-right-text'> &copy; {new Date().getFullYear()} AKA.COIN. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;