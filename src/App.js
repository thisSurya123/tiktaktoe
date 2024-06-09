import { useState } from "react";

function App() {
  const numberButton = [];
  const [btn, setBtn] = useState("");
  const [second, setSecond] = useState("");
  const [operation, setOpertion] = useState(true);
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState(0);

  for(let i = 1; i <= 9; i++){
    numberButton.push(
    <Button name={i} number={i} setValue={setBtn} 
    onClick={() => {operation ? setBtn(btn + i) : setSecond(second + i )}}
    />);
  }


  function clearDisplay(){
    setBtn("");
    setSecond("");
    setSymbol("");
    setResult("");
  }

  function numberDelete(){
    if(second == ""){
      setOpertion(true);
    }
    let btnlength = operation ? btn.length - 1 : second.length -1;
    operation ? setBtn(btn.slice(0, btnlength)) : setSecond(second.slice(0, btnlength));
  }

  function Result(){
    if(symbol == "X"){
      setResult(btn * second);
    }if(symbol == "-"){
      setResult(btn - second);
    }if(symbol == "/"){
      setResult(btn / second);
    }if(symbol == "+"){
      setResult((btn + second));
    }
  }

  function Symbol(){
    return(
      <div>
      <p className="-translate-y-6">{symbol}</p>
      <hr />
      </div>
    )
  }

  function multiple(){
    setOpertion(false);
    setSymbol("X");
  }

  function decrease(){
    setOpertion(false);
    setSymbol("-");
  }

  function increast(){
    setOpertion(false);
    setSymbol("+");
  }

  function decision(){
    setOpertion(false);
    setSymbol("/");
  }
  return (
    <div className="
    min-h-screen
    bg-gray-900 flex-row
    text-white md:w-2/6 mx-auto">
      <div className="border p-3 h-52">
      <DisplayNumber value={btn}/>
      <DisplayNumber value={second} />
      <Symbol />
      <DisplayNumber value={result} />
      </div>
      <div className="flex items-end">
        <div className="">
          <Button name="%" />
          <Button name="CE" />
          <Button name="C" onClick={clearDisplay} />
          {numberButton}
          <Button name="-/+"/>
          <Button name="0" onClick={() => {(setBtn(btn + 0))}}/>
          <Button name="."/>
        </div>
        <div className="w-48 flex-wrap">
          <Button name="D" onClick={numberDelete}/>
          <Button name="/" onClick={decision}/>
          <Button name="X" onClick={multiple}/>
          <Button name="-" onClick={decrease}/>
          <Button name="+" onClick={increast}/>
          <Button name="=" onClick={Result}/>
        </div>
      </div>
    </div>
  );
}

function Button({name, number, width, onClick}){
  
  return(
    <button className="
    text-3xl font-bold
    bg-gray-900 rounded-2xl
    border 
    p-5 basis-6 w-28
    "value={number}
    onClick={onClick}>{name}</button>
  );
}

function DisplayNumber({value}){
  return(
    <p className="text-5xl text-right">{value}</p>
  )
}

export default App;
