import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    if (!title || !poster_path || !overview) return null; // Add this check to avoid rendering incomplete cards

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
            <div className='card text-center bg-secondary h-100'>
                <div className="card-body">
                    <img src={API_IMG + poster_path} alt="" className="card-img-top" />
                    <div className="card-body">                        
                        <button type='button' className='btn btn-dark' onClick={handleShow}>View more</button>
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                <ModalTitle>{title}</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <img src={API_IMG + poster_path} alt="" className="card-img-top mb-3" style={{ width: "100%"}} />
                                <h4>Ratings: {vote_average}</h4>
                                <h5>Release Date: {release_date}</h5>
                                <br />
                                <h6>Overview</h6>
                                <p>{overview}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant='secondary' onClick={handleClose}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieBox;
