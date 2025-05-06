import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close menu if window is wider than Tailwind's md breakpoint (768px)
      if (window.innerWidth >= 768) {
        setNav(true);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="p-6 rounded-2xl bg-[#FADCD9] flex justify-between items-center relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-xl">
        <span className="font-bold">NANDANA</span>
        <span className="font-light"> RAJESH</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/projects" className="text-sm font-medium transition-colors hover:text-gray-600">
          PROJECTS
        </Link>
        <Link to="/about" className="text-sm font-medium transition-colors hover:text-gray-600">
          ABOUT
        </Link>
        <Link to="/contact" className="text-sm font-medium transition-colors hover:text-gray-600">
          CONTACT
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div 
        onClick={handleNav} 
        className='block md:hidden z-50'
      >
        {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
      </div>

      {/* Mobile Navigation Menu */}
      <div className={
        !nav 
          ? 'fixed right-0 top-0 w-[40%] h-full border-r border bg-[#FADCD9] ease-in-out duration-500 z-40' 
          : 'fixed right-[-100%] top-0 ease-in-out duration-500 z-40'
      }>
        <ul className='flex flex-col p-8 mt-10'>
          <Link 
            to="/projects" 
            className="py-4 text-sm font-medium transition-colors hover:text-gray-600"
            onClick={() => setNav(true)}
          >
            PROJECTS
          </Link>
          <Link 
            to="/about" 
            className="py-4 text-sm font-medium transition-colors hover:text-gray-600"
            onClick={() => setNav(true)}
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className="py-4 text-sm font-medium transition-colors hover:text-gray-600"
            onClick={() => setNav(true)}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;