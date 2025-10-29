import React from 'react';
import vector1 from '../assets/vector1.png'

const Banner = ({ progressTicket, resolvedTicket }) => {
    return (
        <div className='w-11/12 md:w-10/12 mx-auto flex gap-5 mt-10'>
            <div className='w-full bg-gradient-to-r from-purple-700 to-purple-500 rounded-xl gap-3 lg:flex justify-between items-center h-52 md:h-64'>
                <img className='w-40 h-full object-cover hidden lg:block' src={vector1} alt="" />
                <div className='mt-15 lg:mt-0 text-center items-center space-y-4'>
                    <p className='text-xl md:text-2xl text-white font-bold'>In-Progress</p>
                    <p className='text-xl md:text-2xl text-white font-bold'>{progressTicket.length}</p>
                </div>
                <img className='w-40 h-full object-cover rotate-y-180 hidden lg:block' src={vector1} alt="" />
            </div>
            <div className='w-full bg-gradient-to-r from-green-500 to-green-700 rounded-xl gap-3 lg:flex justify-between items-center h-52 md:h-64'>
                <img className='w-40 h-full object-cover hidden lg:block' src={vector1} alt="" />
                <div className='mt-15 lg:mt-0 text-center items-center space-y-4'>
                    <p className='text-xl md:text-2xl text-white font-bold'>Resolved</p>
                    <p className='text-xl md:text-2xl text-white font-bold'>{resolvedTicket.length}</p>
                </div>
                <img className='w-40 h-full object-cover rotate-y-180 hidden lg:block' src={vector1} alt="" />
            </div>

        </div>
    );
};

export default Banner;