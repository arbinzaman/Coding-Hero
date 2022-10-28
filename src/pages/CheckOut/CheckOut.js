import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">Do you want to buy Our Plans?</h1>

                <p className="text-sm mt-5 dark:text-gray-400">by
                    <Link to="/" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-400">
                        <span>Coding-Hero</span>
                    </Link>on
                    <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                </p>
            </div>
            <div className="dark:text-gray-100">
                <p>The search results for “learn to code” are in the millions, so it can be hard for even the most motivated self-starter to know where to begin.
                    If you want to get schooled on code, start with this list. It’ll point you to sites that are highly rated by users, recommended by experienced programmers, and associated with well-known institutions.
                    All of the sites on the list offer courses for people with zero programming experience. Each listing details the types of courses offered, cost, time commitment, experience level, and a sampling of topics covered. Though many courses are free, courses geared toward people seeking a career in programming are usually paid. Among all the options, you’re sure to find one that’s right for you.
                    Once you’ve found the right fit, make sure to review the six essential steps to success for learning how to code.</p>
                    <p className="text-5xl mt-5 dark:text-gray-400">UpGrade Plan</p>
            </div>
        </article>
    );
};

export default CheckOut;