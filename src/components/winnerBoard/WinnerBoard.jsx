import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import select from '../../redux/gameDushboard/dushboardSelectors'
import Item from './WinnerItem'

const Container = styled.div`
    flex: 0 0 50%;
    & h2{
        margin: 5px 0 50px 40px;
        color: #888888;
    }
    & ul{
        list-style: none;
        margin-left: 40px;
        padding: 0;
        
    }

    @media (max-width: 975px){
        flex: 0 0 100%;
        & ul{
            width: 100%;
            margin: 0;
        }
        & h2{
            text-align: center;
            margin: 0 0 30px 0;
        }
    }
`

class WinnerBoard extends Component{
    

    componentDidMount(){
        
    }
    
    
    render(){
        const {winners} = this.props
        return(
            <Container>
            <h2>Leader Board</h2>
            <ul>
                {winners.map(winner=><Item key={winner.start+winner.name} winner ={winner} /> )}
            </ul>

        </Container>
        )
        

    }
}
const mapStateToProps = (state) => ({
    winners: select.winners(state)
})

const mapDispatchToProps ={

}

export default connect(mapStateToProps, mapDispatchToProps)(WinnerBoard);