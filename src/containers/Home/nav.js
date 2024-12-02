import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add background color when scrolled
      } else {
        setIsScrolled(false); // Remove background color when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center transition-all duration-300 z-50 ${
        isScrolled ? 'bg-[#E7E5E5] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl w-full flex justify-between items-center px-4">
        <div className="text-lg font-bold text-gray-800">Logo</div>
        <ul className="flex space-x-16 text-sm font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-orange-500' : 'hover:text-gray-900'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-orange-500' : 'hover:text-gray-900'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-orange-500' : 'hover:text-gray-900'
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? 'text-orange-500' : 'hover:text-gray-900'
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-orange-500' : 'hover:text-gray-900'
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
