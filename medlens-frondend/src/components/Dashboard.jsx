import React from 'react';
import { motion } from 'framer-motion';
import { FaTriangleExclamation, FaCircleInfo, FaXmark, FaUpload } from 'react-icons/fa6';
import '../styles/Dashboard.css';

const Dashboard = ({ results }) => {
  if (!results) return null;

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="section-title">
        <span>Results</span>
        <h2>AI Analysis Dashboard</h2>
        <p>Detailed analysis of the scanned medicine</p>
      </div>

      <div className="dashboard-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="dashboard-card"
        >
          <div className="card-badge">{results.scanId}</div>
          <span className="card-label">Medicine Name</span>
          <h3 className="card-value gradient-text">{results.name}</h3>
          <p className="card-sub">{results.details}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="dashboard-card"
        >
          <span className="card-label">Usage</span>
          <h3 className="card-value">{results.usage}</h3>
          <p className="card-sub">Primary indication</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="dashboard-card warning-card"
        >
          <span className="card-label">Safety Warning</span>
          <div className="warning-content">
            <FaTriangleExclamation className="warning-icon" />
            <h3 className="warning-text">{results.warning}</h3>
          </div>
          <p className="card-sub">{results.interactions}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="dashboard-card"
        >
          <span className="card-label">Confidence Score</span>
          <div className="confidence-container">
            <div className="confidence-header">
              <span className="confidence-value">{results.confidence}</span>
              <span className="confidence-label">High Accuracy</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{ width: results.confidence }} />
            </div>
          </div>
          <p className="card-sub timestamp">
            <FaCircleInfo className="info-icon" />
            Scanned at {results.timestamp}
          </p>
        </motion.div>
      </div>

      <div className="dashboard-actions">
        <button 
          className="btn-clear"
          onClick={() => window.location.reload()}
        >
          <FaXmark />
          Clear Results
        </button>
        <a href="#scanner" className="btn-scan-new">
          <FaUpload />
          Scan Another
        </a>
      </div>
    </section>
  );
};

export default Dashboard;