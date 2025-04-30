
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Musea",
    slug: "musea",
    description: "An AI-generated architectural space that reimagines museum experiences through digital immersion.",
    fullDescription: "Musea challenges traditional museum design by creating a responsive environment that adapts to the art it contains. Using generative adversarial networks trained on thousands of successful exhibition spaces, the AI creates a uniquely optimized layout for each collection. The space evolves based on visitor behavior, adjusting lighting, pathways, and ambient elements to enhance engagement with the artworks.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
    year: 2024,
    client: "Modern Art Foundation",
    technologies: ["Generative Adversarial Networks", "Spatial Computing", "Interactive Architecture", "Computer Vision"],
    link: "https://example.com/musea"
  },
  {
    id: 2,
    name: "Elara",
    slug: "elara",
    description: "A virtual residential concept that adapts to inhabitants' emotional states through AI sensing.",
    fullDescription: "Elara is a revolutionary living space concept that uses artificial intelligence to create environments perfectly tailored to the emotional and physical needs of its inhabitants. The space adapts in real-time, adjusting lighting, temperature, sound, and even structural elements based on biometric readings and behavioral patterns of the residents.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop",
    year: 2023,
    client: "FutureLiving Labs",
    technologies: ["Emotion AI", "Smart Home Integration", "Biometric Sensing", "Adaptive Architecture"],
    link: "https://example.com/elara"
  },
  {
    id: 3,
    name: "Verve",
    slug: "verve",
    description: "An exploration of biomorphic structures generated through machine learning algorithms.",
    fullDescription: "Verve explores the intersection of biology and architecture through artificial intelligence. By training neural networks on natural growth patterns found in coral reefs, fungi networks, and plant structures, the project generates architectural forms that are both organically inspired and structurally sound. Each design is unique, evolving through thousands of iterations to find optimal solutions for specific environmental conditions.",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1000&auto=format&fit=crop",
    year: 2023,
    client: "Biomimicry Institute",
    technologies: ["Neural Networks", "Generative Design", "Biomimicry", "3D Modeling"],
    link: "https://example.com/verve"
  },
  {
    id: 4,
    name: "Zephyr",
    slug: "zephyr",
    description: "A responsive urban environment concept that evolves based on climate data analysis.",
    fullDescription: "Zephyr reimagines urban planning for the climate change era. This project uses machine learning to analyze decades of climate data, pollution metrics, wind patterns, and urban heat islands to create city spaces that actively mitigate environmental challenges. The resulting designs feature adaptive structures that change throughout the day and seasons to optimize air flow, shade, and temperature regulation.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    year: 2022,
    client: "Urban Climate Initiative",
    technologies: ["Climate Modeling", "Urban Planning AI", "Sustainable Architecture", "Environmental Data Analysis"],
    link: "https://example.com/zephyr"
  },
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen max-w-6xl mx-auto p-4">
        <Header />
        <main className="py-12">
          <div className="card">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Not Found</h1>
            <Link to="/projects" className="inline-flex items-center gap-2 text-lg">
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <Header />
      <main className="py-12">
        <div className="card">
          <div className="mb-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
          <p className="text-xl mb-8">{project.description}</p>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-12">
            <img 
              src={project.imageUrl} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About the Project</h2>
              <p className="mb-6">{project.fullDescription}</p>
              
              <div className="mt-8">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:text-portfolio-salmon"
                >
                  View Project Website
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <div className="bg-portfolio-pink rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Project Details</h3>
                
                <div className="space-y-3">
                  <p>
                    <span className="block text-sm text-gray-600">Year</span>
                    <span className="font-medium">{project.year}</span>
                  </p>
                  
                  <p>
                    <span className="block text-sm text-gray-600">Client</span>
                    <span className="font-medium">{project.client}</span>
                  </p>
                  
                  <div>
                    <span className="block text-sm text-gray-600 mb-1">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-white px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
