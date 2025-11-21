  import React, { useEffect, useState } from 'react';
  import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
  import { Github, Linkedin, ExternalLink, Code2, Terminal, Cpu, Mail, Home, Briefcase, GraduationCap, Award, FolderGit2 } from 'lucide-react';

  // --- BRAND ICONS (Requires: npm install react-icons) ---
  import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker } from 'react-icons/fa';
  import { SiTypescript, SiExpress, SiTailwindcss, SiPostgresql, SiSequelize, SiC } from 'react-icons/si';

  // --- CONFIGURATION ---
  const GITHUB_USERNAME = "libinthankayathil"; 

  // --- DATA FROM RESUME ---
  const RESUME_DATA = {
    name: "Libin T", // [cite: 2]
    role: "Aspiring Software Engineer", // [cite: 3]
    email: "libinthankayathil@gmail.com", // [cite: 4]
    summary: "I engineer scalable digital ecosystems. Bridging the gap between complex backend logic and fluid user interfaces, I build Digital Public Goods that have impacted over 200,000 lives. Focused on performance, open-source contribution, and clean architecture.",
    skills: [
      'JavaScript', 'TypeScript', 'Python', 'C', 
      'Node.js', 'Express', 'React', 'TailwindCSS', 
      'PostgreSQL', 'Sequelize', 'Docker', 'Git'
    ], // 
    experience: [
      {
        company: "Pupilfirst", // [cite: 33]
        role: "Junior Full Stack Engineer Intern", // [cite: 32]
        date: "Jul 2025 - Present", // [cite: 34]
        desc: "Contributed to CARE, a Digital Public Good improving TeleICU and healthcare capacity management. Enhanced front-end features using React, TypeScript, and Tailwind CSS." // [cite: 36, 37]
      },
      {
        company: "Open Healthcare Network", // [cite: 41]
        role: "Open Source Contributor", // [cite: 40]
        date: "Jun 2025 - Present", // [cite: 39]
        desc: "Collaborated on open-source development, integrating UI components with backend APIs and resolving key issues." // [cite: 38]
      }
    ],
    featuredProjects: [
      {
        title: "Learning Management System", // [cite: 17]
        tech: "Node.js, Express, PostgreSQL", // [cite: 17]
        desc: "Full-stack LMS with RESTful APIs, role-based authentication (Passport.js), and real-time course tracking. Deployed on Render.", // [cite: 21, 22, 23]
        link: "#" 
      },
      {
        title: "MovieScape", // [cite: 24]
        tech: "React, TMDB API, Tailwind", // [cite: 24]
        desc: "Movie discovery platform with dynamic search and genre-based filtering. Integrated Express backend for API routing.", // [cite: 25, 26, 27]
        link: "#"
      }
    ],
    certs: [
      "Harvard CS50 Python", // [cite: 55]
      "Skyscanner Front-End Job Sim", // [cite: 61]
      "Deep Learning.AI: AI For Everyone", // [cite: 67]
      "NPTEL: Intro to IoT" // [cite: 72]
    ]
  };

  // --- ICON MAPPING ---
  const skillIcons = {
    'JavaScript': <div className="font-bold text-yellow-400">JS</div>,
    'TypeScript': <SiTypescript className="text-blue-400" />,
    'Python': <FaPython className="text-yellow-300" />,
    'C': <SiC className="text-blue-500" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'Express': <SiExpress className="text-white" />,
    'React': <FaReact className="text-cyan-400" />,
    'TailwindCSS': <SiTailwindcss className="text-cyan-300" />,
    'PostgreSQL': <SiPostgresql className="text-blue-300" />,
    'Sequelize': <SiSequelize className="text-blue-400" />,
    'Docker': <FaDocker className="text-blue-500" />,
    'Git': <FaGitAlt className="text-red-500" />
  };

  // --- COMPONENTS ---

  const Background = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
      const handleMouseMove = (e) => {
        animate(mouseX, e.clientX, { duration: 0, type: "tween" });
        animate(mouseY, e.clientY, { duration: 0, type: "tween" });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <div className="fixed inset-0 z-0 w-full h-full bg-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
          }}
        />
      </div>
    );
  };

  const CustomCursor = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    useEffect(() => {
      const moveCursor = (e) => {
        mouseX.set(e.clientX - 10);
        mouseY.set(e.clientY - 10);
      };
      window.addEventListener('mousemove', moveCursor);
      return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
      />
    );
  };

  const Navbar = () => {
    const navItems = [
      { name: 'Home', icon: <Home size={18} />, href: '#' },
      { name: 'Work', icon: <FolderGit2 size={18} />, href: '#work' },
      { name: 'Exp', icon: <Briefcase size={18} />, href: '#experience' },
      { name: 'Contact', icon: <Mail size={18} />, href: `mailto:${RESUME_DATA.email}` },
    ];

    return (
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-1 p-2 rounded-full bg-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="relative px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white transition-colors group flex items-center gap-2"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.name}</span>
              <span className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform" />
            </a>
          ))}
        </motion.nav>
      </div>
    );
  };

  const ProjectCard = ({ title, desc, tech, link, stats }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors flex flex-col h-full group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex justify-between items-start mb-4">
        <div className="p-2 bg-neutral-800/50 rounded-lg text-indigo-400 group-hover:text-indigo-300">
          <Code2 size={20} />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
      <h3 className="relative z-10 text-xl font-bold text-white mb-2">{title}</h3>
      <p className="relative z-10 text-neutral-400 text-sm flex-grow mb-4 line-clamp-3">{desc}</p>
      <div className="relative z-10 flex items-center gap-3 text-xs text-neutral-500">
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
          {tech}
        </span>
        {stats && <span>⭐ {stats}</span>}
      </div>
    </motion.div>
  );

  // --- MAIN APP ---
  function App() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      if(GITHUB_USERNAME) {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`)
          .then(res => res.json())
          .then(data => {
            if (Array.isArray(data)) setRepos(data);
          })
          .catch(err => console.error("GitHub API Error:", err));
      }
    }, []);

    return (
      <div className="min-h-screen text-neutral-200 font-sans selection:bg-indigo-500/30 cursor-none relative">
        <Background />
        <CustomCursor />
        <Navbar />

        <div className="relative z-10">
          
          {/* HERO SECTION */}
          <section className="h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* REMOVED LOCATION CHIP HERE AS REQUESTED */}
              
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-300%">
                  {RESUME_DATA.name}.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10">
                {RESUME_DATA.role}. <br/>
                {RESUME_DATA.summary}
              </p>
              
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-indigo-50 transition-colors"
                >
                  <Github size={20} /> GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#" 
                  className="px-8 py-4 border border-neutral-700 backdrop-blur-md bg-white/5 rounded-full flex items-center gap-2 hover:border-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={20} /> LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </section>

          {/* EXPERIENCE & EDUCATION */}
          <section id="experience" className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Experience */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <Briefcase className="text-indigo-500" /> Experience
                  </h2>
                  <div className="space-y-8 border-l border-neutral-800 pl-8 ml-4">
                    {RESUME_DATA.experience.map((job, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-indigo-500" />
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p className="text-indigo-400 text-sm mb-2">{job.company} • {job.date}</p>
                        <p className="text-neutral-400 text-sm">{job.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <GraduationCap className="text-indigo-500" /> Education
                  </h2>
                  <div className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl mb-8">
                    <h3 className="text-lg font-bold text-white">B.Tech in Electronics & Comm.</h3>
                    <p className="text-neutral-400 text-sm">Mar Athanasius College of Engineering</p>
                    <p className="text-indigo-400 text-xs mt-1">Nov 2022 - May 2026</p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award size={20} className="text-indigo-500"/> Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {RESUME_DATA.certs.map(cert => (
                      <span key={cert} className="px-3 py-1 bg-neutral-800/50 border border-white/5 rounded-full text-xs text-neutral-300">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </section>

          {/* REDESIGNED SKILLS SECTION (WITH LOGOS) */}
          <section id="about" className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <Terminal className="text-indigo-500" /> Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Main Tech Grid with Logos */}
              <div className="md:col-span-2 bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Core Stack</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {RESUME_DATA.skills.map((tech) => (
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      key={tech} 
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-neutral-800/30 rounded-xl border border-white/5 hover:bg-white/5 hover:border-indigo-500/30 transition-all group"
                    >
                      <div className="text-3xl group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all">
                        {skillIcons[tech] || <Terminal size={24} />}
                      </div>
                      <span className="text-xs font-medium text-neutral-400 group-hover:text-white">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* IoT / Hardware Side Card */}
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu size={120} />
                </div>
                <Cpu size={48} className="text-indigo-400 mb-4 mx-auto relative z-10" />
                <h3 className="text-xl font-bold text-white relative z-10">IoT & Embedded</h3>
                <p className="text-sm text-neutral-400 mt-2 relative z-10">
                  Bridging software with hardware using Arduino & ESP8266.
                </p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="work" className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
              <FolderGit2 className="text-indigo-500" /> Featured Work
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESUME_DATA.featuredProjects.map((proj, i) => (
                <ProjectCard key={i} title={proj.title} desc={proj.desc} tech={proj.tech} link={proj.link} />
              ))}
              {repos.map((repo) => (
                <ProjectCard 
                  key={repo.id} 
                  title={repo.name} 
                  desc={repo.description || "GitHub Repository"} 
                  tech={repo.language || "Code"} 
                  link={repo.html_url}
                  stats={repo.stargazers_count}
                  />
              ))}
            </div>
          </section>

          <footer className="py-12 text-center text-neutral-600 border-t border-white/5 mt-20">
            <p>© 2025 {RESUME_DATA.name}. Built with React.</p>
          </footer>
        </div>
      </div>
    );
  }

  export default App;