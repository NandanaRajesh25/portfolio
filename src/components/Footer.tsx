
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="ml-auto flex gap-8">
      
      <Link to="https://github.com/nandanarajesh25" target="_blank" className="text-sm font-medium text-gray-600 hover:text-gray-800">
          GITHUB
        </Link>
        <Link to="https://www.linkedin.com/in/nandanarajesh/" target="_blank" className="text-sm font-medium text-gray-600 hover:text-gray-800">
          LINKEDIN
        </Link>
        <Link to="https://www.instagram.com/i_nandanarajesh_?igsh=MzNwcWEzdXpvdTQ0" target="_blank" className="text-sm font-medium text-gray-600 hover:text-gray-800">
          INSTAGRAM
        </Link>
      {/*  <Link to="https://twitter.com" target="_blank" className="text-sm font-medium text-gray-600 hover:text-gray-800">
          TWITTER
        </Link>
      */}
        
      </div>
    </footer>
  );
};

export default Footer;
