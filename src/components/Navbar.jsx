 import React from 'react';
import Logo from './Logo';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
 const Navbar = () => {
    return (
        <div className='text-white pb-4 md:flex gap-4 items-center   justify-between py-2 space-x-4 '>
            <Logo/>
            <div className='md:flex border w-auto px-4 items-center '>
            <CiSearch className=' ' />
            <input type="text"  className='ring-offset-0 py-1 px-2 bg-transparent  border-none outline-none'/>
            </div>
            <nav className=' flex   '>
                <ul className='md:flex space-x-4 text-xl justify-center items-center'>
                    <NavLink>News</NavLink>
                    <NavLink>Destination</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink><button className='  px-4 py-1 rounded bg-yellow-400 text-[16px] text-black'>login</button></NavLink>
                </ul>
            </nav>
        </div>
    );
 };
 
 export default Navbar;