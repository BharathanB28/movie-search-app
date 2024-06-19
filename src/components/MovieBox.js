import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

// Base URL for fetching movie images
const API_IMG = "https://image.tmdb.org/t/p/w500/";

// Functional component to display a movie card and its details in a modal
const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
    // State to manage the visibility of the modal
    const [show, setShow] = useState(false);

    // Function to show the modal
    const handleShow = () => setShow(true);

    // Function to hide the modal
    const handleClose = () => setShow(false);

    // Check if necessary movie data is present before rendering the card
    if (!title || !poster_path || !overview) return null;

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-3'>
            {/* Bootstrap card to display movie information */}
            <div className='card text-center bg-secondary h-100'>
                <div className="card-body">
                    {/* Movie poster image */}
                    <img src={API_IMG + poster_path} alt="" className="card-img-top" />
                    <div className="card-body">                        
                        {/* Button to trigger the modal */}
                        <button type='button' className='btn btn-dark' onClick={handleShow}>View more</button>
                        
                        {/* Modal to display detailed movie information */}
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                {/* Modal title displays the movie title */}
                                <ModalTitle>{title}</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                {/* Movie poster image inside the modal */}
                                <img src={API_IMG + poster_path} alt="" className="card-img-top mb-3" style={{ width: "100%"}} />
                                <h4>Ratings: {vote_average}</h4>
                                <h5>Release Date: {release_date}</h5>
                                <br />
                                <h6>Overview</h6>
                                <p>{overview}</p>
                            </ModalBody>
                            <ModalFooter>
                                {/* Button to close the modal */}
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
