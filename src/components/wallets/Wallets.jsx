import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLoading from '../utilities/SimpleLoading';
import { getWalletList } from '../walletDash/_redux/Action/WalletListAction';

const Wallets = () => {

    const dispatch = useDispatch();
    const { walletList, isLoading } = useSelector((state) => state.WalletReducer);

    useEffect(() => {
        dispatch(getWalletList())
    }, [dispatch])


    return (
        <div className='container section-padding'>
            <h2 className="content-title"> Choose Your Wallets </h2>
            {/* when loading wallet data  */}
            {isLoading === true && (
                <div className="d-flex justify-content-center mt-5">
                    <SimpleLoading title="Loading Wallet list" />
                </div>
            )}

            {/* if wallet data not found  */}
            {
                !isLoading && walletList.length === 0 && (
                    <div className="alert alert-warning text-center">Wallet Not Found</div>
                )
            }
        <div className="wallet-container">
                {
                    walletList && walletList.length > 0 && walletList.map((wallet, index) => (
                        <div className={`wallet-card card-${index + 1}`}>
                            <h4 className="wallet-title">
                                <span>
                                    <img src={wallet.iconPreview} alt={wallet.title} />
                                </span>
                                {wallet.title}
                            </h4>
                            <p className="wallet-details">  {wallet.description}  </p>

                            <div className="wallet-social">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className="wallet-button">
                                <button className="custom-btn wallet-btn">
                                    <span className="btn-text">Choose Wallet</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Wallets;