import React, { useEffect } from 'react';
import '../../App.css';
import InvitationImage from '../../assets/SeosInvitaion.png';
import { Helmet } from "react-helmet";

function SeosInvitaion() {
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
            templateId: 115536,
        });
    };

    return (
        <div className="App" style={{ backgroundColor: '#001707' }}>
            <Helmet>
                <title>대학생 둘, 직장인 하나의 크리스마스 파티에 초대합니다.</title>
                <meta name="description" content="서스의 특별한 집들이 초대 페이지입니다." />
                <meta property="og:image" content={InvitationImage}  />
            </Helmet>
            <img src={InvitationImage} alt="Invitation" className="centered-image" />
            <button className="kakao-button" onClick={sendLinkCustom}>
                카카오초대장 받기
            </button>
        </div>
    );
}

export default SeosInvitaion;
