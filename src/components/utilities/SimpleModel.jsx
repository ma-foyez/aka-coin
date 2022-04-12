import { Modal } from 'react-bootstrap';
import React from 'react';

/**
 * @param show Ex: boolean like true
 * @param handleClose Ex: model close function 
 * @param size  Ex: Model Size like "md", "lg", "xl"  Default size is small
 * @param id number nullable
 * @returns SimpleMOdal
 */
const SimpleModel = ({ show, handleClose = null, size = "md", id, children, isCloseButton = true }) => {

    return (
        <Modal
            onClose={handleClose}
            size={size}
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='simple-modal'
        >
            <Modal.Body>
                {
                    isCloseButton === true && (
                        <div className="modal_Close_btn pointer"
                            onClick={() => handleClose()}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    )
                }

                {
                    children
                }
            </Modal.Body>
        </Modal>
    );
};

export default SimpleModel;