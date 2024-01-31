import { useState, useEffect } from 'react';
import '../styles/BizumPage.css'

function BizumPage({ login, session, accounts, section }) {
    return (
        <div className={`bizum-page ${section === 'bizum' ? 'show' : 'hide'}`}>
        </div>
    );
};

export default BizumPage;
