
import Header from "../components/Header";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import ContactCard from "../components/ContactCard";
import ProjectsPreview from "../components/ProjectsPreview";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen max-w-12xl mx-auto p-4">
      <Header />

      <div className="md:flex flex-row gap-4">
        
        <div className="py-4 md:w-2/3">
          <Hero />
        
          <div className="grid md:grid-cols-2 md:gap-4">
            <Bio />
            <ContactCard />
          </div>
      
        </div>

        <div className="py-4 md:w-1/3">
      
          <ProjectsPreview />
          <Footer />

        </div>
  
    </div>
    
    </div>
  );
};

export default Index;
