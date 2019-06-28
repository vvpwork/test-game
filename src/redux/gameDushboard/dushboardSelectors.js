const gameMode = (state) => state.root.gameMode.gameModeArr;
const dushboardArr = (state) => state.root.userDushboard;
const userSquare = (state) => state.root.result.user;
const computerSquare = (state) => state.root.result.computer;
const userGameMode = (state) => state.root.gameMode.userGameMode;
const winners = (state) => state.root.winners;
const player = (state) => state.root.playerInfo;
const messege = (state) => state.root.messege;

export default { messege, gameMode, dushboardArr, userSquare, computerSquare, userGameMode, winners, player };
