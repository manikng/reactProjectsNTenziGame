import Jokes from "./Jokes.jsx"
import jokes from "./jokesData.js"
console.log(jokes);
const myJokes = jokes.map((joke)=>{
    return <Jokes 
    
    setup = {joke.setup}
    punch = {joke.punchline}
    />
})
console.log(myJokes);
export default function App() {
    return (
        <main>
            <h1>i am inside App now</h1>
            {myJokes}
            </main>
     );

}

// export default function App() {
//     return (
//         <>
//             <Jokes
//             setup={`what is the best thing about switzerland?`}
//             punch ="I don't know, but the flag is a big plus!"
//             upvotes = {0}
//             isPun = {true}
//             comments = {[
//                 {author: "", comment :""},
//                 {author:"i",comment:""}
//             ]} 
//             />
//             <Jokes 
//             setup="a teacher asked a student what is the full form of maths?"
//             punch ="student replied: Mentally Affected Teachers Harassing Students"
//             />
//             <Jokes 
//             setup ="डॉक्टर: तुम्हें क्या बीमारी है ? "
//             punch ="मरीज: डॉक्टर साहब, मुझे तो आपकी फीस सुनते ही चक्कर आ जाते हैं!"
//             />
//             <Jokes 
//             setup ="Why don't scientists trust atoms?"
//             punch ="Because they make up everything! "
//             />

//         </>
//     )
// }