import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import SimpleLoading from '../utilities/SimpleLoading';
import SimpleModel from '../utilities/SimpleModel';
import { deleteWallet, getWalletList } from './_redux/Action/WalletListAction';

const WalletList = () => {


    const [show, setShow] = useState(false);
    const [walletID, setWalletID] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setWalletID(id)
    };

    const dispatch = useDispatch();
    const { walletList, isLoading, isDeleting } = useSelector((state) => state.WalletReducer);

    useEffect(() => {
        dispatch(getWalletList())
    }, [dispatch])

    const deleteSingleWallet = () => {
        dispatch(deleteWallet(walletID, handleClose))
    }

    return (
        <DashboardLayout title="Wallet">
            <div className="card p-4">
                <div className="card-headers">
                    <h3 className="card-title">Wallet List</h3>
                    <Link to="/add-wallet" className="add-btn">Add New</Link>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    {
                        isLoading === true && (
                            <SimpleLoading title="Loading Wallet list" />
                        )
                    }
                </div>
                {
                    !isLoading && walletList.length === 0 && (
                        <div className="alert alert-warning text-center">Wallet Not Found</div>
                    )
                }
                {
                    walletList && walletList.length > 0 && (
                        <table className="table table-sm table-bordered mt-2 text-center">
                            <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {walletList.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <img
                                                className='guideline-table-img'
                                                src={item.iconPreview} alt="Wallet Icons" />
                                        </td>
                                        <td className="dashboard-btn-group">
                                            <Link to={`/edit-wallet/${item._id}`} className="dashboard-btn btn btn-sm btn-outline-secondary mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                <span>Edit</span>
                                            </Link>
                                            <button className="dashboard-btn btn btn-sm btn-outline-warning mt-1" onClick={() => handleShow(item._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <span>Delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    )
                }
            </div>

            {/* Delete Confirmation  */}
            <SimpleModel
                show={show}
                handleClose={handleClose}
            >
                <div className="delete-box">
                    <h2 className='title'>Are you sure to delete this wallet?</h2>
                    {
                        isDeleting && (
                            <button type='submit' className='submit-btn' disabled={true}>
                                <Spinner
                                    animation="border"
                                    variant="custom-loading"
                                    size="sm"
                                />
                                <span className="ms-2">Deleting...</span>
                            </button>
                        )
                    }
                    {
                        !isDeleting && (
                            <button type='submit' className='submit-btn' onClick={() => deleteSingleWallet()}>Confirm</button>
                        )
                    }
                </div>
            </SimpleModel>
        </DashboardLayout>
    );
};

export default WalletList;