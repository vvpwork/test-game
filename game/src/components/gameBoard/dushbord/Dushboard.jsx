import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import select from '../../../redux/gameDushboard/dushboardSelectors';
import { userColor, userIncrement } from '../../../redux/gameDushboard/dushboardAction';

import Square from './Square.jsx';

// style

const Container = styled.div`
	margin: 0 auto;
	display: grid;
	width: 250px;
	grid-template-columns: repeat(5, 1fr);
	
`;

class Dushboard extends Component {
	randomColor = () => {};

	handleClick = ({ target }) => {
		const { userColorDispatch, userIncrement } = this.props;
		if (target.dataset.change > 0) {
			userColorDispatch(+target.id);
			userIncrement();
		}
	};

	render() {
		const { dushboardArr } = this.props;
		return (
			<Container>
				{dushboardArr.map((square) => (
					<Square
						id={square.id}
						key={square.id}
						color={square.color}
						isChange={square.isChange}
						userClick={(ev) => this.handleClick(ev)}
					/>
				))}
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	dushboardArr: select.dushboardArr(state)
});

const mapDispatchToProps = {
	userColorDispatch: userColor,
	userIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Dushboard);
