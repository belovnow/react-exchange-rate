import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {

  const icon = <i className="em em-anguished"></i>;

  return <div className="error-indicator">
    <span className="error-indicator-inner">{icon} Ошибка!</span>
    
  </div>;
};

export default ErrorIndicator;
