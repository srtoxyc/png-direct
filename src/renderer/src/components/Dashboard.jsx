import { useState, useEffect } from 'react';
import '../styles/Dashboard.css'

import StartPage from './StartPage.jsx'
import ProfilePage from './ProfilePage.jsx'
import BizumPage from './BizumPage'

function Dashboard({ login, session, accounts }) {
    // if(!accounts || !Array.isArray(accounts)) {
    //     return <div className="loading">Loading...</div>
    // }

    const [section, setSection] = useState('profile');

    return (
        <div className={`dashboard ${login ? 'show' : 'hide'}`}>
            <nav className="dashboard-nav">
                <div className="dashboard-nav-logo">
                    <img className="dashboard-logo"></img>
                </div>
                <ul className="dashboard-list">
                    <li onClick={() => setSection('start')} className="dashboard-list-element">
                        <a href="#">Start</a>
                    </li>
                    <li onClick={() => setSection('profile')}  className="dashboard-list-element">
                        <a href="#">Profile</a>
                    </li>
                    <li onClick={() => setSection('bizum')}  className="dashboard-list-element">
                        <a href="#">Bizum</a>
                    </li>
                </ul>
            </nav>
            <section className="dashboard-content">
                <StartPage login={login} session={session} accounts={accounts} section={section} />
                <ProfilePage login={login} session={session} accounts={accounts} section={section} />
                <BizumPage login={login} session={session} accounts={accounts} section={section} />
            </section>
        </div>
    );
};

export default Dashboard;
