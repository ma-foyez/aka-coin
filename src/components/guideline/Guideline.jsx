import React, { useEffect } from 'react';
import wallet from "./../../assets/images/Wallet.png"
import Hand from "./../../assets/images/Hand Hold Bitcoin.png"
import laptop from "./../../assets/images/Laptop.png"
import Machine from "./../../assets/images/Machine.png"
import { useDispatch, useSelector } from 'react-redux';
import { getGuidelineList } from '../guidelineDash/_redux/Action/GuidelineAction';
import SimpleLoading from '../utilities/SimpleLoading';

const Guideline = () => {

    const dispatch = useDispatch();
    const { guidelineList, isLoading } = useSelector((state) => state.GuidelineReducer);

    useEffect(() => {
        dispatch(getGuidelineList())
    }, [dispatch])



    return (
        <section id='guideline' className='guideline'>
            <div className="container section-padding mt-3">
                <h2 className="content-title"> Quick Start Guide </h2>

                {isLoading === true && (
                    <div className="d-flex justify-content-center mt-4">
                        <SimpleLoading title="Loading Guideline list" />
                    </div>
                )}


                {!isLoading && guidelineList.length === 0 && (
                    <div className="alert alert-warning text-center">Guideline Data Not Found</div>
                )}
                <div className="row mt-2">
                    {
                        guidelineList && guidelineList.length > 0 && guidelineList.map((guideline, index) => (
                            <div className="col-sm-6">
                                <div className="guideline-inner">
                                    <div className='guideline-img'>
                                        <img src={guideline.imagePreview} alt={guideline.title} />
                                    </div>
                                    <div className="details">
                                        <h2 className="details-title">{index + 1}. {guideline.title}</h2>
                                        <p className='wallet-details'>{guideline.description}</p>
                                    </div>
                                </div>
                            </div>

                        ))}

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