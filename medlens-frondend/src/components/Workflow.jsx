import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Workflow.css';

const Workflow = () => {
  const steps = [
    { step: '01', title: 'Upload Image', desc: 'Upload a medicine strip or medicine package image.' },
    { step: '02', title: 'AI Scans Medicine', desc: 'OCR extracts medicine text and analyzes medicine information.' },
    { step: '03', title: 'View Results', desc: 'Get medicine usage, warnings, and confidence-based insights.' }
  ];

  return (
    <section className="workflow-section">
      <div className="section-title">
        <span>Workflow</span>
        <h2>How MedLens AI Works</h2>
      </div>

      <div className="workflow-grid">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="workflow-card"
          >
            <div className="step-number">{item.step}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;