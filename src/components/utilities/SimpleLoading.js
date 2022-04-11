import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * 
 * @param {string} title ex: Loading Title 
 * @returns 
 */
const SimpleLoading = ({ title }) => {
    return (
        <div className='simple-loading'>
            <Spinner animation="border" variant="custom-loading" />
            <span>{title ? title + "..." : "Loading Data..."}</span>
        </div>
    );
};

export default SimpleLoading;