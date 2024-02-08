import React, { useState } from 'react';
import '../styles/CustomAlert.css'

const CustomAlertAccounts = ({ title, button1Text, button2Text, button1OnClick, button2OnClick, setInput1Value, setInput2Value }) => {
	return (
		<div className="alert-box">
			<div className="alert">
				<h2>{title}</h2>
				<input type="text" placeholder="Phone number" onChange={(e) => setInput1Value(e.target.value)} />
				<input type="password" placeholder="Password" onChange={(e) => setInput2Value(e.target.value)} />
				<div className="alert-buttons">
					<button onClick={button2OnClick}>{button2Text}</button>
					<button onClick={button1OnClick}>{button1Text}</button>
				</div>
			</div>
		</div>
	);
};

export default CustomAlertAccounts;