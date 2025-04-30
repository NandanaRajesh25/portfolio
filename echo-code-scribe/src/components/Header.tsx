
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-6 rounded-2xl bg-portfolio-pink-light flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold text-xl">
          <span className="font-light">JULIA</span> HUANG
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link 
          to="/projects" 
          className="text-sm font-medium transition-colors hover:text-gray-600"
        >
          PROJECTS
        </Link>
        <Link 
          to="/about" 
          className="text-sm font-medium transition-colors hover:text-gray-600"
        >
          ABOUT
        </Link>
        <Link 
          to="/contact" 
          className="text-sm font-medium transition-colors hover:text-gray-600"
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
