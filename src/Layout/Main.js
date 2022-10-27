import React from 'react';
import Home from '../pages/Home/Home';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';


const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <div  className=' w-auto grid grid-cols-2 gap-4'>


                <div>
                    <LeftSideNav></LeftSideNav>

                </div>
                <div>
                    <Home></Home>
                </div>
                </div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;