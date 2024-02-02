import { useState, useEffect } from 'react';
import '../styles/Dashboard.css'

import BizumPage from './BizumPage.jsx'

import { FaRegUser } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";

function Dashboard({ login, session, accounts }) {
    const [account, setAccount] = useState(null);

    return (
        <div className={`dashboard ${login ? 'show' : 'hide'}`}>
            <nav className="dashboard-nav">
                <div className="dashboard-nav-logo">
                    <img className="dashboard-logo" />
                </div>
                <div className="dashboard-user-box">
                    <FaRegUser className="dashboard-user-icon" />
                    <div className="dashboard-user-info">
                        <h3 className="dashboard-user-name">{session['username']}</h3>
                        <h3 className="dashboard-user-email">{session['email']}</h3>
                    </div>
                </div>
                <div className="dashboard-account-box">
                    <MdAccountBalanceWallet className="dashboard-account-icon" />
                    <div className="dashboard-account-info">
                        <h3 className="dashboard-account-num">{account != null ? account['accountNum'] : ''}</h3>
                        <h3 className="dashboard-account-phone">{account != null ? account['phoneNumber'] : ''}</h3>
                    </div>
                </div>
                <div className="dashboard-money-box">
                    <GiTwoCoins className="dashboard-money-icon" />
                    <h3 className="dashboard-money-amount">{account != null ? account['money'] : ''}</h3>
                </div>
            </nav>
            <section className="dashboard-content">
                <BizumPage session={session} accounts={accounts} setAccount={setAccount} />
            </section>
        </div>
    );
};

export default Dashboard;
