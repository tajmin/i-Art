import React from 'react';
import img from '../../images/contact.jpg'


const HeroSection = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2">
            <div className="lg:px-32 my-auto sm:text-center lg:text-left font-serif">
                <h1 className="sm:text-3xl lg:text-4xl uppercase font-bold text-gray-600 pt-2">Welcome to</h1>
                <h1 className="sm:text-5xl md:text-9xl font-bold text-red-600 pt-4 pb-10">i-Art.</h1>
                <p className="text-xl text-gray-600 ">The biggest online <span className="text-red-600 pr-1 italic"> art school</span>to find and nourish <br />your hidden talents.</p>
            </div>
            <div>
                <img className="" src={img} alt="" />
            </div>

        </div>
    );
};

export default HeroSection;