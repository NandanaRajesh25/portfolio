
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project4.png';

const projects = [
  { id: 1,name: "MediIntel",slug: "mediintel", imageUrl: projectImage2 },
  { id: 2,name: "SkillX",slug: "skillx",imageUrl: projectImage1 },
  { id: 3,name: "DineEase",slug: "dineease", imageUrl: projectImage3 },
  { id: 4,name: "LexiQ",slug: "lexiq", imageUrl: projectImage4 },
];

const ProjectsPreview = () => {
  return (
    <div className="bg-[#FADCD9] card">
      <div className="mb-12 px grid md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <Link to="/projects/mediintel" className="block aspect-video rounded-xl overflow-hidden bg-[#11120D] relative group">
            <img 
              src={projectImage2} 
              alt="Musea Project" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors flex items-start justify-between p-4">
              <h3 className="text-xl font-medium">MediIntel</h3>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="divide-y divide-black/5 ">
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
