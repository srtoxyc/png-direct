import { useState, useEffect } from 'react';
import '../styles/ProfilePage.css'

function ProfilePage({ session, section }) {
    async function fetchModifyUsername() {
        try {
            const res = await fetch(`http://localhost:8080/update/username?old=${session['username']}&new=${'a'}&password=${'admin'}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de registro');
            }
    
            const result = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchModifyEmail() {
        try {
            const res = await fetch(`http://localhost:8080/update/email?username=${session['username']}&email=${'e'}&password=${'admin'}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de registro');
            }
    
            const result = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchModifyPassword() {
        try {
            const res = await fetch(`http://localhost:8080/update/password?username=${session['username']}&old=${'admin'}&new=${'o'}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de registro');
            }
    
            const result = await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={`profile-page ${section === 'profile' ? 'show' : 'hide'}`}>
            <ul className="profile-button-list">
                <li className="profile-button profile-button-username" onClick={() => fetchModifyUsername()}>
                    <h3 className="profile-button-text">Modify username</h3>
                </li>
                <li className="profile-button profile-button-email" onClick={() => fetchModifyEmail()}>
                    <h3 className="profile-button-text">Modify email</h3>
                </li>
                <li className="profile-button profile-button-password" onClick={() => fetchModifyPassword()}>
                    <h3 className="profile-button-text">Modify password</h3>
                </li>
            </ul>
        </div>
    );
};

export default ProfilePage;
