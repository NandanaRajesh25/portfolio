
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <Link to="/contact" className="bg-[#F8AFA6] card flex flex-col justify-center min-h-[180px] relative overflow-hidden transition-transform duration-700 hover:scale-105">
      <h2 className="text-5xl font-bold mt-16">Contact <br/>me</h2>
      <div className="absolute top-4 right-4">
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </Link>
  );
};

export default ContactCard;
