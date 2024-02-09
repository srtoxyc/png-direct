import { useState, useEffect } from 'react';
import '../styles/BizumPage.css'

import AccountCard from './AccountCard.jsx'
import CustomAlertAccounts from './CustomAlertAccounts.jsx';

function BizumPage({ session, accounts, setAccounts, account, setAccount }) {
    const [currentAccount, setCurrentAccount]   = useState(null);
    const [password, setPassword]               = useState(null);
    const [receptorPhone, setReceptorPhone]     = useState(null);
    const [money, setMoney]                     = useState(null);

    const [stateMSG, setStateMSG]               = useState(null);
    const [stateController, setStateController] = useState(false);
    const [showAlert, setShowAlert]             = useState(false);

    const [inputPhoneValue, setInputPhoneValue] = useState('');
    const [inputPassValue, setInputPassValue]   = useState('');
    
    function handleConfirmClick() {
        if(inputPhoneValue !== '' && inputPassValue !== '') {
            fetchAccountCreation();
        } else if(inputPhoneValue === '') {
            setStateController(false);
            setStateMSG('No phone number entered.');
        } else if(inputPassValue === '') {
            setStateController(false);
            setStateMSG('No password entered.');
        }

        document.querySelector('.state-text').style.visibility = 'visible';

        setTimeout(() => {
            document.querySelector('.state-text').style.visibility = 'hidden';
        }, 4000);
        
        setShowAlert(false);
    }

    function handleCancelClick() {
        setShowAlert(false);
    }

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

            switch(result) {
                case '0':
                case 0:
                    setStateController(true);
                    setStateMSG('Bizum sent successfully.');
                    break;
                case '-7':
                case -7:
                    setStateController(false);
                    setStateMSG('We are facing some problems. Try again later.');
                    break;
                case '-9':
                case -9:
                    setStateController(false);
                    setStateMSG('Wrong phone number.');
                    break;
            }

            fetchAccount();
            
            document.querySelector('.state-text').style.visibility = 'visible';

            setTimeout(() => {
                document.querySelector('.state-text').style.visibility = 'hidden';
            }, 4000);
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
                setStateController(false);
                setStateMSG('Wrong password.');
            }

            document.querySelector('.state-text').style.visibility = 'visible';

            setTimeout(() => {
                document.querySelector('.state-text').style.visibility = 'hidden';
            }, 4000);
        } catch (err) {
            console.log(err);
        }
    }

    async function fetchAccountCreation() {
        await fetchPhoneAddition();
    
        try {
            const res = await fetch(`http://localhost:8080/account/create?username=${session['username']}&password=${inputPassValue}&number=${inputPhoneValue}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la creación de la cuenta.');
            }
    
            try {
                const result = await res.json();
    
                switch(result) {
                    case '-7':
                    case -7:
                        setStateController(false);
                        setStateMSG('We are facing some problems. Try again later.');
                        break;
                    case '-4':
                    case -4:
                        setStateController(false);
                        setStateMSG('Wrong password.');
                        break;
                }
    
                document.querySelector('.state-text').style.visibility = 'visible';
    
                setTimeout(() => {
                    document.querySelector('.state-text').style.visibility = 'hidden';
                }, 4000);
    
                setShowAlert(false);

                await fetchAccounts();
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            setStateController(false);
            setStateMSG('Error creating account.');
            console.log(err);
        }
    }

    async function fetchPhoneAddition() {
        try {
            const res = await fetch(`http://localhost:8080/assignPhoneNumber?username=${session['username']}&password=${inputPassValue}&number=${inputPhoneValue}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la asignación del número de teléfono.');
            }
            
            try {
                const result = await res.json();

                switch(result) {
                    case '-7':
                    case -7:
                        setStateController(false);
                        setStateMSG('We are facing some problems. Try again later.');
                        break;
                }

                document.querySelector('.state-text').style.visibility = 'visible';

                setTimeout(() => {
                    document.querySelector('.state-text').style.visibility = 'hidden';
                }, 4000);
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err);
        }
    }    
    
    async function fetchAccounts() {
        try {
            const res = await fetch(`http://localhost:8080/account/list?username=${session['username']}&password=${inputPassValue}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!res.ok) {
                throw new Error('Error en la solicitud de cuentas.');
            }
    
            try {
                const result = await res.json();
                setAccounts(result['accounts']);
            } catch(err) {
                setAccounts([]);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={`start-page`}>
            <ul className="start-accounts">
                {accounts != null ? accounts.map((account) => (
                    <AccountCard session={session} setAccount={setAccount} account={account} currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} setStateMSG={setStateMSG} setStateController={setStateController} />
                )) : <div className="loading">Loading...</div>}
            </ul>

            <div onClick={() => setShowAlert(true)} className="account-button">
                <h3 className="account-button-text">Create account</h3>
            </div>

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
                <h4 className="state-text" state={stateController ? 'success' : 'error'}>{stateMSG}</h4>
            </div>        
            {showAlert ? <CustomAlertAccounts
                title="Create an account"
                button1Text="Confirm"
                button2Text="Cancel"
                button1OnClick={handleConfirmClick}
                button2OnClick={handleCancelClick}
                setInput1Value={setInputPhoneValue}
                setInput2Value={setInputPassValue}
            /> : <div/>}
        </div>
    );
};

export default BizumPage;
