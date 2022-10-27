import React, { useState } from 'react';
import { useEffect } from 'react';
import Courses from '../Courses/Courses';


const Home = () => {
    // const allCourse = useLoaderData();
    const [courses , setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://coding-hero-server.vercel.app/courses')
        .then(res => res.json())
       
        .then(data => setCourses(data))},[]
        )


    
  
    return (
        <div>

            {
                courses?.map(course => <Courses
                    key={course._id}
                    course={course}
                ></Courses>)}

        </div>
    );
};

export default Home;