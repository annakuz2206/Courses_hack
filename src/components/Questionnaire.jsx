import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questionnaire.css';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    hasTeam: false,
    about: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные анкеты:', formData);
    alert('Анкета отправлена!');
  };

  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">Давай заполним анкету!</h1>
      
      <form onSubmit={handleSubmit} className="questionnaire-form">
        {/* Имя */}
        <div className="form-group">
          <label className="form-label">Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
            className="form-input"
            required
          />
        </div>
        
        {/* Роль в команде */}
        <div className="form-group">
          <label className="form-label">Роль в команде</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Выберите роль</option>
            <option value="frontend">Frontend-разработчик</option>
            <option value="backend">Backend-разработчик</option>
            <option value="designer">Дизайнер</option>
            <option value="pm">Product-менеджер</option>
          </select>
        </div>
        
        {/* Есть команда */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="hasTeam"
              checked={formData.hasTeam}
              onChange={handleChange}
              className="checkbox-input"
            />
            <span className="checkbox-text">Есть команда</span>
          </label>
        </div>
        
        {/* Описание */}
        <div className="form-group">
          <label className="form-label">Описание</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Расскажите о себе, навыках и опыте..."
            className="form-textarea"
            rows="4"
            required
          />
        </div>
        
        {/* Кнопка */}
        <div className="buttons-group">
          <button type="submit" className="questionnaire-submit-btn">
            Дальше
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;