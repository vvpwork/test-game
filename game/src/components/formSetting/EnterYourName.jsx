import React from 'react';

const inputName = ({ inputValue, inputChange }) => (
	<input
		value={inputValue}
		name="userName"
		value={inputValue}
		onChange={inputChange}
		placeholder="Enter your name"
		required
	/>
);

export default inputName;
