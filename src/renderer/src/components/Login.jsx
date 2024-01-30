import { useState, useEffect } from 'react';
import '../styles/Login.css'

function Login({ setLogin, setSession, setAccounts }) {
    const [isLogin, setIsLogin]     = useState(true);
    const [username, setUsername]   = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    function fetchLogin() {
        fetch(`http://localhost:8080/login?user=${username}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((result) => {
                if(result) {
                    setLogin(result);
                    fetchSession();
                    fetchAccounts();
                }
            })
            .catch((err) => console.log(err));
    }

    function fetchSignUp() {
        fetch(`http://localhost:8080/signup?username=${username}&email=${email}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    }

    function fetchSession() {
        fetch(`http://localhost:8080/session?user=${username}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((result) => setSession(result))
            .catch((err) => console.log(err));
    }

    function fetchAccounts() {
        fetch(`http://localhost:8080/account/list?username=${username}&password=${password}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((result) => setAccounts(result))
            .catch((err) => console.log(err));
    }

    return (
        <div className="login">
            <div className="login-box">
                <h2 className="login-title">{isLogin ? 'LOGIN' : 'SIGN UP'}</h2>
                <form className="login-form">
                    <div className="login-input-box login-username">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" required={true} placeholder={!isLogin ? 'Username' : 'User'} />
                    </div>
                    <div className={`login-input-box login-email ${!isLogin ? 'show' : 'hide'}`}>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" required={false} placeholder="Email" />
                    </div>
                    <div className="login-input-box login-password">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" required={true} placeholder="Password" />
                    </div>
                </form>
                <h4 className="toggle-login" onClick={() => setIsLogin(!isLogin)}>{!isLogin ? 'Log In' : 'Sign Up'}</h4>
                <div className="login-button" onClick={() => !isLogin ? fetchSignUp() : fetchLogin()}>
                    <h3 className="login-button-text">{isLogin ? 'Login' : 'Sign Up'}</h3>
                </div>
            </div>
        </div>
    );
};

export default Login;
