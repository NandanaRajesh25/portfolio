
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen max-w-12xl mx-auto p-4">
      <Header />
      <main className="py-4">
        <div className="bg-[#FADCD9] card">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Contact</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                Have questions about my work or interested in collaborating? 
                Fill out the form and I'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-[#F8AFA6] rounded-lg p-6">
                <h3 className="text-white text-xl font-bold mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  <p>
                    <span className="block text-sm text-black">Email</span>
                    <span className="text-white font-medium">nandanarajesh4224@gmail.com</span>
                  </p>
                  
                  <p>
                    <span className="block text-sm text-black">WhatsApp</span>
                    <span className="text-white font-medium">6282228112</span><br />
                    
                  </p>
                  
              {/*    <p>
                    <span className="block text-sm text-gray-600">Working Hours</span>
                    <span className="font-medium">Monday – Friday, 9am – 5pm PST</span>
                  </p>
              */}
                  </div>
                
                <div className="mt-8">
                  <h3 className="text-white text-xl font-bold mb-4">Follow Me</h3>
                  
                  <div className="flex gap-4">
                    
                  <a 
                      href="https://github.com/nandanarajesh25" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="w-5 h-5">
<path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
</svg>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/nandanarajesh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>

                    <a 
                      href="https://www.instagram.com/i_nandanarajesh_?igsh=MzNwcWEzdXpvdTQ0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 transition-colors p-3 rounded-full"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 48 48" className="w-5 h-5">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
                    </a>

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

export default Contact;
