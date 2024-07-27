"use client";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleToggle = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html?.classList.add('dark');
      html?.classList.remove('light');
    } else {
      html?.classList.add('light');
      html?.classList.remove('dark');
    }
  }, [theme]);

  return (
    <nav className="w-full flex items-center justify-between h-[4rem] text-black bg-white dark:bg-[#08080C] dark:text-white px-4">
      {/* Navigation links */}
      <div className="flex items-center justify-start gap-8"> {/* Increased gap */}
        {navLinks.map((item) => (
          <a key={item.id} className="hidden sm:block">{item.title}</a>
        ))}
      </div>

      {/* Small devices */}
      <div className="flex items-center bg-white dark:bg-[#08080C] dark:text-white gap-3 text-black sm:hidden">
        <button onClick={handleMenuToggle}>
          Menu
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white shadow-lg border border-gray-200 z-50 flex flex-col">
            <div className="top-0 right-0 absolute text-3xl">
              <RiCloseFill onClick={handleClose} />
            </div>
            <div className="flex flex-col flex-grow items-center justify-center gap-6">
              {navLinks.map((item) => (
                <a key={item.id}>{item.title}</a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Theme toggle and buttons */}
      <div className="flex items-center justify-end gap-4">
        <div className="w-12 h-7 hidden sm:flex md:flex bg-[#CDCDCD] relative rounded-full">
          <button
            onClick={handleToggle}
            className={`absolute ${theme === 'dark' ? 'left-0' : 'right-0'} text-xl text-[#1EE1B3] bg-[#232427] p-1 rounded-full transition-all duration-300`}>
            {theme === 'dark' ? <FaMoon /> : <LuSun />}
          </button>
        </div>
        <button>Login</button>
        <button className="text-black rounded-sm text-sm bg-[#1EE1B3] px-4 py-1">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
