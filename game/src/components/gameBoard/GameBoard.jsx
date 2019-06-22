import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//components
import Form from './formSetting/FormSettingContainer';
import Board from './dushbord/Dushboard';
import Messege from './Message';

import select from '../../redux/gameDushboard/dushboardSelectors';

// style
const GameBoard = styled.div`
	flex: 0 0 50%;
	padding: 0 20px;
	box-sizing: border-box;
	border-right: 2px solid #eeeeee;
`;

class gameBoard extends Component {
	render() {
		const { value } = this.props;
		return (
			<GameBoard>
				<Form />
				<Messege value={value}/>
				<Board />
			</GameBoard>
		);
	}
}

const mapStateToProps = (state) => ({
	value: select.messege(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(gameBoard);
