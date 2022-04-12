import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Spinner } from 'react-bootstrap';
import { deletePreviewImage, handleChangeGuidelineInput, handleStoreGuideline } from './_redux/Action/GuidelineAction';

const AddGuide = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { guidelineInput, isSubmitting } = useSelector((state) => state.GuidelineReducer);

    const handleChangeGuideline = (name, value, e = null) => {
        dispatch(handleChangeGuidelineInput(name, value, e));
    };

    const handleSubmit = (e) => {
        dispatch(handleStoreGuideline(guidelineInput, navigate))
        e.preventDefault()
    };

    return (
        <DashboardLayout title="Wallet">
            <div className="card p-4">
                <div className="card-headers">
                    <h3 className="card-title">Add Guideline</h3>
                    <Link to="/guideline-list" className="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>
                </div>
                <form
                    className='dashboard-form-body'
                    onSubmit={(e) => handleSubmit(e)}
                    method="post"
                    autoComplete="off"
                    encType="multipart/form-data"
                >
                    <div className="mb-3">
                        <label htmlFor="walletTitle" className="form-label">Guideline Title</label>
                        <input
                            type="text" id='walletTitle'
                            className="form-control"
                            placeholder='Wallet Title'
                            value={guidelineInput.title}
                            onChange={(e) =>
                                handleChangeGuideline("title", e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="WalletDescription" className="form-label">Guideline Description</label>
                        <textarea
                            placeholder='Wallet Description'
                            className="form-control"
                            id="WalletDescription"
                            rows="3"
                            value={guidelineInput.description}
                            onChange={(e) =>
                                handleChangeGuideline("description", e.target.value)
                            }
                        >

                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="walletTitle" className="form-label">Image</label>
                        <input
                            type="file"
                            id='walletTitle'
                            className="form-control"
                            placeholder='Wallet Button Link'
                            name="image"
                            onChange={(e) => handleChangeGuideline("guidelineImg", e.target.files[0], e)}
                        />

                        {
                            guidelineInput.imagePreview !== null &&
                            <div className="imgPreview">
                                <div className="removePreview">
                                    <div className="modal_Close_btn preview-close-btn pointer"
                                        onClick={() => dispatch(deletePreviewImage('guidelineImg'))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <img src={guidelineInput.imagePreview}
                                    className="img-fluid"
                                    alt='Preview Images'
                                />
                            </div>
                        }
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

export default AddGuide;