import React from 'react';
import { Spinner } from 'react-bootstrap';

// Functional component to display a loading spinner
const LoadingSpinner = () => {
  return (
    // Center the spinner horizontally using Bootstrap's flexbox utilities
    <div className="d-flex justify-content-center">
      {/* Bootstrap Spinner component with border animation and secondary color variant */}
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default LoadingSpinner;