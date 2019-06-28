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
	width: ${(props) => Math.sqrt(props.gameMode.field) * 50}px;
	grid-template-columns: repeat(${(props) => Math.sqrt(props.gameMode.field)}, 1fr);
	@media (max-width: 640px){
		width: ${props=> Math.sqrt(props.gameMode.field)* 45}px
	}
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
			<Container {...this.props}>
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
	dushboardArr: select.dushboardArr(state),
	gameMode: select.userGameMode(state)
});

const mapDispatchToProps = {
	userColorDispatch: userColor,
	userIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Dushboard);
