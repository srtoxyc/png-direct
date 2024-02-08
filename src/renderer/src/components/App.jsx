import React, { useState, useEffect } from 'react';
import '../styles/App.css'

import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
    const [isLoggedIn, setIsLoggedIn]       = useState(false);
    const [session, setSession]             = useState(null);
    const [accounts, setAccounts]           = useState(null);

    return (
        <>
            {!isLoggedIn ? <Login setLogin={setIsLoggedIn} setSession={setSession} setAccounts={setAccounts} /> : <div/>}
            {accounts != null ? <Dashboard login={isLoggedIn} setLogin={setIsLoggedIn} session={session} setSession={setSession} accounts={accounts} setAccounts={setAccounts}/> : <div className="loading">Loading...</div>}
        </>
    );
};

export default App;
