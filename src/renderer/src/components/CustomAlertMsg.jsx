import React, { useState } from 'react';
import '../styles/CustomAlert.css'

const CustomAlertMsg = ({ title, button1Text, buttonOnClick }) => {
	return (
		<div className="alert-box">
			<div className="alert">
				<h2>{title}</h2>
				<div className="alert-buttons">
					<button onClick={buttonOnClick}>{button1Text}</button>
				</div>
			</div>
		</div>
	);
};

export default CustomAlertMsg;