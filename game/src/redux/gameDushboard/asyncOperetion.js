import { Add, successGameSettings, requestGameSattings, Error } from './dushboardAction';
import utils from '../../utils/axios';

const userDushboard = (gameMode) => (dispatch, getState) => {
	let newDushboard = [];
	for (let i = 0; i <= gameMode.field; i++) {
		newDushboard.push({
			id: i,
			color: null,
			isChange: true
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

export default { userDushboard, getGameSettings };
