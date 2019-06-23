import {
	Add,
	successGameSettings,
	requestGameSattings,
	Error,
	changeColor,
	computerIncrement,
	clearResult,
	requestWinnerAdd,
	successWinnerAdd,
	requestGetAllWinners,
	successAllWinners
} from './dushboardAction';
import select from './dushboardSelectors';
import utils from '../../utils/axios';

const userDushboard = (gameMode) => (dispatch, getState) => {
	let newDushboard = [];
	for (let i = 0; i < gameMode.field; i++) {
		newDushboard.push({
			id: i,
			color: 'white',
			isChange: 0
		});
	}

	dispatch(Add(newDushboard));
};

const getGameSettings = () => (dispatch) => {
	dispatch(requestGameSattings());
	return utils
		.getGameMode()
		.then(({ data }) => {
			dispatch(successGameSettings(data));
			return data;
		})
		.catch((error) => dispatch(Error(error)));
};

const changeColorSquare = () => (dispatch, getState) => {
	const interval = (delay, action) => {
		const timer = setTimeout(function go() {
			const userResult = select.userSquare(getState());
			const compResult = select.computerSquare(getState());
			const winnerMode = Math.floor(select.dushboardArr(getState()).length / 2);
			if (userResult > winnerMode) return winneraction(true);
			if (compResult > winnerMode) return winneraction(false);
			action();
			setTimeout(() => go(), delay);
		}, delay);
		return timer;
	};

	function winneraction(result) {
		const player = select.player(getState());
		const mode = select.userGameMode(getState());
		const finish = new Date().getTime();
		let resultTime = `${Math.floor((finish - player.start) / 1000)}sec`;
		let winner;
		result
			? (winner = { ...player, ...{ finish: finish, result: resultTime, mode: mode.name } })
			: (winner = { ...player, ...{ name: 'Computer AI', finish: finish, result: resultTime, mode: mode.name } });

		dispatch(requestWinnerAdd());
		utils
			.addWinner(winner)
			.then((data) => dispatch(successWinnerAdd(data)))
			.then(() => dispatch(clearResult()))
			.catch((error) => dispatch(Error(error)));
	}

	function action() {
		const arr = select.dushboardArr(getState());
		const redSquare = arr.filter((el) => el.color === 'red');
		dispatch(computerIncrement(redSquare.length + 1));
		const changeArr = arr.filter((element) => element.color === 'white');
		let rand = Math.floor(Math.random() * changeArr.length);
		let id = !changeArr.length ? null : changeArr[rand].id;
		dispatch(changeColor(id));
	}
	const delay = select.userGameMode(getState()).delay;
	interval(delay, action);
};

const winnerAdd = (winner) => (dispatch) => {
	dispatch(requestWinnerAdd());
	utils
		.addWinner(winner)
		.then(({ data }) => dispatch(successWinnerAdd(data)))
		.catch((error) => dispatch(Error(error)));
};

const getAllWinners = () => (dispatch) => {
	dispatch(requestGetAllWinners());
	return utils
		.getAllWinners()
		.then(({ data }) => dispatch(successAllWinners(data)))
		.catch((error) => dispatch(Error(error)));
};

export default { userDushboard, getGameSettings, changeColorSquare, winnerAdd, getAllWinners };
