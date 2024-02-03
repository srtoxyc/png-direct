import { useState, useEffect } from 'react';
import '../styles/AccountCard.css'

import CustomAlert from './CustomAlert.jsx'

function AccountCard({session, account, setAccount, currentAccount, setCurrentAccount}) {
    const [showAlert, setShowAlert]         = useState(false);
    const [inputValue, setInputValue]       = useState('');
    
    function handleConfirmClick() {
        if(inputValue !== '') {
            fetchAccount();
        } else {
            console.log('No password entered');
        }
    }

    function handleCancelClick() {
        setShowAlert(false);
    }

    async function fetchAccount() {
        try {
            const res = await fetch(`http://localhost:8080/account/get?username=${session['username']}&password=${inputValue}&number=${account['phoneNumber']}`, {
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
                setCurrentAccount(result['accountNum']);
                setShowAlert(false);
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <div onClick={() => setShowAlert(true)} active={currentAccount === account['accountNum'] ? "true" : "false"} className={`account-card`}>
            <div className="account-mark"/>
            <div className="account-info">
                <h3 className="account-number">{account != null ? account['accountNum'] : ''}</h3>
                <h3 className="account-phone">{account != null ? account['phoneNumber'] : ''}</h3>
            </div>
        </div>
        {showAlert ? <CustomAlert
                title="Enter your password"
                button1Text="Confirm"
                button2Text="Cancel"
                button1OnClick={handleConfirmClick}
                button2OnClick={handleCancelClick}
                setInputValue={setInputValue}
            /> : <div/>}
        </>

    );
};

export default AccountCard;
