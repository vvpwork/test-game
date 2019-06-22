import React from 'react';
import styled from 'styled-components'


const Item = styled.li`
    display: flex;
    align-items: center;
    width: 420px;
    height: 60px;
    color: #A1AAAD;
    font-size: 20px;
    background: #CFD8DC;
    margin-bottom: 2px;
    & p{
        margin:0;
        padding: 0 0 0 10px;
    }
    & .winnerName{
        width: 40%;
        margin-right: 30px;
    }
    
`


const winnerItem = ({ winner: { name, day, result, mode } }) => (
	<Item>
		<p className="winnerName">{name} </p>
		 <p>mode: {mode} | date:{day} | result: {result}</p>
	</Item>
);

export default winnerItem;
