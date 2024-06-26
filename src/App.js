import { useState } from "react";

function Square({value, onSquareclick}){
  return(
    <button className="border w-full h-40" onClick={onSquareclick}>{value}</button>
  );
}



export default function App(){
  const [change, setChange] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  function resetBtn(){
    setSquare(Array(9).fill(null));
  }

  function handleClick(i){
    const nextSquare = square.slice();
    //cek Pemenang
    const menang = [
      [0,1,2],
      [0,4,8],
      [0,3,6],
      [3,4,5],
      [6,7,8],
      [6,4,2]
    ];

    for(let i= 0; i < menang.length; i++){
      const [a, b, c] = menang[i];
      if(square[a] && square[a] === square[b] && square[a] === square[c]){
        alert(square[i] + "you win");
        return
      }
    }

    if(square[i]){
      return
    }

    if(change){
      nextSquare[i] = "O";
    }else{
      nextSquare[i] = "X";
    }
    setSquare(nextSquare);
    setChange(!change);
  }

  return(
    <div className="md:w-5/12 mx-auto text-white font-bold text-5xl mt-24">
    <button className="bg-blue-500 p-2" onClick={resetBtn}>Reset</button>
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