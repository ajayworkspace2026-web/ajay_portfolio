import React, { Suspense, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars, Torus } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Code2, Cpu, Cloud, Layers3, Sparkles, Menu } from "lucide-react";
import "./styles.css";

const projects = [
  { n:"01", title:"Multilingual Sentiment Intelligence", type:"AI / NLP · Full stack", description:"A sentiment analysis platform using mBERT to classify social posts, visualize sentiment, and explore public conversations.", stack:["React","Flask","mBERT","AWS S3","EC2"], href:"https://github.com/ajaygoud03", featured:true },
  { n:"02", title:"Svastida Fashion", type:"E-commerce experience", description:"A fashion showcase with collection management, custom dress enquiries, and a guided assistant for fabric and measurement questions.", stack:["React","Vercel","Supabase","Gemini"], href:"https://github.com/ajaygoud03" },
  { n:"03", title:"Quit Mate", type:"Product concept", description:"A focused digital companion concept designed to help users build healthier habits through a simple, supportive experience.", stack:["React","JavaScript","UI/UX"], href:"https://github.com/ajaygoud03" },
  { n:"04", title:"Ice Cream Delight", type:"Web development", description:"A responsive product and ordering experience built to make browsing flavours and discovering treats feel effortless.", stack:["HTML","CSS","JavaScript"], href:"https://github.com/ajaygoud03" }
];
const skills = [
  {icon:Code2,title:"Engineering",items:"Java · Python · C++ · SQL · OOP · DSA"},
  {icon:Layers3,title:"Frontend & backend",items:"React · JavaScript · TypeScript · Flask · REST APIs"},
  {icon:Cpu,title:"AI & data",items:"NLP · Transformers · mBERT · Hugging Face · Data Analytics"},
  {icon:Cloud,title:"Cloud & delivery",items:"AWS EC2 · S3 · Git · CI/CD fundamentals · Netlify"}
];

