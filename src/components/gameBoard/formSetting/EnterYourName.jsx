import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
	box-sizing: border-box;
	width: 210px;
	border: none;
	padding: 5px 15px;
	background: #F3F3F3;
	color: #55676f;
	font-size: 16px;
	border-radius: 10px;
	margin-right: 20px;
	&:hover{
		box-shadow: 0 2px 10px rgba(0,0,0,0.2);
		
	}
	&:focus{
		outline: none;
	}
	@media (max-width: 975px){
		display: block;
		height: 50px;
		margin: 0 auto;
	}
`


const inputName = ({ inputValue, inputChange }) => (
	<StyledInput
		value={inputValue}
		name="name"
		onChange={inputChange}
		placeholder="Enter your name"
		required
	/>
);

export default inputName;
