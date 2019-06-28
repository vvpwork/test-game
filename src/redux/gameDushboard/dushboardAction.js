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

export const changeColor = id=>({
	type: types.CHANGE_COLOR,
	payload: id
})

export const userColor = id =>({
	type: types.USER_COLOR,
	payload: id
})


export const gameModeUser = mode =>({
	type: types.USER_GAME_SETTINGS,
	payload: mode
})

export const userIncrement =() =>({
	type: types.USER_INCREMENT,
})
export const computerIncrement = result=>({
	type: types.COMPUTER_INCREMENT,
	payload: result
})

export const clearResult = ()=>({
	type: types.CLEAR_RESULT
})

export const addUserInfo = obj =>({
	type: types.USER_ADD,
	payload: obj
})

export const requestWinnerAdd = () =>({
	type: types.REQUEST_WINNER_ADD
})
export const successWinnerAdd  = winner =>({
	type: types.SUCCESS_WINNER_ADD,
	payload: winner
})

export const requestGetAllWinners = ()=>({
	type: types.REQUEST_ALL_WINNERS
})
export const successAllWinners = winnersArr=>({
	type: types.SUCCESS_ALL_WINNERS,
	payload: winnersArr

})

