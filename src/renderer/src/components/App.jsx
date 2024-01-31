import React, { useState, useEffect } from 'react';

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
            <Dashboard login={isLoggedIn} session={session} accounts={accounts} />
        </>
    );
};

export default App;
