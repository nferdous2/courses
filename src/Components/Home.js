import React from 'react';
import Banner from './Banner';
import About from './AboutUs';
import Courses from './Courses';
import { useLoaderData } from 'react-router-dom';
import FAQ from './FAQ';


const Home = () => {
    
    const users = useLoaderData();
    console.log(users);
    return (
        <>
<Banner/>
<About/>
<Courses/>   
<FAQ/>

           </>
    );
};

export default Home;
