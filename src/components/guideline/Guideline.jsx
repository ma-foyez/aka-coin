import React from 'react';
import wallet from "./../../assets/images/Wallet.png"
import Hand from "./../../assets/images/Hand Hold Bitcoin.png"
import laptop from "./../../assets/images/Laptop.png"
import Machine from "./../../assets/images/Machine.png"

const Guideline = () => {
    return (
        <section id='guideline' className='guideline'>
            <div className="container section-padding mt-3">
                <h2 className="content-title"> Quick Start Guide </h2>
                <div className="row mt-2">
                    <div className="col-sm-6">
                        <div className="guideline-inner">
                            <div className='guideline-img'>
                                <img src={wallet} alt="Create Wallet" />
                            </div>
                            <div className="details">
                                <h2 className="details-title">1. Create a wallet</h2>
                                <p className='wallet-details'>Create a Wallet using either a desktop <br /> computer or an mobile device</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="guideline-inner">
                            <div className='guideline-img'>
                                <img src={Hand} alt="Buy ETH" />
                            </div>
                            <div className="details">
                                <h2 className="details-title">2. Buy ETH</h2>
                                <p className='wallet-details'>You can buy Ethereum (ETH) directly <br /> on MetaMask or transfer it</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="guideline-inner">
                            <div className='guideline-img'>
                                <img src={laptop} alt="Connect your wallet" />
                            </div>
                            <div className="details">
                                <h2 className="details-title">3. Connect your wallet</h2>
                                <p className='wallet-details'>Access your wallet to AoaSwap by  <br />
                                    clicking ‘Connect to a wallet’</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="guideline-inner">
                            <div className='guideline-img'>
                                <img src={Machine} alt="Swap ETH to AKO" />
                            </div>
                            <div className="details">
                                <h2 className="details-title">4. Swap ETH to AKO</h2>
                                <p className='wallet-details'>You can start swapping as you have <br /> ETH available! Press ‘Select a token’</p>
                            </div>
                        </div>
                    </div>

                </div>


                {/* card  */}
                <div className="quick-start-card-container section-padding">

                    <div className="quick-start-card">
                        <h3 className="quick-start-card-title">Akacoin Community</h3>
                        <p className="quick-start-card-details">
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                        </p>
                        <button className="quick-start-card-btn">Learn More</button>
                        <div className="quick-start-card-footer"></div>
                    </div>

                    <div className="quick-start-card">
                        <h3 className="quick-start-card-title">Akacoin Community</h3>
                        <p className="quick-start-card-details">
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                        </p>
                        <button className="quick-start-card-btn">Learn More</button>
                        <div className="quick-start-card-footer"></div>
                    </div>

                    <div className="quick-start-card">
                        <h3 className="quick-start-card-title">Akacoin Community</h3>
                        <p className="quick-start-card-details">
                            There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.
                        </p>
                        <button className="quick-start-card-btn">Learn More</button>
                        <div className="quick-start-card-footer"></div>
                    </div>


                   
                </div>
            </div>
        </section>
    );
};

export default Guideline;