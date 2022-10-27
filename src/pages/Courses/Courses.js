import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    const { _id, name , image , description} = course;
    console.log(course);
    return (
      
             <div className=" mt-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
              
         
                  <img src={image} alt="" className="object-cover  mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                  <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                  <p className="text-sm dark:text-gray-400">{description}</p>
                  <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"><Link to={`/courses/${_id}`}>See More</Link></button>
           
       
          </div>
       
    );
};

export default Courses;