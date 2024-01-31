import { useState, useEffect } from 'react';
import '../styles/AccountCard.css'

function AccountCard({account}) {
    useEffect(() => {console.log(account)}, [account]);
    return (
        <div className={`account-card`}>
            <div className="account-mark"/>
            <div className="account-info">
                <h3 className="account-number">{account != null ? account['accountNum'] : ''}</h3>
                <h3 className="account-phone">{account != null ? account['phoneNumber'] : ''}</h3>
            </div>
        </div>
    );
};

export default AccountCard;
