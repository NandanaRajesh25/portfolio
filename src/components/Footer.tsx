
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="rounded-2xl bg-[#FADCD9] py-7 px-6 flex flex-col md:flex-row align items-center gap-4 ">
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
      </div>
    </footer>
  );
};

export default Footer;
