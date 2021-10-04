import React from 'react';


const HeroSection = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="lg:px-32 lg:pt-24 sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Welcome to</h1>
                <h1 className="sm:text-5xl md:text-9xl font-bold text-red-600 pt-4 pb-10">i-Art.</h1>
                <p className="text-xl text-gray-600 ">The biggest online art School to find and nourish <br />your hidden talents.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1551443857-ea6cee968159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80" alt="" />
            </div>

        </div>
    );
};

export default HeroSection;