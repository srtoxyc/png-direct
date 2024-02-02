import { useState, useEffect } from 'react';
import '../styles/Dashboard.css'

import BizumPage from './BizumPage.jsx'

import logo from '../assets/img/icon.png';

import { FaRegUser } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";

function Dashboard({ login, session, accounts }) {
    const [account, setAccount]             = useState(null);
 
    return (
        <div className={`dashboard ${login ? 'show' : 'hide'}`}>
            <nav className="dashboard-nav">
                <img className="dashboard-logo" src={logo} />
                <div className="dashboard-info-box">
                    <div className="dashboard-user-box">
                        <FaRegUser className="dashboard-user-icon" />
                        <div className="dashboard-user-info">
                            <h3 className="dashboard-user-name">{session['username']}</h3>
                            <h3 className="dashboard-user-email">{session['email']}</h3>
                        </div>
                    </div>
                    <div className="dashboard-account-box">
                        {account != null ? <MdAccountBalanceWallet className="dashboard-account-icon" /> : <div/>}
                        <div className="dashboard-account-info">
                            <h3 className="dashboard-account-num">{account != null ? account['accountNum'] : ''}</h3>
                            <h3 className="dashboard-account-phone">{account != null ? account['phoneNumber'] : ''}</h3>
                        </div>
                    </div>
                    <div className="dashboard-money-box">
                        {account != null ? <GiTwoCoins className="dashboard-money-icon" /> : <div/>}
                        <h3 className="dashboard-money-amount">{account != null ? account['money'] + " €" : ''}</h3>
                    </div>
                </div>
                <div className="logout-button">
                    <h3 className="logout-button-text">Log out</h3>
                </div>
            </nav>
            <section className="dashboard-content">
                <BizumPage session={session} accounts={accounts} setAccount={setAccount} />
            </section>
        </div>
    );
};

export default Dashboard;
