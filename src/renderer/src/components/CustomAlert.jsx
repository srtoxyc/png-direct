import React, { useState } from 'react';
import '../styles/CustomAlert.css'

const CustomAlert = ({ title, button1Text, button2Text, button1OnClick, button2OnClick, setInputValue }) => {
	return (
		<div className="alert">
			<h2>{title}</h2>
			<input type="password" placeholder="Password" onChange={(e) => setInputValue(e.target.value)} />
			<div className="alert-buttons">
				<button onClick={button2OnClick}>{button2Text}</button>
				<button onClick={button1OnClick}>{button1Text}</button>
			</div>
		</div>
	);
};

export default CustomAlert;