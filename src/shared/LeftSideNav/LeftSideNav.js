import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const LeftSideNav = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://coding-hero-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
                {
                    categories.map(Category=><p 
                    key ={Category._id}>
                    <Link to={`/courses/${Category._id}`}>
                    {Category.name}</Link>

                    </p>
                    )
                }
        
      
           
        </div>
    );
};

export default LeftSideNav;