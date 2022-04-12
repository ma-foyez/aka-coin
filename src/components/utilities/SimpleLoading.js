import React from 'react';
import { Spinner } from 'react-bootstrap';

/**
 * 
 * @param {string} title ex: Loading Title 
 * @returns 
 */
const SimpleLoading = ({ title, size }) => {
    return (
        <div className='simple-loading'>
            <Spinner
                animation="border"
                variant="custom-loading"
                size={size ? size : "md"}
            />
            <span>{title ? title + "..." : "Loading Data..."}</span>
        </div>
    );
};

export default SimpleLoading;