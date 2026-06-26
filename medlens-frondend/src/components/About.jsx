import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaShield, FaBolt, FaDatabase, FaLock } from 'react-icons/fa6';
import '../styles/About.css';

const About = () => {
  const impacts = [
    { icon: FaBrain, title: 'AI-Powered Analysis', desc: 'Advanced OCR workflows intelligently extract medicine information' },
    { icon: FaShield, title: 'Healthcare Safety', desc: 'Designed to improve medicine awareness with confidence-based insights' },
    { icon: FaBolt, title: 'Real-Time Results', desc: 'Receive intelligent medicine analysis and warnings within seconds' },
    { icon: FaDatabase, title: 'Future Scalable', desc: 'Built with scalability for future healthcare integrations' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <span>About</span>
        <h2>About MedLens AI</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-card"
      >
        <p className="about-description">
          MedLens AI is a hackathon-focused healthcare AI platform designed to demonstrate how OCR
          and intelligent medicine analysis can simplify medicine understanding and awareness.
        </p>

        <div className="impact-grid">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="impact-card"
            >
              <item.icon className="impact-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="about-footer">
          <FaLock className="lock-icon" />
          Educational Purposes Only • MedLens AI © 2026
        </div>
      </motion.div>
    </section>
  );
};

export default About;