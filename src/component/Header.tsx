import { useState, useEffect } from 'react';
import { Menu, X, Wallet2Icon } from 'lucide-react';
import { motion } from "framer-motion"
import { Button } from "./button"; // Adjust to your actual button import
import {Link} from 'react-router-dom'; 

export default function Header() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex h-16  items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
            
          </div>
          <span>ALPHA DAO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {['Whitepaper', 'About Us', 'Blog', 'Roadmap'].map((item) => (
            <Link
              key={item}
              to={`#${item}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex gap-4 items-center px-2 mr-1.5 ">

        
          <Link
            to=""
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Button className="rounded-full">
            Connect Wallet
            <Wallet2Icon className="ml-1 size-4" />
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            {['Whitepaper', 'About Us', 'Blog', 'Roadmap'].map((item) => (
              <Link
                key={item}
                to={`#${item}`}
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </Link>
              <Button className="rounded-full">
                Connect Wallet
                <Wallet2Icon className="ml-1 size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";


// const Header = () => {
//   const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

//   return (
//     <header className="w-full bg-black text-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-extrabold text-purple-300">⚡ Alpha DAO</h1>
        
//         <nav className=" md:flex space-x-6 items-center">
//           <Link to="/about"><button  className="nav-link">About</button></Link>
//           <button  className="nav-link">Whitepaper</button>
//           <button className="nav-link">Roadmap</button>

//           {/* Blog Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setIsBlogDropdownOpen((prev) => !prev)}
//               className="nav-link flex items-center gap-1"
//             >
//               Blog
              
//             </button>
//             {isBlogDropdownOpen && (
//               <div className="absolute top-full mt-2 bg-gray-800 rounded-md shadow-lg w-48 z-10">
//                 {[
//                   ["All Posts", "blog"],
//                   ["Latest Update"],
//                   ["Market Insights"],
//                   ["Trading Strategies"],
//                   ["Community Stories"],
//                   ["Governance & Proposal"],
//                   ["Tech & Dev Logs"],
//                   ["Guides & Tutorials"],
//                   ["Partner Spotlights"],
//                 ].map(([label], idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setIsBlogDropdownOpen(false);
//                       ;
//                     }}
//                     className="block w-full text-left px-4 py-2 hover:bg-purple-400"
//                   >
//                     {label}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
