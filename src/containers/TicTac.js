import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board, Squares} from '../styled/TicTac'

class TicTac extends Component {
  constructor(props){
    super(props)
    this.state = {
      rows: 3,
      gameState:[], 
      win:[], 
      gameOver:false, 
      yourTurn:true, 
      ownMark:'X'
    }
  }

  componentWillMount(){
    //when my component mounts
    let height = window.innerHeight
    let width = window.innerWidth
    let size = Math.min(height, width) * 0.8
    let rows = this.state.rows
    let unit = size / rows

    let coordinates = []
    for(let y = 0; y < rows; y++){
      for(let x = 0; x < rows; x++){
        coordinates.push([x*unit, y*unit])
      }  
    }

    this.setState({
      size,
      rows,
      unit,
      coordinates
    })
  }

  userMove(marker, index){
    console.log('made following moves '+marker+' '+index)
  }

  aiMove(){
    
  }

  turingTest(){

  }

  recordGame(){

  }

  render() {
    let {unit, rows, size, coordinates, gameState, win, gameOver, yourTurn, ownMark} = this.state
    return (
      <div>
        <h2>Tic Tac Home!</h2>
        <Stage width={size} height={size}>
        <Board unit={unit} rows={rows} size={size} />
        
        <Squares
        unit={unit}
        coordinates={coordinates}
        gameState={gameState}
        win={win}
        gameOver={gameOver}
        yourTurn={yourTurn}
        ownMark={ownMark}
        move={this.userMove} />
        </Stage>  
      </div>
    )
  }
}

export default TicTac