function Reactor(){
  const core = useRef();
  const ring = useRef();
  useFrame((state, delta)=>{ if(core.current) core.current.rotation.y += delta*.12; if(ring.current) ring.current.rotation.z -= delta*.08; });
  return <group ref={core}>
    <Float speed={1.2} rotationIntensity={.22} floatIntensity={.35}>
      <mesh><icosahedronGeometry args={[1.18,3]}/><MeshDistortMaterial color="#a9b0b8" metalness={.92} roughness={.23} distort={.18} speed={1.1}/></mesh>
      <mesh scale={1.22}><icosahedronGeometry args={[1.18,1]}/><meshBasicMaterial color="#d7a15d" wireframe transparent opacity={.23}/></mesh>
      <mesh rotation={[.3,.5,.2]}><torusGeometry args={[1.56,.012,8,120]}/><meshBasicMaterial color="#d5a45e"/></mesh>
      <mesh rotation={[1.12,.2,.4]}><torusGeometry args={[1.78,.008,8,120]}/><meshBasicMaterial color="#74808b" transparent opacity={.8}/></mesh>
      <mesh position={[0,0,1.05]}><sphereGeometry args={[.16,32,32]}/><meshBasicMaterial color="#f2c37b"/></mesh>
    </Float>
    <Torus ref={ring} args={[2.15,.006,6,150]} rotation={[1.1,.4,.3]}><meshBasicMaterial color="#6c7784" transparent opacity={.55}/></Torus>
  </group>
}
function Scene(){ return <Canvas camera={{position:[0,0,6.8],fov:42}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><ambientLight intensity={1.1}/><pointLight position={[3,3,4]} intensity={26} color="#d6a05d"/><pointLight position={[-4,-2,1]} intensity={13} color="#8da0b6"/><Suspense fallback={null}><Stars radius={40} depth={18} count={800} factor={2} saturation={0} fade speed={.35}/><Reactor/></Suspense></Canvas> }

function Header(){return <header className="header"><a className="wordmark" href="#top"><span className="mark">A<span>.</span></span><span>AJAY KUMAR<small>SOFTWARE DEVELOPER</small></span></a><nav><a href="#work">Selected work</a><a href="#about">About</a><a href="#skills">Capabilities</a><a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={14}/></a></nav><a className="mobile-menu" href="#contact" aria-label="Jump to contact"><Menu/></a></header>}

function App(){
 return <div id="top" className="site-shell">
  <div className="grain"/>
  <Header/>
  <main>
   <section className="hero section-wrap">
    <div className="hero-copy">
      <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span className="live-dot"/> AVAILABLE FOR FRESHER OPPORTUNITIES <span className="eyebrow-line"/></motion.div>
      <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.12}}>BUILDING WHAT COMES NEXT.</motion.p>
      <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15}}>Ideas into<br/><em>impact.</em></motion.h1>
      <motion.p className="hero-description" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.32}}>I'm Ajay Kumar Chinthapally, a software developer interested in building useful products across full-stack engineering, AI, and cloud.</motion.p>
      <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.45}}><a className="button button-light" href="#work">Explore my work <ArrowDownRight size={16}/></a><a className="text-link" href="https://www.linkedin.com/in/chinthapallyajaykumar03/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a></motion.div>
      <div className="hero-meta"><span>HYDERABAD, INDIA</span><span className="meta-separator">/</span><span>COMPUTER SCIENCE · 2026</span></div>
    </div>
    <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:.2}}><div className="art-grid"/><div className="art-label art-label-top"><span>FIG. 001</span><span>CORE SYSTEM</span></div><div className="reactor-canvas"><Scene/></div><div className="orbit-caption"><span className="orbit-dot"/><span>ENGINEERED TO EXPLORE</span></div><div className="art-label art-label-bottom"><span>AI / CLOUD / SOFTWARE</span><span>HYD—IN</span></div><div className="hero-stamp">AK<span>•</span>26</div></motion.div>
    <div className="hero-side-note">DESIGNING WITH INTENT · BUILDING WITH CURIOSITY</div>
   </section>

   <section className="intro-strip"><div className="strip-label">THE APPROACH</div><p>Technology should feel <em>thoughtful.</em> Products should feel <em>human.</em> And the details should always matter.</p><span className="strip-index">[ 01 — 04 ]</span></section>

   <section id="work" className="section-wrap work-section">
    <div className="section-heading"><div><span className="section-index">01 / SELECTED WORK</span><h2>Built to be<br/><em>useful.</em></h2></div><p>A few projects that reflect how I think, build, and learn. Each one is a step toward making technology more practical.</p></div>
    <div className="project-grid">{projects.map((p,i)=><motion.article className={`project-card ${p.featured?"project-featured":""}`} key={p.n} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,delay:i*.08}}>
      <div className="project-top"><span>{p.n} / PROJECT</span><a href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}><MoveUpRight size={17}/></a></div>
      <div className={`project-visual visual-${i+1}`} aria-hidden="true">{i===0?<div className="sentiment-visual"><div className="sv-orbit"/><span className="sv-center">mBERT</span><div className="sv-chip chip-a">POSITIVE <b>0.94</b></div><div className="sv-chip chip-b">NEUTRAL <b>0.72</b></div><div className="sv-chip chip-c">NEGATIVE <b>0.88</b></div></div>:i===1?<div className="fashion-visual"><div className="fashion-ring"/><div className="fashion-monogram">S<span>.</span></div><div className="fashion-caption">SVASTIDA<br/><small>MADE TO FEEL LIKE YOU</small></div></div>:i===2?<div className="habit-visual"><div className="habit-ring">RESET<br/><span>DAY BY DAY</span></div><div className="habit-spark">✳</div></div>:<div className="ice-visual"><div className="ice-scoop scoop-one"/><div className="ice-scoop scoop-two"/><div className="ice-scoop scoop-three"/><span>GOOD MOOD<br/>SERVED DAILY</span></div>}</div>
      <div className="project-type">{p.type}</div><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="tag-list">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
    </motion.article>)}</div>
    <div className="all-projects"><span>MORE CODE, MORE EXPERIMENTS</span><a href="https://github.com/ajaygoud03" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16}/></a></div>
   </section>

   <section id="about" className="about-section"><div className="section-wrap about-grid"><div className="about-heading"><span className="section-index">02 / A LITTLE ABOUT ME</span><h2>Curious by<br/><em>default.</em></h2><div className="about-quote">“Make it work. Make it clear. Then make it better.”</div></div><div className="about-copy"><p className="about-lede">I'm a Computer Science Engineering graduate who enjoys taking ideas from a blank page to something people can actually use.</p><p>My work sits at the intersection of software development, AI, and cloud infrastructure. I've built React experiences, worked with Python and NLP models, and deployed applications using AWS and modern web tooling.</p><p>I'm early in my career, so I value the fundamentals: understanding the problem, writing maintainable code, testing the details, and learning from what doesn't work the first time.</p><div className="education-card"><div className="edu-icon">A<span>U</span></div><div><span className="edu-label">EDUCATION</span><h3>Anurag University</h3><p>B.Tech · Computer Science & Engineering · 2022–2026</p></div><span className="edu-year">2026</span></div></div></div></section>

   <section id="skills" className="section-wrap skills-section"><div className="section-heading"><div><span className="section-index">03 / CAPABILITIES</span><h2>Tools for<br/><em>the work.</em></h2></div><p>A practical toolkit that keeps growing. Strong fundamentals first, new tools when they solve a real problem.</p></div><div className="skills-grid">{skills.map((s,i)=><div className="skill-card" key={s.title}><div className="skill-card-top"><s.icon size={20}/><span>0{i+1}</span></div><h3>{s.title}</h3><p>{s.items}</p></div>)}</div><div className="cert-row"><span className="section-index">LEARNING & CERTIFICATIONS</span><div className="cert-items"><span>Wipro TalentNext · Java Full Stack</span><span>VOIS · Data Analytics Internship</span><span>ServiceNow · Virtual Internship</span><span>Salesforce Trailhead</span></div></div></section>

   <section id="contact" className="contact-section"><div className="contact-orb" aria-hidden="true"/><div className="section-wrap contact-inner"><span className="section-index">04 / YOUR MOVE</span><h2>Have a good<br/>problem? <em>Let's solve it.</em></h2><p>I'm looking for a place to contribute, learn from good engineers, and build software that matters. If that sounds like your team, let's connect.</p><div className="contact-actions"><a className="button button-light" href="mailto:ajayworkspace2026@gmail.com">Send an email <Mail size={16}/></a><a className="button button-outline" href="https://www.linkedin.com/in/chinthapallyajaykumar03/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a className="button button-outline" href="https://github.com/ajaygoud03" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div><div className="contact-note"><Sparkles size={14}/> OPEN TO ENTRY-LEVEL SOFTWARE & DEVELOPER ROLES</div></div></section>
  </main>
  <footer className="footer"><a className="wordmark" href="#top"><span className="mark">A<span>.</span></span><span>AJAY KUMAR<small>SOFTWARE DEVELOPER</small></span></a><span>INDEPENDENTLY BUILT · 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
 </div>
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
