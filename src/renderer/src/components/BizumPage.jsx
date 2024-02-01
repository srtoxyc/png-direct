import { useState, useEffect } from 'react';
import '../styles/BizumPage.css'

function BizumPage({ session, account, section }) {
    return (
        <div className={`bizum-page ${section === 'bizum' ? 'show' : 'hide'}`}>
        </div>
    );
};

export default BizumPage;
