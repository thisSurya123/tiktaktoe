import { useState } from "react";

function Square({value, onSquareclick}){
  return(
    <button className="border w-full h-40" onClick={onSquareclick}>{value}</button>
  );
}



export default function App(){
  const [change, setChange] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  
  function handleClick(i){
    const nextSquare = square.slice();
    if(change){
      nextSquare[i] = 'X';
    }else{
      nextSquare[i] = 'O';
    }
    setSquare(nextSquare);
    setChange(!change);
  }

  return(
    <div className="md:w-5/12 mx-auto text-white font-bold text-5xl mt-24">
    <div className="flex border bg-gray-900">
        <Square value={square[0]} onSquareclick={() => {handleClick(0)}} />
        <Square value={square[1]} onSquareclick={() => {handleClick(1)}} />
        <Square value={square[2]} onSquareclick={() => {handleClick(2)}} />
    </div>
    <div className="flex border bg-gray-900">
        <Square value={square[3]} onSquareclick={() => {handleClick(3)}} />
        <Square value={square[4]} onSquareclick={() => {handleClick(4)}} />
        <Square value={square[5]} onSquareclick={() => {handleClick(5)}} />
    </div>
    <div className="flex border bg-gray-900">
        <Square value={square[6]} onSquareclick={() => {handleClick(6)}} />
        <Square value={square[7]} onSquareclick={() => {handleClick(7)}} />
        <Square value={square[8]} onSquareclick={() => {handleClick(8)}} />
    </div>
    </div>
  )
}