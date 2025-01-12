import { useState } from "react";
import Die from "./components/Die"
import MyConfetti from "./components/MyConfetti";

let WIN = false;

export default function App() {
    
    const [dicevals ,setDiceVals] = useState(generateAllNewDice())
    console.log(dicevals)


    function generateAllNewDice(){
        return new Array(10)
        .fill(0)
        // .map(()=>Math.floor((Math.random()*6)+1))
        .map(()=>{return {value : Math.floor((Math.random()*6)+1),isHeld :false}
        })
     
        // const diceElements = dicevals.map((val,index)=><Die key={index} index={index } value={val} />)
        //for each element i have to create a array of objects so that i can know which one is helded
        // map newarray and for each element return a obj of val and isheld t/f  


    }
    const diceElements = dicevals.map((diceObj,index)=>
  <Die key={index} 
    index={index } 
    value={diceObj.value}
    isHeld ={diceObj.isHeld }
    handleDiceClick ={handleDiceClick}
     />
)

    function handleDiceClick(idx){
        console.log("clicked and the idx is : ",idx)
        setDiceVals(prevDiceVals => {
            const newDiceVals = prevDiceVals.map((die, i) => {
                return i === idx ? { ...die, isHeld: !die.isHeld } : die
            });
            checkWin(newDiceVals);
            return newDiceVals;
        });
    }

    function checkWin(dicevals){
        if (dicevals.length === 0) return;
        let countHelds = 0;
        const valCond = dicevals[0].value;
        dicevals.forEach((die)=>{
            if(die.value === valCond && die.isHeld){
                countHelds++;
                console.log("the count is : ",countHelds);
                console.log("the length is   ",dicevals.length);
            }
        });
        if(countHelds === dicevals.length){
            console.log(countHelds,dicevals.length)
            WIN = true;

        }
    }

    function handleRoll(){
        if(WIN){
            WIN = false
            setDiceVals(generateAllNewDice());
        }
        //each element pe map taki ek new array return .2.map ek ele if isheld :die else die.value randnum 1to 6 gen
        setDiceVals((prevDiceVals)=>prevDiceVals.map((die)=>{
            return die.isHeld  ? die : {...die, value : Math.floor(Math.random()*6+1)}
        }))
    }

    return (
        <main className="flex flex-col items-center justify-center mx-60 mb-52 mt-10">
            <div className="dieContainer h-dvh  min-w-full rounded-3xl flex flex-col items-center justify-center">
             <h1 className="text-orange-600 border  rounded-lg shadow-lg mb-10 text-5xl font-bold p-3">Tenzi</h1>
             <h3 className="text-orange-600 border font-medium rounded-2xl shadow-md mx-14 p-4 mb-10">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
             Try to get the fastest time!</h3>
                <div className="container grid grid-cols-5 gap-2 gap-y-12">
                    {diceElements}
                </div>
            <button onClick={handleRoll}  className="text-4xl font-semibold p-4 bg-orange-600 mt-12 text-white rounded-xl">{WIN ?  "NewGame" : "Roll" }</button>
            {WIN && <button className="text-4xl font-semibold p-4 bg-orange-600 mt-12 text-white rounded-xl">YOU WIN</button>
 }
            </div>
            {WIN && <MyConfetti />}

        </main>
    )
}