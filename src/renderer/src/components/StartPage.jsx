import { useState, useEffect } from 'react';
import '../styles/StartPage.css'

import AccountCard from './AccountCard.jsx'

function StartPage({ login, session, accounts, section, setAccount }) {
    const [currentAccount, setCurrentAccount] = useState(null);

    return (
        <div className={`start-page ${section === 'start' ? 'show' : 'hide'}`}>
            <ul className="start-accounts">
                {accounts != null ? accounts.map((account) => (
                    <AccountCard session={session} setAccount={setAccount} account={account} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
                )) : <div className="loading">Loading...</div>}
            </ul>
        </div>
    );
};

export default StartPage;
