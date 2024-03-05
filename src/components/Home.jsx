import React from 'react';
import Navbar from './Navbar';
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
    return (
        <div className='text-white'>
            <Navbar/>
            <div className='grid grid-cols-2 gap-2 items-center h-[70vh]'>
                <div>
                    <h1>Cox's bazar</h1>
                    <p className='text-justify'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters <br /> in southeastern Bangladesh. <br /> It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='bg-yellow-400 px-4 py-2 mt-2 text-slate-700'>Booking <FaArrowRightLong className='inline' /></button>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='text-2xl'>
                        <img src="/sundorbon.png" alt="" />
                        <h3 className='relative bottom-12'>Sundorbon</h3>
                    </div>
                    <div className='text-2xl'>
                        <img src="/Sajek.png" alt="" />
                        <h3 className='relative bottom-12'>Sajek</h3>
                    </div>
                    <div className='text-2xl'>
                        <img src="/Sreemongol.png" alt="" />
                        <h3 className='relative bottom-12'>Sreemongol</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;