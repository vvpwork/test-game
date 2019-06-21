import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import FormSubmit from './FormSubmit';
import EnterYourName from './EnterYourName';
import SelectGameMode from './SelectGameMode';

//utils
import async from '../../redux/gameDushboard/asyncOperetion';
import dushboardSelector from '../../redux/gameDushboard/dushboardSelectors';
class Form extends Component {
	state = {
		gameMode: 'easy'
	};

	componentDidMount() {
		const { addDushboard, getGameMode } = this.props;
		const { gameMode } = this.state;
		getGameMode().then(data=> addDushboard(data.find(mode=> gameMode === mode.name)));
		
	}

	handleChange = ({ target: { name, value } }) => {
		const { addDushboard, gameModeArr } = this.props;

		this.setState({
			[name]: value
		});

		addDushboard(gameModeArr.find((mode) => mode.name === value));
	};

	render() {
		const { gameMode } = this.state;
		const { gameModeArr } = this.props;
		return (
			<form onSubmit={() => {}}>
				<SelectGameMode arr={gameModeArr} value={gameMode} selectChange={this.handleChange} />
				<EnterYourName />
				<FormSubmit />
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	gameModeArr: dushboardSelector.gameMode(state)
});

const mapDispatchToProps = {
	addDushboard: async.userDushboard,
	getGameMode: async.getGameSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
