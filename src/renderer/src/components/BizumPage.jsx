import { useState, useEffect } from 'react';
import '../styles/BizumPage.css'

import AccountCard from './AccountCard.jsx'

function BizumPage({ session, accounts, account, setAccount }) {
    const [currentAccount, setCurrentAccount]   = useState(null);
    const [password, setPassword]               = useState(null);
    const [receptorPhone, setReceptorPhone]     = useState(null);
    const [money, setMoney]                     = useState(null);

    const [stateMSG, setStateMSG]               = useState(null);
    const [stateController, setStateController] = useState(null);

    useEffect(() => { console.log(receptorPhone); }, [receptorPhone]);

    async function fetchBizum() {
        try {
            const res = await fetch(`http://localhost:8080/deposit?username=${session['username']}&password=${password}&emisor=${account['phoneNumber']}&receptor=${receptorPhone}&money=${money}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de bizum.');
            }
    
            const result = await res.text();
            fetchAccount();
            
            switch(result) {
                case 0:
                    setStateMSG('Bizum sent successfully.');
                    break;
                case -7:
                    setStateMSG('We are facing some problems. Try again later.');
                    break;
                case -9:
                    setStateMSG('Wrong phone number.');
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchAccount() {
        try {
            const res = await fetch(`http://localhost:8080/account/get?username=${session['username']}&password=${password}&number=${account['phoneNumber']}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de cuenta.');
            }
            
            try {
                const result = await res.json();
                setAccount(result);
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    }

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
                        <input onChange={(e) => {setReceptorPhone(e.target.value)}} type="text" required={true} placeholder="Phone Number" />
                    </div>
                    <div className={`bizum-input-box bizum-amount`}>
                        <input onChange={(e) => {setMoney(e.target.value)}} type="text" required={true} placeholder="Money" />
                    </div>
                    <div className="bizum-input-box bizum-password">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" required={true} placeholder="Password" />
                    </div>
                </form>
                <div onClick={() => fetchBizum()} className="bizum-button">
                    <h3 className="bizum-button-text">Send Bizum</h3>
                </div>
                <h4 className={`state-text`}>{stateMSG != null ? stateMSG : "eeeeeeeeeeeeeeeee"}</h4>
            </div>
        </div>
    );
};

export default BizumPage;
