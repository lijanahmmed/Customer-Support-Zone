import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className='mt-20 bg-black pt-15 pb-7'>
            <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
                <div className='space-y-3'>
                    <p className='text-xl font-bold text-white'>CS Ticket System</p>
                    <p className='text-gray-400'>A customer support ticket system is a tool that organizes, tracks, and manages customer inquiries or issues to ensure timely and efficient resolution.</p>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='font-bold text-white'>Company</li>
                        <li className='text-gray-400'><a href="">About Us</a></li>
                        <li className='text-gray-400'><a href="">Our Mission</a></li>
                        <li className='text-gray-400'><a href="">Contact Saled</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='font-bold text-white'>Services</li>
                        <li className='text-gray-400'><a href="">Products & Services</a></li>
                        <li className='text-gray-400'><a href="">Customer Stories</a></li>
                        <li className='text-gray-400'><a href="">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-3'>
                        <li className='font-bold text-white'>Information</li>
                        <li className='text-gray-400'><a href="">Privacy Policy</a></li>
                        <li className='text-gray-400'><a href="">Terms & Conditions</a></li>
                        <li className='text-gray-400'><a href="">Join Us</a></li>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <p className='font-bold text-white'>Social Links</p>
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-full'><BsTwitterX /></div>
                        <p className='text-gray-400'>@CS—Ticket System</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-full'><FaLinkedinIn /></div>
                        <p className='text-gray-400'>@CS—Ticket System</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-full'><FaFacebookF /></div>
                        <p className='text-gray-400'>@CS—Ticket System</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='bg-white p-1 rounded-full'><IoIosMail /></div>
                        <p className='text-gray-400'>support@cst.com</p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-10'>
                <p className='text-gray-300 text-center border-t-2 p-2'>© 2025 CS Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;