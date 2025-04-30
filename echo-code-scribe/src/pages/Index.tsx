
import Header from "../components/Header";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import ContactCard from "../components/ContactCard";
import ProjectsPreview from "../components/ProjectsPreview";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-4">
      <Header />
      <main className="py-8">
        <Hero />
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Bio />
          <ContactCard />
        </div>
        
        <ProjectsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
