import React, { useState, useEffect } from 'react';
import '../styles/App.css'

import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'

function App() {
    const [isLoggedIn, setIsLoggedIn]       = useState(false);
    const [session, setSession]             = useState(null);
    const [accounts, setAccounts]           = useState(null);

    useEffect(() => {
        if(isLoggedIn !== null && isLoggedIn !== false) {
            console.log(isLoggedIn);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if(session !== null) {
            console.log(session);
        }
    }, [session]);

    useEffect(() => {
        if(accounts !== null) {
            console.log(accounts);
        }
    }, [accounts]);

    return (
        <>
            <Login setLogin={setIsLoggedIn} setSession={setSession} setAccounts={setAccounts} />
            {accounts != null ? <Dashboard login={isLoggedIn} session={session} accounts={accounts} /> : <div className="loading">Loading...</div>}
        </>
    );
};

export default App;
