import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50'>
    <nav className=" bg-opacity-80 backdrop-blur-md w-full z-40 top-0 start-0 transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0.5">
        <Link to="/home" className="flex items-center space-x-3 ml-4 rtl:space-x-reverse">
          <img src="../Daologo.png" className="w-8 h-8 animate-spin-slow" alt="Alpha"/>
          <span className="self-center text-xl whitespace-nowrap text-gray-300 font-extrabold sm:font-semibold dark:text-shadow-white" style={{ fontFamily: "'Georgia', cursive" }}>ALPHA DAO</span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 md:px-5 lg:px-7 rtl:space-x-reverse">
        <Link to='/sign-in'>
          <button className="relative inline-flex items-center justify-center md:px-1 p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group  group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  focus:bg-gray-950 focus:outline-none focus:ring-purple-950 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 font-[Georgia] transition-all ease-in duration-75 bg-gradient-to-r from-purple-700 to-purple-950 dark:bg-purple-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent active:bg-purple-900">
                 Sign In
                </span>
              </button>
        </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10  justify-center mt-4.5 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded= {isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-5 mt-4 font-[Georgia] font-medium border border-purple-900 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/home" className="block py-2 px-3 text-gray-300 rounded-sm md:bg-transparent md:text-gray-300 md:p-0 md:dark:text-gray-300" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="\ALPHA DAO Whitepaper.pdf" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-purple-900 md:hover:bg-transparent md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-900 dark:text-gray-300 dark:hover:bg-purple-900 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">Whitepaper</a>
            </li>
            <li>
              <Link to="/blog" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-purple-900 md:hover:bg-transparent md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
            </li>
            <li>
              <Link to="/profile-page" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-purple-900 md:hover:bg-transparent md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">Miniapp</Link>
            </li>
           <li>
              <Link to="/about" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-purple-900 md:hover:bg-transparent md:hover:text-purple-900 md:p-0 md:dark:hover:text-purple-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/contactus" className="block py-2 px-3 text-gray-300 rounded-sm hover:bg-purple-900 md:hover:bg-transparent md:hover:text-purple-800 md:p-0 md:dark:hover:text-purple-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
