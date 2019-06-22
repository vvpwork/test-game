import React from 'react';

// style
import s from './square.module.css';

const Square = ({  color, userClick, isChange, id }) => (
	<div id ={id}  onClick={userClick}  className={s.container} data-change={isChange} style={{ background: `${color}` }}>
		{' '}
	</div>
);

export default Square;
