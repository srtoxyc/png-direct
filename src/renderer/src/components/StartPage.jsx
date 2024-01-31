import { useState, useEffect } from 'react';
import '../styles/StartPage.css'

import AccountCard from './AccountCard.jsx'

function StartPage({ login, session, accounts, section }) {
    return (
        <div className={`start-page ${section === 'start' ? 'show' : 'hide'}`}>
            <ul className="start-accounts">
                {accounts != null ? accounts.map((account, index) => (
                    <AccountCard account={account[0]} />
                )) : <div className="loading">Loading...</div>}
            </ul>
        </div>
    );
};

export default StartPage;
