import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Service = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div className="container mx-auto p-8 my-8 font-serif">
            <div>
                <h1 className="text-left lg:text-3xl capitalize text-semibold text-black pb-4">Follow your passion.</h1>
                <h1 className="text-left lg:text-xl text-semibold text-gray-500">Enjoy i-Art's state-of-the-art services by  enrolling into any of courses from below <br /> and become a true talent.</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    courses.map(course => <Course
                        course={course}
                        key={course._id}>
                    </Course>)
                }
            </div>
        </div>
    );
};

export default Service;