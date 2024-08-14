// src/Popup.js
import React from 'react';
import './Popup.css'; // Import the CSS for the popup

function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{message}</h2>
        <button onClick={onClose} className="popup-button">Close</button>
      </div>
    </div>
  );
}

export default Popup;
