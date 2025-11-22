import React from 'react';

const LoadingSpinner = () => {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-300 bg-opacity-30 z-50">
      <span className="loading loading-infinity loading-xl"></span>
    </div>
    );
};

export default LoadingSpinner;