//ALWays think about that what your app  contains that ui is lies in app componentc
//ye jo Card use kr rhe ho ye khana se aaye hai bcz phle ek fxn bnta hai then use return krte hai n then APP
//USE CALL KRTE HAI BUT YE to react hai hance call krte hai  html tag se
import Card from "./Card";
import entryPlaces from "../entryPlaces";
// console.log(entryPlaces);
const entry = entryPlaces.map((place) => {
  return <Card 
  key = {place.key}
  // entry = {place}
  {...place}
  />
});
function App(){
  return (
    <main className="flex flex-wrap gap-3 justify-center">
      {entry}
    </main>
  );
}
export default App;

// const Places = entryPlaces.map((place)=>{
//   return <Card
//     key={place.key}
//    img={place.images}
//     name={place.name} 
//     loc = {place.location}
//      rating={place.rating}/>
// })
// console.log(Places);
// function App(){
//   return (
//     <main className="flex flex-wrap gap-3 justify-center">
//       {Places}
//     </main>
//   );
// }

// function App() {
//   return (
//     <div className="flex space-x-4 px-5">
//       <Card 
//         img="https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg"
//         name="CELLULAR JAIL"
//         loc="PORT BLAIR"
//         rating={4.2}
//       />
//       <Card  
//         img="https://live.staticflickr.com/982/40047849690_7a78e1f816_b.jpg"
//         name="CORBYN'S COVE"
//         loc="PORT BLAIR"
//         rating={5}
//       />
//       <Card 
//         img="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600"
//         name="SAMUDRIKA NAVAL MARINE MUSEUM"
//         loc="PORT BLAIR"
//         rating={4.5}
//       />
//       <Card 
//         img="https://uploads-ssl.webflow.com/5b56319971ac8c7475a9d877/5c4f5622a29a8f65c7f25f3e_IMG_7728%20Neil%20Island%20(21).jpg"
//         name="NEIL ISLAND"
//         loc="India"
//         rating={4.9}
//       />
//     </div>
//   );
// }