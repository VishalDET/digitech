import React from 'react';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-circle"></div>
                <img src="/assets/images/logo.png" alt="Loading..." className="loader-logo" />
            </div>
        </div>
    );
};

export default Loader;
