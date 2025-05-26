import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-4 flex flex-col items-center animate-fade-in">
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center">
        {/* Left: Name and Role */}
        <div className="flex flex-col items-start mb-8 md:mb-0 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-widest leading-none hover:scale-105 transition-transform duration-300">Suraj Yadav</h1>
          <span className="text-gray-400 text-lg mt-4">Full-stack developer</span>
        </div>
        {/* Right: Contacts and Site Info */}
        <div className="flex flex-col items-end w-full md:w-auto animate-slide-in-right">
          <div className="text-xl font-mono font-bold mb-4">... /Contacts ...</div>
          <nav className="flex gap-8 mb-6 text-gray-300 font-mono text-lg">
            <a href="#" className="hover:text-white transition-colors duration-300">Main</a>
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Articles</a>
          </nav>
          <div className="border border-gray-600 rounded-2xl p-6 mb-8 w-full md:w-96 hover:border-white transition-colors duration-300">
            <div className="text-gray-400 text-lg mb-2">Site</div>
            <div className="font-mono text-base text-gray-300">
              Handcrafted by <span className="text-white">ME</span> /<br />
              Designed by <span className="underline">Taisia</span> /<br />
              Powered by NextJs
            </div>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 w-full max-w-4xl animate-scale-in">
        <FooterButton 
          icon={<FaGithub />} 
          label="Github" 
          href="https://github.com/surajramayadav"
        />
        <FooterButton 
          icon={<FaLinkedin />} 
          label="Linkedin" 
          href="https://www.linkedin.com/in/surajramayadav/"
        />
        <FooterButton 
          icon={<FaTelegram />} 
          label="Telegram" 
          href="https://t.me/surajramayadav"
        />
        <FooterButton 
          icon={<FaFacebook />} 
          label="Facebook" 
          href="https://www.facebook.com/surajramayadav"
        />
        <FooterButton 
          icon={<FaInstagram />} 
          label="Instagram" 
          href="https://www.instagram.com/suraj.yadav.25/"
        />
      </div>
    </footer>
  );
}

function FooterButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-gray-600 rounded-full px-6 py-3 text-gray-300 font-mono text-lg hover:bg-white/10 hover:border-white hover:scale-110 transition-all duration-300"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-light">{label}</span>
    </a>
  );
}
