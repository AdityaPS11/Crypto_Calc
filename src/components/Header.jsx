// Header.js
import { useState } from "react";
const menu = "/menu.svg";
const close = "/close.svg";
const logo = "/logo.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 p-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-5 mr-4" />
      </div>
      <nav className={`hidden sm:flex space-x-4 items-center ml-auto mr-3 ${toggle ? 'sm:hidden' : ''}`}>
        <a href="#features" className="font-inter-semibold font-semibold text-gray-1 text-lg hover:text-blue-500">Features</a>
        <a href="#exchanges" className="font-inter-semibold font-semibold text-gray-1 text-lg hover:text-blue-500">Exchanges</a>
        <a href="#how-it-works" className="font-inter-semibold font-semibold text-gray-1 text-lg hover:text-blue-500">How it works?</a>
        <a href="#blog" className="font-inter-semibold font-semibold text-gray-1 text-lg hover:text-blue-500">Blog</a>
        <a href="#about-us" className="font-inter-semibold font-semibold text-gray-1 text-lg hover:text-blue-500">About Us</a>
      </nav>
      <button className="ml-5 mr-8 border border-blue-500 text-blue-500 px-6 py-1 font-bold rounded-sm hidden sm:block">
        Sign In
      </button>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="sm:hidden absolute top-16 right-0 p-4 bg-white border border-gray-200">
          <a href="#features" className="block py-2">Features</a>
          <a href="#exchanges" className="block py-2">Exchanges</a>
          <a href="#how-it-works" className="block py-2">How it works?</a>
          <a href="#blog" className="block py-2">Blog</a>
          <a href="#about-us" className="block py-2">About Us</a>
          <button className="border border-blue-500 text-blue-500 px-6 py-1 font-bold rounded-sm block mt-4">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
