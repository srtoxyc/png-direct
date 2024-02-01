import { useState, useEffect } from 'react';
import '../styles/AccountCard.css'

function AccountCard({account, setAccount}) {
    const [currentAccount, setCurrentAccount] = useState(null);

    async function fetchAccount() {
        try {
            const res = await fetch(`http://localhost:8080/account/get?username=${username}&password=${password}&number=${session['nTelefono']}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de cuentas');
            }
    
            const result = await res.json();
            if(result != null) {
                setAccount(result);
                setCurrentAccount(result);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div onClick={() => fetchAccount()} className={`account-card`}>
            <div active={account != null ? false : true} className="account-mark"/>
            <div className="account-info">
                <h3 className="account-number">{account != null ? account['accountNum'] : ''}</h3>
                <h3 className="account-phone">{account != null ? account['phoneNumber'] : ''}</h3>
            </div>
        </div>
    );
};

export default AccountCard;
