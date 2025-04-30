
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
                Julia Huang is an AI artist and creative technologist whose work explores the intersection of art, architecture, and artificial intelligence.
              </p>
              <p className="mb-6">
                Born and raised in Los Angeles, Julia studied Architecture and Computer Science at MIT before pursuing her passion for digital art. Her work has been exhibited in galleries across the globe, including New York, Tokyo, and London.
              </p>
              <p className="mb-6">
                Using proprietary AI algorithms, Julia creates immersive digital environments that challenge our perception of physical space and push the boundaries of architectural design.
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Recognition & Awards</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>2024 Digital Art Innovation Prize, Art+Tech Summit</li>
                  <li>2023 Emerging AI Artist of the Year, CreativeTech Awards</li>
                  <li>2022 Architectural Visualization Excellence Award</li>
                  <li>2021 AI Creative Fellowship, Tech Arts Institute</li>
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
                <h3 className="text-lg font-bold mb-2">Exhibitions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Neo Digital Spaces, MoMA</span>
                    <span>2024</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>Future Architecture Biennale</span>
                    <span>2023</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span>AI Art Revolution, Tate Modern</span>
                    <span>2022</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span>Digital Dreams, Tokyo Design Week</span>
                    <span>2021</span>
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
