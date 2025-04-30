
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project4.png';

const projects = [
  { id: 1,name: "MediIntel",slug: "mediintel", imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b" },
  { id: 2,name: "SkillX",slug: "skillx",imageUrl: "" },
  { id: 3,name: "DineEase",slug: "dineease", imageUrl: "" },
  { id: 4,name: "LexiQ",slug: "lexiq", imageUrl: "" },
];

const ProjectsPreview = () => {
  return (
    <div className="card">
      <div className="mb-4 grid md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <Link to="/projects/MediIntel" className="block aspect-video rounded-xl overflow-hidden bg-portfolio-beige relative group">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" 
              alt="Musea Project" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors flex items-start justify-between p-4">
              <h3 className="text-xl font-medium">Musea</h3>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="divide-y divide-black/5">
        {projects.slice(1).map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`} className="project-link">
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPreview;
