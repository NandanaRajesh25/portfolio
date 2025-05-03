
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <Link to="/contact" className="card bg-portfolio-salmon flex flex-col justify-center min-h-[180px] relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-2">Contact me</h2>
      <div className="absolute bottom-4 right-4">
        <ArrowUpRight className="w-6 h-6" />
      </div>
    </Link>
  );
};

export default ContactCard;
