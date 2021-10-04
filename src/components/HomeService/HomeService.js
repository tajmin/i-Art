import React from 'react';
import { NavLink } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const HomeService = () => {
    const [courses] = useCourses();
    return (
        <div className="bg-yellow-400 font-serif ">
            <h1 className="sm:text-2xl lg:text-5xl capitalize text-white pt-20">what can we offer</h1>
            <div className="border w-28 mx-auto mt-3"></div>
            <div className="container mx-auto p-8 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    courses.map(course => <Course
                        course={course}
                        key={course._id}>
                    </Course>).slice(0, 4)
                }
            </div>
            <div className="relative py-12">
                <div className="lg:absolute lg:bottom-0 lg:right-0 bg-black bg-opacity-50 py-4 mr-4 mb-8">
                    <NavLink to="/services" className="py-8 px-8 text-xl text-white hover:text-black">See More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeService;