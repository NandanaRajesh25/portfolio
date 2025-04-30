
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div className="card flex flex-col justify-center">
        <div className="absolute top-12 right-12">
          <svg className="w-32 h-32 animate-spin-slow text-portfolio-salmon opacity-20" viewBox="0 0 100 100">
            <path
              d="M50,2.5c26.2,0,47.5,21.3,47.5,47.5S76.2,97.5,50,97.5S2.5,76.2,2.5,50S23.8,2.5,50,2.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Developer Crafting</h1>
        <h1 className="text-4xl md:text-5xl font-light mb-2">Scalable Web Experiences</h1>
        <h1 className="text-4xl md:text-5xl font-bold">
        with
          <br />
          Design & Code
        </h1>
      </div>

      <div className="card overflow-hidden bg-portfolio-beige">
        <img
          src="/lovable-uploads/6d9f1b7b-366b-4abc-8da8-fdaade85b258.png"
          alt="Julia Huang"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
