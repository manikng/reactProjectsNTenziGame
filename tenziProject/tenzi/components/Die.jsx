export default function Die({ index, value, isHeld, handleDiceClick }) {
    return(
        <div onClick={() => handleDiceClick(index)} style={{ backgroundColor: isHeld ? 'orange' : 'white' }} className="mx-auto p-5 shadow-md rounded-2xl"> 
           <p className="font-bold text-3xl px-3">{value}</p>
        </div>
    )
}

// this is my code form app.jsx 
// :  const diceElements = dicevals.map((val,index)=><Die key={index} value={val} />)
// why i cannt log my key