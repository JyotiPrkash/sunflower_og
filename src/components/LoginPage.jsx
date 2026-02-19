import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    const cleanName = name.trim().toLowerCase();
    if (cleanName === 'poo' || cleanName === 'prativa') {
      // Success
      setError(false);
      // Playful Greet
      alert(`Hello, my sunshine ${name}! 🌻`);
      navigate('/main');
    } else {
      // Failure
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <span className="sunflower-icon">🌻</span>
        <h2>Welcome to LoveOh</h2>
        <p>Before we begin, what is your beautiful name?</p>
        
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Enter your name..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />
          <button type="submit" className="btn btn-primary">
            Enter 🌻
          </button>
        </form>

        {error && (
          <div className="error-message">
            <p>Meow? I don't know you! 😼</p>
            <img 
              src="https://cataas.com/cat/angry" 
              alt="Uninterested Cat" 
              className="cat-meme"
            />
            <p>Only Poo or Prativa allowed!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
