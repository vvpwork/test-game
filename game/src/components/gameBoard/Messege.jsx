import React from 'react';
import styled from 'styled-components';

const MessegeStyled = styled.div`
	width: 60%;
	margin: 0 auto;
	margin-bottom: 10%;
	color: #a1a1a1;
	font-size: 18px;
	text-align: center;
	min-height: 20px;
`;

const Messege = ({ value }) => <MessegeStyled>{value} </MessegeStyled>;

export default Messege;
