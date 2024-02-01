import { useState, useEffect } from 'react';
import '../styles/StartPage.css'

import AccountCard from './AccountCard.jsx'

function StartPage({ login, session, accounts, section, setAccount }) {

    return (
        <div className={`start-page ${section === 'start' ? 'show' : 'hide'}`}>
            <ul className="start-accounts">
                {accounts != null ? accounts.map((account) => (
                    <AccountCard setAccount={setAccount} account={account} />
                )) : <div className="loading">Loading...</div>}
            </ul>
        </div>
    );
};

export default StartPage;
