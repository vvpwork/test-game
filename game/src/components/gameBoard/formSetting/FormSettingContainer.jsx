import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// components
import FormSubmit from './FormSubmit';
import EnterYourName from './EnterYourName';
import SelectGameMode from './SelectGameMode';

//utils
import async from '../../../redux/gameDushboard/asyncOperetion';
import dushboardSelector from '../../../redux/gameDushboard/dushboardSelectors';
import { gameModeUser, addUserInfo } from '../../../redux/gameDushboard/dushboardAction';

// style
const FormStyled = styled.form`
	display: flex;
	width: 90%;
	margin: 0 auto;
	margin-bottom: 10%;
`;

class Form extends Component {
	state = {
		name: ''
	};

	componentDidMount() {
		const { addDushboard, getGameMode, userGameMode } = this.props;
		getGameMode().then((data) => {
			const userMode = data.find((mode) => mode.name === 'Easy');
			addDushboard(userMode);
			userGameMode(userMode);
		});
	}

	handleChange = ({ target: { name, value } }) => {
		const { addDushboard, gameModeArr, userGameMode } = this.props;

		this.setState({
			[name]: value
		});
		const mode = gameModeArr.find((mode) => mode.name === value);
		addDushboard(mode);
		userGameMode(mode);
	};

	handleChangeUser = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		const { changeColor, addUserInfo, playerInfo } = this.props;
		if (playerInfo.name) return
		const { name } = this.state;
		const date = new Date();
		const gameDay = date.getDate();
		const gameMonth = date.getMonth() + 1;
		const startGameTime = date.getTime();
		addUserInfo({ name, day: `${gameDay}.${gameMonth < 10 ? '0' + gameMonth : gameMonth}`, start: startGameTime });
		changeColor();
	};

	render() {
		const { name } = this.state;
		const { gameModeArr, messege } = this.props;
		return (
			<FormStyled onSubmit={this.handleSubmit}>
				<SelectGameMode arr={gameModeArr} selectChange={this.handleChange} />
				<EnterYourName inputValue={name} inputChange={this.handleChangeUser} />
				<FormSubmit value={messege.length > 1 ? 'play again' : 'play'} />
			</FormStyled>
		);
	}
}

const mapStateToProps = (state) => ({
	gameModeArr: dushboardSelector.gameMode(state),
	gameDushboardArr: dushboardSelector.dushboardArr(state),
	messege: dushboardSelector.messege(state),
	playerInfo: dushboardSelector.player(state)
});

const mapDispatchToProps = {
	addDushboard: async.userDushboard,
	getGameMode: async.getGameSettings,
	changeColor: async.changeColorSquare,
	userGameMode: gameModeUser,
	addUserInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
