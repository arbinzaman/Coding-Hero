import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';
import Course from './Course/Course';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    // console.log(course);
    return (

        <div className='course'>

            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='grid grid-cols-3'>
                {
                    courses?.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>
                    )}
            </div>


        </div>


    );
};

export default Courses;