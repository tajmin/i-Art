import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const HomeService = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div>
            {
                courses.map(course => <Course
                    course={course}
                    key={course._id}>
                </Course>).slice(0, 4)
            }
        </div>
    );
};

export default HomeService;