import getFarewellText from "../utility";

//from getFarewellText u will get a random farewell message
//you just have to return that msg in a div

export default function FarewellMsgs() {
    console.log(getFarewellText());
    return (
        <div className="bg-purple-950 font-medium px-4 flex justify-center text-xl py-3 rounded-lg mt-3" > 
            {getFarewellText()}
        </div>
    )
    
}