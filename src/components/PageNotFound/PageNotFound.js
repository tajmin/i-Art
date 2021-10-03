import React from 'react';
import notfound from '../../images/not-found.png'

const PageNotFound = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold text-red-500 pt-12">OOPS!</h1>
            <h1 className="text-4xl font-bold text-red-900 mb-8 pt-12">Page Not Found.</h1>
            <img className="mx-auto" src={notfound} alt="" />

        </div>
    );
};

export default PageNotFound;