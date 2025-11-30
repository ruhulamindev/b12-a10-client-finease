import React from 'react';

const MyContainer = ({ className, children }) => {
  return (
    <div className={`container px-4 sm:px-6 lg:px-8 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MyContainer;