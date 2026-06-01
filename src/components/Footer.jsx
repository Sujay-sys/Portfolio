import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
// Import the specific Remix Icons via react-icons/ri (Tree-shakeable)
import { RiGithubFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      {/* Flex container adaptif */}
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Judul - paling atas di mobile */}
        <h1 className="text-2xl font-bold order-1 md:order-none">
          Portfolio
        </h1>

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="flex gap-4 order-2 md:order-none text-gray-300 hover:text-white transition-colors">
          <a href="https://github.com/Sujay-sys" target="_blank" rel="noreferrer">
            <RiGithubFill size={32} />
          </a>
          <a href="https://www.instagram.com/acoustic._sujay/" target="_blank" rel="noreferrer">
            <RiInstagramFill size={32} />
          </a>
          <a href="https://www.youtube.com/@acoustic._sujay" target="_blank" rel="noreferrer">
            <RiYoutubeFill size={32} />
          </a>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;