// export default function Jokes({setup, punch}) {
//     return (
//         <>
//         {/* one n easy method  */}
//             {setup &&<h1>Setup : {setup}</h1>}
//             {/* hard one <h1 style={{display: setup?"block":"none"}}>Setup:{setup}</h1> */}
//             <h3 className="text-center text-2xl py-3" >Punch:{punch} </h3>
//             <hr />
//             <br />
//         </>
//     )
// }
export default function Jokes(props) {
   console.log(props);
    return (
        <>
            <h1>Setup : {props.setup}</h1>
            <h3 className="text-center text-2xl" >Punch:{props.punch} </h3>
            <hr />
            <br />
        </>
    )
}