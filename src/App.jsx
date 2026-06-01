import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import ProjectModal from "./components/ProjectModal/ProjectModal"; 
import GithubRepos from "./components/GithubRepos";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import Aurora from "./components/Aurora/Aurora";
import ChatRoom from "./components/ChatRoom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Consolidate imports to use your correct data source mapping definitions
import { listTools, listProyek } from "./data";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // null = modal closed

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.scroll-reveal-item');
    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.15) {
            entry.target.classList.add('scroll-reveal-visible');
          } else {
            entry.target.classList.remove('scroll-reveal-visible');
          }
        });
      },
      { threshold: [0, 0.15, 0.5, 0.85, 1] }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Inline Fallback Data directly mapping to your profile metrics
  const bioData = {
    name: "SUJAY ACHARYA",
    title: "Computer Science Student & Developer",
    githubUsername: "Sujay-sys",
    aboutMe: "Passionate about building AI-powered applications, machine learning solutions, and modern web platforms that combine innovation, performance, and real-world impact."
  };

  const aboutMeSection = "Computer Science student and software developer with hands-on experience in artificial intelligence, machine learning, web development, automation, and data analytics. Skilled in designing and building practical software solutions, including AI-powered assistants, predictive models, authentication systems, and automation tools. Familiar with Linux environments, including Kali Linux, and passionate about exploring emerging technologies, cybersecurity concepts, and software engineering best practices. Committed to continuous learning, problem-solving, and developing impactful, user-focused applications.";

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s scroll-reveal-item">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/Sujay1.png" className="w-10 rounded-md" alt="Avatar Icon" />
              <q>Computer Science Student and Developer</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text={`Hi I'm ${bioData.name}`} disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text={bioData.aboutMe}
              delay={40}
              animateBy="words"
              direction="top"
              className="mb-6 text-zinc-400"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="./assets/Sujay_CV.pdf" 
                download="Sujay_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s scroll-reveal-item">
            <ProfileCard
              name={bioData.name}
              title={bioData.title}
              handle={bioData.githubUsername}
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/Sujay.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.hash = '#contact'}
            />
          </div>
        </div>

        {/* About Me Section */}
        <div ref={aboutRef} className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <p className="text-base md:text-lg leading-relaxed mb-10 text-gray-300">
                  {aboutMeSection}
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      6<span className="text-violet-500">+</span>
                    </h1>
                    <p>Projects Highlighted</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Study</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      8.5<span className="text-violet-500">/10</span>
                    </h1>
                    <p>CGPA Metric</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools mt-32 scroll-reveal-item">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Professional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="scroll-reveal-item flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Display Section Grid */}
        <div className="proyek mt-32 py-10 scroll-reveal-item" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-center text-4xl font-bold mb-2">Projects</h1>
          <p className="text-base/loose text-center opacity-50 max-w-2xl mx-auto">
            Showcasing an engineering lineup reflecting core software development principles and structural programming implementations.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {listProyek.slice(0, 4).map((project, idx) => (
              <article
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="scroll-reveal-item rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 + idx * 100}
                data-aos-once="true"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-violet-400">Featured System</span>
                <h3 className="text-2xl font-semibold mt-3 mb-3 text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400 mb-6">{project.subtitle}</p>
                <div className="inline-flex items-center gap-2 font-semibold text-violet-300 hover:text-white">
                  Read Core Metrics & Overview →
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Interactive ChromaGrid Display */}
        <div className="proyek-box mt-14" >
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        <GithubRepos />

        {/* Contact Form & Chatroom Module */}
        <div className="kontak mt-32 sm:p-10 p-0 scroll-reveal-item" id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Contact & Chat
          </h1>
          <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-zinc-800 p-6 rounded-md scroll-reveal-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            <div className="flex-1 scroll-reveal-item">
              <form
                action="https://formsubmit.co/sujayport189@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="type"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md bg-zinc-900 text-white"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send Message" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App;