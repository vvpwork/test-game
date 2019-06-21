import React from 'react';

const selectGameMode = ({ arr = [], value, selectChange }) => (
	<select value={value} onChange={selectChange} name="gameMode">
		{arr.map((set) => <option key={set.name} value={set.name}>{set.name}</option>)}
	</select>
);

export default selectGameMode;
