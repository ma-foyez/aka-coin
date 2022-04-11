import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';

const AddWallet = () => {
    return (
        <DashboardLayout title="Wallet">
            <div className="card p-4">
                <div className="card-headers">
                    <h3 className="card-title">Add Wallet</h3>
                    <Link to="/wallet-list" className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>
                </div>
                <div className='dashboard-form-body'>
                    <div className="mb-3">
                        <label for="walletTitle" className="form-label">Wallet Title</label>
                        <input type="text" id='walletTitle' className="form-control" placeholder='Wallet Title' />
                    </div>
                    <div className="mb-3">
                        <label for="walletTitle" className="form-label">Wallet Link</label>
                        <input type="text" id='walletTitle' className="form-control" placeholder='Wallet Button Link' />
                    </div>
                    <div className="mb-3">
                        <label for="WalletDescription" className="form-label">Wallet Description</label>
                        <textarea placeholder='Wallet Description' className="form-control" id="WalletDescription" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AddWallet;