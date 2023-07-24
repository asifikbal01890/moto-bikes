'use client'

import Link from 'next/link';
import React, { useState } from 'react';

interface NavBarProps {
    
  }

interface NavBarState {
    isMaxSidebar: boolean;
  }

const NavBar: React.FC<NavBarProps> = () => {

    const [isMaxSidebar, setIsMaxSidebar] =useState(false);

    const handleBtnClick = () => {
        setIsMaxSidebar(isMaxSidebar => !isMaxSidebar)
        console.log(isMaxSidebar)
    };
    return (

        <div className="sidebar body bg-white dark:bg-[#0F172A]">
            <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
                <div className={`${isMaxSidebar ? '' : 'ml-12'} dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}>
                    <h1 className='uppercase'>VideoScript</h1>
                </div>
                {/*---- SPACER ----*/}
                <div className="grow h-full flex items-center justify-center"></div>
                <div className="flex-none h-full text-center flex items-center justify-center">

                    <div className="flex space-x-3 items-center px-3">
                        <div className="flex-none flex justify-center">
                            <div className="w-8 h-8 flex ">
                                {/* <img src={user?.uid ? user.photoURL : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="profile" className="shadow rounded-full object-cover" /> */}
                            </div>
                        </div>

                        {/* <div className="hidden md:block text-sm md:text-md text-black dark:text-white">{user?.uid ? user.displayName : 'Unknown'}</div> */}
                    </div>

                </div>
            </div>
            <aside className={`w-60 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] ${isMaxSidebar ? 'translate-x-none' : '-translate-x-48'}`}>
                {/*---- open sidebar button ----*/}
                <div className={`${isMaxSidebar ? 'translate-x-0' : 'translate-x-24 scale-x-0'} w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12`}>
                    <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500 ml-1 pl-12 pr-3 py-1 rounded-full text-white">
                        <div className="transform ease-in-out duration-300 mr-12">
                            <h1 className='uppercase'>VideoScript</h1>
                        </div>
                    </div>
                </div>
                <div onClick={handleBtnClick} className="-right-6 transition transform ease-in-out duration-500 flex cursor-pointer border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                </div>
                {/*---- MAX SIDEBAR----*/}
                <div className={`${isMaxSidebar ? 'flex' : 'hidden'} text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}>
                    <Link href={'/'} className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <div>
                            Home
                        </div>
                    </Link>
                    <Link href={'/review'} className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        <div>
                            Review
                        </div>
                    </Link>
                    {/* {
                        user?.uid ?
                            <>
                                <Link onClick={logOut} className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                                    <MdLogout></MdLogout>
                                    <div>
                                        Log out
                                    </div>
                                </Link>
                            </>
                            :
                            <>
                                <Link href={'/login'} className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                                    <MdLogin></MdLogin>
                                    <div>
                                        Login
                                    </div>
                                </Link>
                            </>
                    } */}
                </div>
                {/*---- MINI SIDEBAR----*/}
                <div className={`${isMaxSidebar ? 'hidden' : 'flex'} mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}>
                    <Link href={'/'} className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <Link href={'/review'} className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </Link>
                    {/* {
                        user?.uid ?
                            <>
                                <Link onClick={logOut} className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                                    <MdLogout></MdLogout>
                                </Link>
                            </>
                            :
                            <>
                                <Link href={'/login'} className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                                    <MdLogin></MdLogin>
                                </Link>
                            </>
                    } */}

                </div>

            </aside>
        </div>

    );
};

export default NavBar;