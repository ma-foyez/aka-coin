import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboardSidebar/DashboardSidebar';

/**
 * This is simple dashboard layout
 * @param {string} title Ex: Page Title 
 * @returns DashboardLayout
 */
const DashboardLayout = ({ title, children }) => {
    document.title = (title !== null && title !== undefined) ? `${title} || Aka Coin` : `Aka Coin`;
    const [isClose, setIsClose] = useState(true)
    return (
        <React.Fragment>
            <div className="dashboard-container">
                <div className={isClose === true ? "dashboard-sidebar open" : "dashboard-sidebar"}>
                    <DashboardSidebar />
                </div>
                <div className="dashboard-content">
                    {/* Dashboard header  */}
                    <div className="header-container">
                        <div className="header-container-left">
                            <span className='toggle-class'>
                                {
                                    isClose ?
                                        <svg onClick={() => setIsClose(!isClose)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg> :
                                        <svg onClick={() => setIsClose(!isClose)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                }
                            </span>
                            <div className="search-box">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" placeholder='Search Items' />
                            </div>
                        </div>
                        <div className="header-container-right">
                            <div className="user">
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0H255.6C232.3 0 199.3 29.21 182.6 41.38c-118.8 86.25-139.4 101.1-164.3 121.6C6.75 172 0 186 0 200.8v263.2C0 490.5 21.49 512 48 512h416c26.51 0 48-21.49 48-47.1V200.8C512 186 505.3 172 493.6 163zM303.2 367.5C289.1 378.5 272.5 384 256 384s-33.06-5.484-47.16-16.47L64 254.9V208.5c21.16-16.59 46.48-35.66 156.4-115.5c3.18-2.328 6.891-5.187 10.98-8.353C236.9 80.44 247.8 71.97 256 66.84c8.207 5.131 19.14 13.6 24.61 17.84c4.09 3.166 7.801 6.027 11.15 8.478C400.9 172.5 426.6 191.7 448 208.5v46.32L303.2 367.5z" />
                                </svg>
                                <sup>2</sup>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z" />
                                </svg>
                                <sup>10</sup>
                            </span>
                        </div>
                    </div>

                    {/* main content here  */}
                    <div className="p-3">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DashboardLayout;