import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { handleChangeWalletInput, handlePostWalletData } from './_redux/Action/WalletListAction';
import { Spinner } from 'react-bootstrap';

const AddWallet = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { walletInput, isSubmitting } = useSelector((state) => state.WalletReducer);

    const changeWalletInput = (name, value) => {
        dispatch(handleChangeWalletInput(name, value));
    };

    const handleSubmit = (e) => {
        dispatch(handlePostWalletData(walletInput, navigate))
        e.preventDefault()
    };

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
                <form
                    className='dashboard-form-body'
                    autoComplete="off"
                    autoSave="off"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className="mb-3">
                        <label htmlFor="walletTitle" className="form-label">Wallet Title</label>
                        <input
                            type="text" id='walletTitle'
                            className="form-control"
                            placeholder='Wallet Title'
                            value={walletInput.title}
                            onChange={(e) =>
                                changeWalletInput("title", e.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="walletTitle" className="form-label">Wallet Link</label>
                        <input
                            type="text"
                            id='walletTitle'
                            className="form-control"
                            placeholder='Wallet Button Link'
                            value={walletInput.link}
                            onChange={(e) =>
                                changeWalletInput("link", e.target.value)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="WalletDescription" className="form-label">Wallet Description</label>
                        <textarea
                            placeholder='Wallet Description'
                            className="form-control"
                            id="WalletDescription"
                            rows="3"
                            value={walletInput.description}
                            onChange={(e) =>
                                changeWalletInput("description", e.target.value)
                            }
                        >

                        </textarea>
                    </div>
                    {
                        isSubmitting && (
                            <button type='submit' className='submit-btn' disabled={true}>
                                <Spinner
                                    animation="border"
                                    variant="custom-loading"
                                    size="sm"
                                />
                                <span className="ms-2">Submitting...</span>
                            </button>
                        )
                    }
                    {
                        !isSubmitting && (
                            <button type='submit' className='submit-btn'>Submit</button>
                        )
                    }
                </form>
            </div>
        </DashboardLayout>
    );
};

export default AddWallet;