import React from 'react';
import About from '../About/About';
// import Courses from '../Course/Courses';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            {/* <Courses></Courses> */}
        </div>
    );
};

export default Home;