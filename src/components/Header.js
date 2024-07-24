import React from 'react';
import profilePicture from '../profile-character.png';

function Header() {
    return (
        <header>
            <div className="header-container">
                <img src={profilePicture} alt="프로필 사진" className="profile-picture"/>
                <div className="header-text">
                    <h1>harry.chang</h1>
                    <p>연락처: 010-1234-5678</p>
                    <p>이메일: harry.chang@example.com</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
