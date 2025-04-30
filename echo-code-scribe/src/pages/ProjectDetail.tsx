
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
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
    fullDescription: "MediIntel harnesses artificial intelligence to address critical inefficiencies in healthcare infrastructure. The platform uses real-time data to track the availability of essential supplies, forecast patient inflow, and detect anomalies in disease patterns. By analyzing historical trends and integrating with supply chains, it streamlines communication between hospitals and vendors—ensuring timely resource allocation, especially during emergencies like pandemics. MediIntel aims to prevent system overload by enabling predictive decision-making and crisis preparedness.",
    imageUrl: projectImage1,
    year: 2025,
    client: "National Health Innovation Program",
    technologies: ["Machine Learning", "Time-Series Forecasting", "Healthcare Analytics", "Supply Chain Optimization", "Real-Time Monitoring"],
    ink: "https://example.com/mediintel"
  },
  {
    id: 2,
    name: "SkillX",
    slug: "skillx",
    description: "A peer-to-peer skill exchange platform enabling users to learn and teach through one-on-one interactions.",
    fullDescription: "SkillX is a collaborative learning platform that connects individuals looking to learn new skills with others who are willing to teach. The system revolves around exchange-based learning, where users create request cards for skills they wish to acquire. In return, they offer to teach a skill they possess. Through real-time chat, video calls, and shared resources, SkillX fosters a personalized learning experience that is completely free. The platform promotes mutual growth, making learning accessible, social, and deeply engaging.",
    imageUrl: projectImage2,
    year: 2025,
    client: "Open Learning Initiative",
    technologies: ["WebRTC", "Real-Time Messaging", "User Matching Algorithms", "Node.js", "React"],
    link: "https://example.com/skillx"
  },  
  {
    id: 3,
    name: "DineEase",
    slug: "dineease",
    description: "A digital restaurant menu and ordering system that enhances dining efficiency through real-time order management.",
    fullDescription: "DineEase streamlines the dining experience by eliminating the need for traditional waitstaff in the ordering process. Customers can browse an interactive digital menu, customize their meals, and place orders directly from their devices. These orders are instantly relayed to the kitchen dashboard, reducing delays and minimizing human error. The platform also features dietary filters and is designed with planned support for QR code table integration, enabling automatic table recognition. Built with a responsive front-end and designed for future scalability with backend and database support, DineEase offers a modern solution to restaurant service optimization.",
    imageUrl: projectImage3,
    year: 2025,
    client: "Smart Dining Initiative",
    technologies: ["HTML", "Tailwind CSS", "Django (Planned)", "Node.js (Planned)", "MongoDB (Planned)", "MySQL (Planned)", "QR Integration"],
    link: "https://example.com/dineease"
  },
  
  {
    id: 4,
    name: "LexiQ",
    slug: "lexiq",
    description: "An AI-powered legal platform that transforms complex court judgments into accessible, searchable, and interactive knowledge.",
    fullDescription: "LexiQ was developed to bridge the gap between dense legal documentation and everyday accessibility. It digitizes court judgments into a structured, searchable database categorized by case type, date, jurisdiction, and parties involved. The platform features an AI chatbot that responds to legal queries in natural language, providing direct access to relevant judgments or summaries. Users can explore legal data visually through interactive graphs that highlight trends, and utilize powerful search and filter tools to streamline legal research. LexiQ empowers students, researchers, and the public to navigate legal information with clarity and ease.",
    imageUrl: projectImage4,
    year: 2025,
    client: "Civic Justice Lab",
    technologies: ["Natural Language Processing", "AI Chatbots", "Data Visualization", "Search Engine Integration", "Legal Document Digitization"],
    link: "https://example.com/lexiq"
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
          {/*      <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium hover:text-portfolio-salmon"
                >
                  View Project Website
                  <ArrowUpRight className="w-5 h-5" />
                </a>
          */}    </div>
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
