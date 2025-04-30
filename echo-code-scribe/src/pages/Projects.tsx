
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project4.png';

const projects = [
  {
    id: 1,
    name: "MediIntel",
    slug: "mediintel",
    description: "An AI-powered healthcare platform designed to optimize medical resource management and predict service demand.",
    imageUrl: projectImage1,
    year: 2025
  },
  {
    id: 2,
    name: "SkillX",
    slug: "skillx",
    description: "A peer-to-peer skill exchange platform enabling users to learn and teach through one-on-one interactions.",
    imageUrl: projectImage2,
    year: 2023
  },
  {
    id: 3,
    name: "DineEase",
    slug: "dineease",
    description: "A digital restaurant menu and ordering system that enhances dining efficiency through real-time order management.",
    imageUrl: projectImage3,
    year: 2023
  },
  {
    id: 4,
    name: "LexiQ",
    slug: "lexiq",
    description: "An AI-powered legal platform that transforms complex court judgments into accessible, searchable, and interactive knowledge.",
    imageUrl: projectImage4,
    year: 2022
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <Header />
      <main className="py-12">
        <div className="card">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.slug}`} 
                className="project-card group"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.year}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm mt-2">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
