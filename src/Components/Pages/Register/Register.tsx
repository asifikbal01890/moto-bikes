// 'use client'
import Link from "next/link";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

export default function Register() {
    return (
        <div className="relative min-h-screen flex md:ml-6 ml-16 mr-4">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative bg-"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" }}>
                    <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                    <div className="w-full  max-w-md z-10">
                        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Sign Up to Our More Feature </div>
                        <div className="sm:text-sm xl:text-md text-gray-200 font-normal">Sign up now to unlock an array of exciting features on our moto-bike website! Gain access to personalized ride recommendations, track your biking performance with advanced analytics, and connect with a vibrant community of fellow motorbike enthusiasts. Join us and experience the thrill of riding like never before.</div>
                    </div>
                    {/* ----remove custom style--- */}
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="md:flex md:items-center md:justify-center border-b w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                Welcome Back!
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">Please sign up to your account</p>
                        </div>
                        <div className="flex flex-row justify-center items-center space-x-3">
                            <button className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white  bg-blue-600 hover:scale-[1.04] hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaFacebookF></FaFacebookF>
                            </button>
                            <button className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-green-600 hover:scale-[1.04] hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaGoogle></FaGoogle>
                            </button>
                            <button className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-xl  text-white bg-gray-600 hover:scale-[1.04] hover:shadow-lg cursor-pointer transition ease-in duration-300">
                                <FaGithub></FaGithub>
                            </button>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-300 font-normal">or continue with</span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <div className="relative">
                                <div className="absolute right-3 mt-4">
                                </div>
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Name</label>
                                <input
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type="text" name="name" placeholder="Enter your user name" />
                            </div>
                            {/* <div className="relative">
                                <div className="absolute right-3 mt-4">
                                </div>
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Photo</label>
                                <input
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type="text" name="PhotoURL" required placeholder="Enter your photo link" />
                            </div> */}
                            <div className="relative">
                                <div className="absolute right-3 mt-4">
                                </div>
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="password" name="Password" placeholder="Enter your password" />
                            </div>

                            <div>
                                <button type="submit"
                                    className="w-full flex uppercase justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign Up
                                </button>
                                <small className='text-red-600'>error</small>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>Already have an account?</span>
                                <Link href={'/login'}
                                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                    in</Link >
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}