import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-red-200 bg-opacity-30 z-50">
      <span className="loading loading-infinity loading-xl"></span>
      <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 text-center">
        Please wait a few seconds...
      </h4>
    </div>
  );
};

export default LoadingSpinner;
