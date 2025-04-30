
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Musea",
    slug: "musea",
    description: "An AI-generated architectural space that reimagines museum experiences through digital immersion.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    year: 2024
  },
  {
    id: 2,
    name: "Elara",
    slug: "elara",
    description: "A virtual residential concept that adapts to inhabitants' emotional states through AI sensing.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop",
    year: 2023
  },
  {
    id: 3,
    name: "Verve",
    slug: "verve",
    description: "An exploration of biomorphic structures generated through machine learning algorithms.",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1000&auto=format&fit=crop",
    year: 2023
  },
  {
    id: 4,
    name: "Zephyr",
    slug: "zephyr",
    description: "A responsive urban environment concept that evolves based on climate data analysis.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
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
