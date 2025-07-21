import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuth(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50'>
      <nav className="bg-opacity-80 backdrop-blur-md w-full z-40 transition-all duration-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0.5">
          <Link to="/home" className="flex items-center space-x-3 ml-4">
            <img src="/Daologo.png" className="w-8 h-8 animate-spin-slow" alt="Alpha" />
            <span
              className="text-xl font-extrabold text-gray-300"
              style={{ fontFamily: "'Georgia', cursive" }}
            >
              ALPHA DAO
            </span>
          </Link>

          <div className="flex md:order-2 items-center space-x-3 md:space-x-5 lg:space-x-7">
            {isAuth ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:ring-2 ring-purple-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-10">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/sign-in">
                <button className="relative inline-flex items-center justify-center md:px-1 p-0.5 mb-2 mt-4 me-2 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group hover:text-white focus:ring-purple-900">
                  <span className="relative px-5 py-2.5 font-[Georgia] bg-gradient-to-r from-purple-700 to-purple-950 rounded-md group-hover:bg-transparent">
                    Sign In
                  </span>
                </button>
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-purple-900"
              aria-expanded={isOpen}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-[Georgia] font-medium border border-purple-900 rounded-lg bg-transparent md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li><Link to="/home" className="block py-2 px-3 text-gray-300">Home</Link></li>
              <li><a href="/ALPHA DAO Whitepaper.pdf" className="block py-2 px-3 text-gray-300 hover:text-purple-900">Whitepaper</a></li>
              <li><Link to="/blog" className="block py-2 px-3 text-gray-300 hover:text-purple-900">Blogs</Link></li>
              <li><Link to="#" className="block py-2 px-3 text-gray-300 hover:text-purple-900">Miniapp</Link></li>
              <li><Link to="/about" className="block py-2 px-3 text-gray-300 hover:text-purple-900">About</Link></li>
              <li><Link to="/contactus" className="block py-2 px-3 text-gray-300 hover:text-purple-800">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
