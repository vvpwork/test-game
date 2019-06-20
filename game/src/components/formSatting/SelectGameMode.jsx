import React from 'react';

const selectGameMode = ({ arr = [] }) => <select>{arr.map((set) => <option key={set.name}>{set.name}</option>)}</select>;

export default selectGameMode;
