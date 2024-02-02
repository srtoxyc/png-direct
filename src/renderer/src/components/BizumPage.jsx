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
            <div className="bizum-form-box">
                <h2 className="bizum-title">BIZUM</h2>
                <form className="bizum-form">
                    <div className="bizum-input-box bizum-phone">
                        <input type="text" required={true} placeholder="Phone Number" />
                    </div>
                    <div className={`bizum-input-box bizum-amount`}>
                        <input type="text" required={true} placeholder="Money" />
                    </div>
                    <div className="bizum-input-box bizum-password">
                        <input type="password" required={true} placeholder="Password" />
                    </div>
                </form>
                <div className="bizum-button">
                    <h3 className="bizum-button-text">Send Bizum</h3>
                </div>
            </div>

        </div>
    );
};

export default BizumPage;
