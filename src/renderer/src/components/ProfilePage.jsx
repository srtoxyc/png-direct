import { useState, useEffect } from 'react';
import '../styles/ProfilePage.css'

function ProfilePage({ login, session, accounts, section }) {
    return (
        <div className={`profile-page ${section === 'profile' ? 'show' : 'hide'}`}>
        </div>
    );
};

export default ProfilePage;
