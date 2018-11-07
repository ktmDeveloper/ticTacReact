import React from 'react';
import {Layer, Line, Text} from 'react-konva'


//Line and Layer is component from react konva. 
//Check the official docs for more details
export const Board = ({unit, size, rows}) => {
   let grid = []
   let stroke = 'grey'
   let strokeWidth = 5

   for(let i = 1; i < rows; i++){
    let position = unit * i
    grid.push(<Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'v'} //key is specification of react itself

    />) 
    grid.push(<Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'h'}

    />)
   }
    return (
       <Layer>
           {grid}
       </Layer>
   ) 
}


export const Squares = ({unit, coordinates, gameState, win, gameOver, yourTurn, ownMark, move}) => {
        let squares = coordinates.map((pos, idx) => {
            let makeMove = move
            let mark = gameState[idx]
            let fill = 'black'
            if(win && win.includes(idx)){
                fill = 'lightgreen'
            }
            if(gameOver || !yourTurn || mark){
                makeMove = () => console.log('nope!')
            }
            return(
                <Text 
                key={idx}
                index={idx}
                x={pos[0]}
                y={pos[1]}
                fontSize={unit}
                width={unit}
                text={mark}
                fill={fill}
                fontFamily={'Helvetica'}
                align={'center'}
                onClick={(e) => {
                    let idx = e.target.index
                    makeMove(ownMark, idx)
                }}
                />
            )
        })
        console.log(squares)
     return (
        <Layer>
            {squares}
        </Layer>
    ) 
 }
