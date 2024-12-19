import React, { useEffect } from 'react';
import './App.css';
import InvitationImage from './assets/Invitation.jpeg';

function App() {
  // 카카오 SDK 초기화
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('c4633c58972fff3bd0c665fc34215de1');
      console.log('Kakao SDK initialized.');
    }
  }, []);

  // 커스텀 템플릿 공유 함수
  const sendLinkCustom = () => {
    window.Kakao.Link.sendCustom({
      templateId: 115536, // 사용 중인 템플릿 ID로 변경하세요
    });
  };

  return (
    <div className="App">
      <img src={InvitationImage} alt="Invitation" className="centered-image" />
      <button className="kakao-button" onClick={sendLinkCustom}>
        카카오초대장 받기 (Custom)
      </button>
    </div>
  );
}

export default App;
