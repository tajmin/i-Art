import React from 'react';

const Course = (props) => {
    const { price, thumb, title, about, nextSession } = props.course
    return (
        <div className="py-8">
            <div className="relative inline-block my-8 pb-16">
                <div className="overflow-hidden h-96">
                    <img src={thumb} alt="" className="abosolute z-0" />
                </div>
                <div className="absolute -mt-8 z-10 px-8">
                    <div className="bg-red-600 py-4">
                        <h1 className="text-3xl text-white font-serif">{title}</h1>
                    </div>
                    <p className="pt-4 text-xl font-semibold font-serif text-green-600">From {price}</p>
                    <p className="py-2 text-gray-500">{about.slice(0, 150)}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;