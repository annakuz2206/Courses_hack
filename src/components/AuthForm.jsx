import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = () => {
  const [botCode, setBotCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Код от бота:', botCode);
    navigate('/questionnaire');
  };

  return (
    <div className="auth-container">
      <h1 className="title">Вход</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="input-label">Kод от бота</label>
          <input
            type="text"
            value={botCode}
            onChange={(e) => setBotCode(e.target.value)}
            placeholder="Введите код"
            className="input"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Войти
        </button>
        
        <div className="telegram-link">
          <a 
            href="https://t.me/very_cool_hack_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="telegram-btn"
          >
            t.me/very_cool_hack_bot
          </a>
        </div>
    
        <div className="auth-switch">
        </div>
      </form>
    </div>
  );
};

export default AuthForm;