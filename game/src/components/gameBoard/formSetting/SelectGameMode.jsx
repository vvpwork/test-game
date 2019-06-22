import React from 'react';
import styled from 'styled-components';

// styled
import downIcon from '../../../assets/images/down.png'
const SelectStyle = styled.select`
	position:relative;
	border: none;
	width: 210px;
	height: 50px;
	border-radius: 10px;
	background: #CFD8DC;
	appearance: none;
	padding: 5px 15px;
	font-size: 16px;
	color: #55676f;
	margin-right: 15px;
	&:hover, :focus{
		outline: none;
		border: none;
	}
	
	&:hover{
		box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
		cursor: pointer;
	}
	
`;

const StyleOptions = styled.option`
	outline: none;
	border: none;
	
	&:focus,
	:hover {
		outline: none;
		border: none;
		cursor: pointer;
	}

	i {
		color: red;
	}
`;

const WrapperSelect = styled.div`
	position:relative;
	display:inline-block;
	&::after{
		content:"";
		position: absolute;
		display: inline-block;
		right:29px;
		width: 15px;
		height:15px;
		background: url(${downIcon}) no-repeat center;
		background-size: contain;
		bottom: 18px;
		pointer-events: none;

	}
`

const selectGameMode = ({ arr = [], value, selectChange }) => (
	<WrapperSelect>
	<SelectStyle placeholder="game mode" value={value} onChange={selectChange} name="gameMode">
		<option value="" key={'start_select'} disabled defaultValue>
			Pick game mode
		</option>
		{arr.map((set) => (
			<StyleOptions key={set.name} value={set.name}>
				{set.name}
			</StyleOptions>
		))}
	</SelectStyle>
	</WrapperSelect>
);

export default selectGameMode;
