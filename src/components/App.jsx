/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

// component

import GameBoard from './gameBoard/GameBoard';
import WinnerBoard from './winnerBoard/WinnerBoard';

const GameWrapper = styled.div`
	display: flex;
	margin:0 auto;
	margin-top:50px;
	width: 95%;
	justify-content: center;
	padding: 50px 0px 100px 0px;
	border: 4px solid #EEEEEE;
	@media (max-width: 975px){
		flex-wrap: wrap;
		width: 100%;
		border: none;
	}
`;



const App = () => {
	return (
		<GameWrapper>
			<GameBoard />
			<WinnerBoard />
		</GameWrapper>
	);
};

export default App;
