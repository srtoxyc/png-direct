import { useState, useEffect } from 'react';
import '../styles/BizumPage.css'

import AccountCard from './AccountCard.jsx'

function BizumPage({ session, accounts, setAccount }) {
    const [currentAccount, setCurrentAccount] = useState(null);

    return (
        <div className={`start-page`}>
            <ul className="start-accounts">
                {accounts != null ? accounts.map((account) => (
                    <AccountCard session={session} setAccount={setAccount} account={account} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} />
                )) : <div className="loading">Loading...</div>}
            </ul>
        </div>
    );
};

export default BizumPage;
