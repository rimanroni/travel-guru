import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div id='banner'>
             
           <div className='px-16'>
           <Outlet></Outlet>
           
           </div>
        </div>
    );
};

export default Root;