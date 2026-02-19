import React, { useState } from 'react';
import '../styles/Main.css';

const MainPage = () => {
  const [step, setStep] = useState('initial'); // initial, question, yes
  const [noBtnPosition, setNoBtnPosition] = useState({ top: 'auto', left: 'auto', position: 'static' });

  const handleNoHover = () => {
    // Generate random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    setNoBtnPosition({
      position: 'fixed',
      top: `${y}px`,
      left: `${x}px`,
    });
  };

  const content = () => {
    switch(step) {
      case 'initial':
        return (
          <>
            <h1 className="question-text">I Have a Question to Ask!!!</h1>
            <button className="btn btn-primary" onClick={() => setStep('question')}>
              Click to find out
            </button>
          </>
        );
      case 'question':
        return (
          <>
            <h1 className="question-text">Will you marry me? 💍</h1>
            <div className="buttons-container" style={{position: 'relative', height: '100px'}}>
              <button className="btn btn-yes" onClick={() => setStep('yes')}>
                YES! 😍
              </button>
              <button 
                className="btn btn-no" 
                style={noBtnPosition}
                onMouseEnter={handleNoHover}
              >
                No 😢
              </button>
            </div>
          </>
        );
      case 'yes':
        return (
          <>
             <h1 className="question-text">I Knew It! 🎉💖</h1>
             <p>Unless you clicked by mistake... but no take backs! 😉</p>
             <img src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif" alt="Celebration" style={{maxWidth: '100%', borderRadius: '15px'}} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      <div className="heart-bg"></div>
      
      <div className="question-card">
        {content()}
      </div>


    </div>
  );
};

export default MainPage;
