import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:8080/';
axios.defaults.headers['Content-Type'] = 'application/json';

const addWinner = async (user) => {
	try {
		const response = await axios.post('/winners', user);
		return response.data;
	} catch (error) {
		return error;
	}
};


const getAllWinners =  () =>axios.get('/winners')

		 
		
	


const getGameMode = () => axios.get('game-settings');


export default {getGameMode, addWinner, getAllWinners};