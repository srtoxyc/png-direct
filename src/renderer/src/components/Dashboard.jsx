import { useState, useEffect } from 'react';
import '../styles/Dashboard.css'

function Dashboard({ login, session, accounts }) {

    return (
        <div className={`dashboard ${login ? 'show' : 'hide'}`}>
            <nav className="dashboard-nav">

            </nav>
            <section className="dashboard-content">

            </section>
        </div>
    );
};

export default Dashboard;
