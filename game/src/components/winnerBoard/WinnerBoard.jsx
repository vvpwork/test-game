import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import select from '../../redux/gameDushboard/dushboardSelectors'
import async from '../../redux/gameDushboard/asyncOperetion'
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
`

class WinnerBoard extends Component{
    

    componentDidMount(){
        const { Allwinners} = this.props
        Allwinners()
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

const mapDispatchToProps = dispatch =>{
    return {
        Allwinners:()=> dispatch( async.getAllWinners())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WinnerBoard);