import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='error-page__container'>
            <div className="error-page__container-inner">
                <h1>
                    404
                </h1>
                <h2>
                    This page could not be found.
                </h2>
            </div>
        </div>
    )
}

export default PageNotFound