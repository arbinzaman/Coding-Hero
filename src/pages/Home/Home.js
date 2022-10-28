import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';


const Home = () => {





    return (

        <article className=" my-10 max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">Explore our structured learning paths to discover everything you need to know about building for the modern web.</h1>
                <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                    <Link rel="noopener noreferrer" to='/courses' className="p-1 hover:underline">#Courses</Link>
                    <Link rel="noopener noreferrer" to='/blog' className="p-1 hover:underline">#blog</Link>
                    <Link rel="noopener noreferrer" to='/faq' className="p-1 hover:underline">#faq</Link>
                </div>
                <p className="text-sm dark:text-gray-400">by
                    <Link to='/' target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-400">
                        <span> Coding-Hero </span>
                    </Link> on 
                    <time datetime="2021-02-12 15:34:18-0200"> Feb 12th 2021</time>
                </p>
            </div>
            <div className=" text-3xl dark:text-gray-100">
                <p>Beginner Full Stack Web Development: HTML, CSS, React & Node</p>
            </div>
        </article>
    );
};

export default Home;