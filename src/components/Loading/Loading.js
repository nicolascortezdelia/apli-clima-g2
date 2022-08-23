import React from 'react';
import './style.css';

const Loading = () => {
  return (
    <div className="loader">
        <span className="hour"></span>
        <span className="min"></span>
        <span className="circel"></span>
    </div>
  );
};

export default Loading;
