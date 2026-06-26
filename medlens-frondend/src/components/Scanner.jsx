import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCloudArrowUp, FaImage, FaMagnifyingGlass, FaCircleCheck } from 'react-icons/fa6';
import '../styles/Scanner.css';

const Scanner = ({ onScan, isLoading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('No image selected');
  const [filePreview, setFilePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('No image selected');
      setFilePreview(null);
    }
  };

  const handleScan = () => {
    if (!selectedFile) {
      alert('Please upload a medicine image first.');
      return;
    }
    onScan(selectedFile);
  };

  return (
    <section id="scanner" className="scanner-section">
      <div className="section-title">
        <span>Live Demo</span>
        <h2>Medicine Scanner</h2>
        <p>Upload a medicine image and let AI analyze it instantly</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="scanner-card"
      >
        <div className="scanner-upload">
          <div className="upload-icon">
            <FaCloudArrowUp />
          </div>
          <h3>Upload Medicine Image</h3>
          <p>Supports medicine strips, bottles, labels, and medicine packages</p>

          <div className="upload-area">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              hidden
              accept="image/*"
            />
            <button className="upload-btn" onClick={() => fileInputRef.current?.click()}>
              <FaImage />
              Choose Image
            </button>

            {filePreview && (
              <div className="preview-container">
                <img src={filePreview} alt="Preview" className="preview-image" />
                <div className="preview-name">
                  <FaCircleCheck />
                  {fileName}
                </div>
              </div>
            )}

            {!filePreview && (
              <div className="file-name">{fileName}</div>
            )}
          </div>

          <button
            className={`scan-btn ${isLoading ? 'loading' : ''}`}
            onClick={handleScan}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="spinner" />
                Processing...
              </>
            ) : (
              <>
                <FaMagnifyingGlass />
                Scan Medicine
              </>
            )}
          </button>

          {isLoading && (
            <div className="loading-progress">
              <div className="loading-bar">
                <div className="loading-fill" />
              </div>
              <p>AI is analyzing the medicine...</p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Scanner;