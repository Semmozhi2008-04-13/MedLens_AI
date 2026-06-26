import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaTriangleExclamation, FaBolt, FaChartLine } from 'react-icons/fa6';
import '../styles/Features.css';

const Features = () => {
  const features = [
    { icon: FaEye, title: 'OCR Detection', desc: 'Extract medicine text instantly from strips, bottles, and medicine packages.', color: '#00f0ff' },
    { icon: FaTriangleExclamation, title: 'Safety Warnings', desc: 'AI-generated warnings for dosage limits and medicine safety awareness.', color: '#ff6b6b' },
    { icon: FaBolt, title: 'Fast Scan Results', desc: 'Receive medicine information and insights within seconds using AI workflows.', color: '#ffd93d' },
    { icon: FaChartLine, title: 'Confidence Analysis', desc: 'View AI confidence scores and intelligent medicine recognition metrics.', color: '#6c5ce7' }
  ];

  return (
    <section id="features" className="features-section">
      <div className="section-title">
        <span>Features</span>
        <h2>Built for Modern Healthcare</h2>
        <p>A hackathon-ready intelligent medicine scanning experience with AI-driven analysis</p>
      </div>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="feature-card"
          >
            <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}33, ${feature.color}11)` }}>
              <feature.icon style={{ color: feature.color }} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <div className="feature-hover-line" style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;