import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const LeftSideNav = () => {
    const [categories , setCategories] = useState([]);
    // console.log(categories);
    useEffect(()=>{
        fetch('https://coding-hero-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div >
                {
                    categories.map(Category=><p 
                    key ={Category._id}>
                    <Link to={`/details/${Category._id}`}>
                  <span className='btn btn-ghost normal-case text-xl mt-5'>{Category.name}</span>  </Link>

                    </p>
                    )
                } </div>
    );
};

export default LeftSideNav;