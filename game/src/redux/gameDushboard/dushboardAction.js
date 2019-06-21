import types from './dushboardActionType';

export const Add = (userDushboard) => ({
	type: types.ADD_DUSHBOARD,
	payload: userDushboard
});

export const Error = (error) => ({
	type: types.Error,
	payload: error
});

export const requestGameSattings = () => ({
	type: types.REQUEST_GAME_SETTINGS
});

export const successGameSettings = (gameMode) => ({
	type: types.SUCCESS_GAME_SETTINGS,
	payload: gameMode
});
