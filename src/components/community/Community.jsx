import React from 'react';
import websiteImage from "./../../assets/images/Website.png";
import videoBanner from "./../../assets/images/img2.png";

const Community = () => {
    return (
        <div className='container section-padding'>
            <h2 className="content-title"> What Is Akacoin? </h2>
            <div className="row mt-5">
                <div className="col-sm-5">
                    <div className="community-inner-details">
                        <h2 className="community-details-title">
                            The fastest growing and community friendly
                        </h2>
                        <div className="community-inner-banner">
                            <img src={websiteImage} alt="website banner" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="community-inner-details">
                        <div className="community-details">
                            <p>Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.</p>
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"> Explore Ecosystem
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="community-video">
                            <div className="custom-btn play-btn">
                                <div>
                                    <span>Learn Akacoin </span>
                                    <span>Watch Video </span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                                    </svg>
                                </div>
                            </div>
                            <img src={videoBanner} alt="Video Banner" />
                            <button className=" play-btn-round">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;