import React from 'react';
import Home from '../pages/Home/Home';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                
                <div  className='grid grid-cols-4'>
                    <LeftSideNav></LeftSideNav>
                    <Outlet></Outlet>
                        
                </div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;