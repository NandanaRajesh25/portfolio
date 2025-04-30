
import { ArrowUpRight } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <Header />
      <main className="py-12">
        <div className="card">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">About</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
              Nandana Rajesh is a full-stack web developer and creative technologist whose work bridges the worlds of software engineering, user experience, and visual design
              </p>
              <p className="mb-6">
              Based in Trivandrum, Nandana Rajesh is currently pursuing a B.Tech in their sixth semester, with a deepening focus on modern front-end and back-end technologies. With hands-on experience in building scalable web applications, they combine technical proficiency with a strong design sensibility.
              </p>
              <p className="mb-6">
              Leveraging tools like Figma and Canva, they craft user-centric digital solutions that are both functional and visually compelling—reflecting a passion for solving real-world problems through efficient, intuitive code.


              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Positions of responsibility
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Design Lead - IEEE PES KERALA CHAPTER (2025-26)</li>
                  <li>Women In Computing Coordinator - IEEE CS SCT SBC (2025-26)
                  </li>
                  <li>Design Lead - MuLearn SCT SB (2025-26)
                  </li>
                  <li>Lead Coordinator - CGPU Student Team (2025-26)
                  </li>
                  <li>Class Representative (2022-2026)
                  </li>
                  <li>Subcom Member - IEEE SCT SB Design Team (2024-25)

                  </li>
                  <li>Senate Member - CSI SCT SB (Design Team (2024-25))
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Julia Huang working on digital art" 
                className="rounded-lg w-full h-auto mb-6"
              />
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Achievements/competitions
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Secured 3rd place in Innovatex Hackathon 2025 conducted by Digital University Kerala
                    </span>
                    <span>2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Finalist in Innovate Hackathon conducted by InApp Technologies
                    </span>
                    <span>2025</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Participated in Tink-Her-Hack, a women's only hackathon conducted by TinkerHub Foundation</span>
                    <span>2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Participated in IEEEXtreme 17.0 Programming Competition and secured a college rank of 5 and global rank of 3062 among 17000 participants
                    </span>
                    <span>2024</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Participated in Young Innovators Programme 5.0 and cleared the first stage
                    </span>
                    <span>2023</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-lg font-medium hover:text-portfolio-salmon"
                >
                  Get in touch
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
