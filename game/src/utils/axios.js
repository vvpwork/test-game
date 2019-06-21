import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:8080/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const addUser = async (user) => {
	try {
		const response = await axios.post('/winner', user);
		return response.data;
	} catch (error) {
		return error;
	}
};

const getGameMode = () => axios.get('game-settings');


export default {getGameMode, addUser};