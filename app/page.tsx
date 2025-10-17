"use client";

import { Mail, Linkedin, Globe, Award, Code, Briefcase, GraduationCap, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;900&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: #000000;
          color: white;
          overflow-x: hidden;
        }
        
        h1, h2, h3 {
          font-family: 'Playfair Display', serif;
        }
        
        ::selection {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%);
        }
        
        .glow-text {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
        }
        
        .glass {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .card {
          background: linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.1), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px rgba(255, 255, 255, 0.03);
        }
        
        .card:hover::before {
          opacity: 1;
        }
        
        .badge {
          background: linear-gradient(135deg, #1a1a1a 0%, #141414 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          padding: 8px 16px;
          font-size: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          letter-spacing: 0.03em;
          color: #a3a3a3;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .badge:hover {
          background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          color: #000000;
          border: none;
          border-radius: 9999px;
          padding: 16px 40px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.25);
          background: #ffffff;
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          padding: 16px 40px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }
        
        .ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: pulse 8s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.5; 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1.05); 
          }
        }
        
        .nav-link {
          color: #a3a3a3;
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
          padding-bottom: 4px;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover {
          color: white;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 3rem;
          position: relative;
          padding-bottom: 1.5rem;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, white 0%, transparent 100%);
        }
        
        .icon-hover {
          transition: all 0.3s ease;
        }
        
        .icon-hover:hover {
          transform: scale(1.2) translateY(-2px);
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.4));
        }
      `}</style>

      <main style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
        {/* Header */}
        <header className="glass" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: 900,
            fontFamily: 'Playfair Display, serif',
            margin: 0 
          }}>λ</h1>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="hero" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 32px 32px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="ambient-glow" />
          
          <div style={{
            maxWidth: '1400px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '80px',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap'
          }}>
            {/* 3D λ symbol */}
            <div style={{
              width: '320px',
              height: '320px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '200px',
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 0.05)',
              fontFamily: 'Playfair Display, serif',
              flexShrink: 0
            }}>
              λ
            </div>
            
            {/* Hero Text */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h1 className="glow-text" style={{
                fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                lineHeight: 1.1
              }}>
                Sandra Arias
              </h1>
              <p style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: '#a3a3a3',
                lineHeight: 1.5,
                marginBottom: '40px'
              }}>
                AI | Robotics | Informatics | Trading Enthusiast
              </p>
              
              <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
                <a href="https://www.linkedin.com/in/lambdawave/" target="_blank" rel="noopener noreferrer" className="icon-hover">
                  <Linkedin size={28} color="white" />
                </a>
                <a href="mailto:sasa.lambda@gmail.com" className="icon-hover">
                  <Mail size={28} color="white" />
                </a>
                <a href="https://lambda-wave.com" target="_blank" rel="noopener noreferrer" className="icon-hover">
                  <Globe size={28} color="white" />
                </a>
              </div>
              
              <a href="#contact" className="btn-primary">
                Work with Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 32px'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>
            {/* About Me */}
            <div>
              <h2 className="section-title">About Me</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#d4d4d4', fontSize: '1.125rem', lineHeight: 1.75 }}>
                <p>I&apos;m Sandra Arias, a 19-year-old college student exploring the world. Currently based in Dubai.</p>
                <p>Passionate about where technology can take us as humanity (it could be a bad ending if you ask me).</p>
                <p>Very curious about everything. Always in search of adventure and discovery. Recently, fintech has become one of my strongest interests.</p>
                <p>I like to see and appreciate art in even the smallest things.</p>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '1.5rem', marginTop: '20px' }}>I LOVE CINEMA</p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="section-title">Education</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {[
                  { school: 'Tetr College of Business', period: '2025 – 2029 • Dubai, UAE', degree: 'Bachelor - Science in AI' },
                  { school: 'Universidad Católica Boliviana', period: '2024 – 2025 • Cochabamba, Bolivia', degree: 'System Engineering' },
                  { school: 'University of Oxford', period: 'Summer 2023 • Oxford, UK', degree: 'Summer Course – Computer Science' },
                  { school: 'San Agustín High School', period: '2017 – 2023', degree: '' }
                ].map((edu, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                    <GraduationCap size={24} color="#6b6b6b" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>{edu.school}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#6b6b6b', marginBottom: '8px' }}>{edu.period}</p>
                      {edu.degree && <p style={{ color: '#a3a3a3' }}>{edu.degree}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" style={{
          padding: '120px 32px',
          background: '#0a0a0a'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Experience</h2>
            <div style={{ borderLeft: '2px solid #333', paddingLeft: '32px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <Briefcase size={24} color="#6b6b6b" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '12px' }}>MundialMed</h3>
                  <p style={{ color: '#a3a3a3', marginBottom: '8px' }}>Logistic Team • November 2023 - June 2024</p>
                  <p style={{ fontSize: '0.875rem', color: '#6b6b6b', marginBottom: '16px' }}>Cochabamba, Bolivia</p>
                  <p style={{ color: '#d4d4d4', fontSize: '1.125rem', lineHeight: 1.75 }}>
                    Worked in the logistics team of a healthcare company, improving workflows, maintaining the website, 
                    and developing digital patient reports to support accurate diagnostics and streamlined data management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: '120px 32px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {[
                { icon: Award, title: 'First Global Robotics Competition', role: 'Team Leader – National Robotics Team • 2022-2023', desc: "Led the national robotics team to a top 50 finish at the First Global Robotics Competition, the country's highest placement, overseeing coordination, strategy, and technical execution under international competition standards." },
                { icon: Award, title: 'National Robotics Competitions', role: 'Team Leader / Competitor • 2019-2024', desc: 'Secured first place in three national robotics competitions, demonstrating advanced skills in mechanical design, coding, and collaborative problem-solving. Led a multi-disciplinary team through all project phases, from prototyping to competition execution.' },
                { icon: Code, title: 'PyCon 2022 Presentation', role: 'Speaker / Research Presenter • 2022', desc: 'Presented at PyCon 2022 on using CNNs with gyroscope data to detect erratic movements, showcasing model implementation and live demos to an audience of 15K+.' },
                { icon: Users, title: 'Geeks In Action', role: 'Co-Founder • 2019-2021', desc: 'Co-founded a STEAM community that inspires young people to pursue their passions in technology and innovation. Managed a 1K+ Facebook community and produced professional live sessions.' }
              ].map((project, i) => (
                <div key={i} className="card" style={{ padding: '32px' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'start' }}>
                    <project.icon size={28} color="white" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>{project.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#6b6b6b' }}>{project.role}</p>
                    </div>
                  </div>
                  <p style={{ color: '#d4d4d4', lineHeight: 1.75 }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: '120px 32px', background: '#0a0a0a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 className="section-title">Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
              {[
                { title: 'Programming Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'HTML5', 'CSS3'] },
                { title: 'Technologies & Frameworks', items: ['TensorFlow', 'React.js', 'Node.js', 'MongoDB', 'MySQL', 'Arduino', 'Linux', 'Git', 'GitHub'] },
                { title: 'Tools & Design', items: ['Jupyter', 'NumPy', 'Pandas', 'Figma', 'Adobe XD'] }
              ].map((category, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', color: '#d4d4d4' }}>{category.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {category.items.map((skill, j) => (
                      <span key={j} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '60px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', color: '#d4d4d4' }}>Domain Expertise</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['Artificial Intelligence', 'Data Science', 'Robotics', 'Web Development', 'Networking', 'Digital Healthcare Systems', 'Community Management', 'Project Leadership'].map((skill, i) => (
                  <span key={i} className="badge">{skill}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '80px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>Certifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {[
                  { title: 'Networking Essentials', org: 'CISCO • 2022-2023', desc: 'TCP/IP, OSI model, DNS, DHCP, firewalls, VPNs, and cybersecurity basics' },
                  { title: 'Python for Data Science', org: 'xiobit • 2020', desc: 'Python programming, NumPy, Pandas, and machine learning workflows' }
                ].map((cert, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                    <BookOpen size={24} color="#6b6b6b" style={{ marginTop: '4px', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px' }}>{cert.title}</h4>
                      <p style={{ fontSize: '0.875rem', color: '#6b6b6b', marginBottom: '8px' }}>{cert.org}</p>
                      <p style={{ fontSize: '0.875rem', color: '#a3a3a3', lineHeight: 1.6 }}>{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '120px 32px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '32px' }}>Let&apos;s Connect</h2>
            <p style={{ fontSize: '1.5rem', color: '#d4d4d4', marginBottom: '48px', lineHeight: 1.6 }}>
              Interested in working together or have a project in mind?
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginBottom: '48px' }}>
              <a href="mailto:sasa.lambda@gmail.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} />
                sasa.lambda@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lambdawave/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <p style={{ color: '#6b6b6b', fontSize: '1.125rem' }}>
              Dubai, UAE • +971 54 776 8688
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: '#6b6b6b',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          <p>&copy; 2025 Lambda Wave • Sandra Arias</p>
        </footer>
      </main>
    </>
  );
}