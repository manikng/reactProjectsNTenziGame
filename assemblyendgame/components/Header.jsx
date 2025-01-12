import FarewellMsgs from "./FarewellMsgs";

export default function AssemblyEndGame(props) {
  return (
    <main>
      <header>
        <h1 className="text-4xl text-white font-bold border  rounded-xl p-4 text-center shadow-2xl shadow-white mb-3">
          {" "}
          Assembly Endgame{" "}
        </h1>
        <p className="mt-2 p-1 text-yellow-400 ">
          Guess the word in 8 attemps to save the programming world safe form
          Assembly{" "}
        </p>
      </header>
      {props.wrongGuessCounts ? <FarewellMsgs /> : null}


     {props.gameWin && <div className="bg-green-500 mt-4 text-white text-center p-4 rounded-md">
        <p>YOU WIN</p>
        <p>Congratulations 🎉🎉</p>
      </div>}
     {props.gameLost && <div className="bg-red-500 mt-4 text-white text-center p-4 rounded-md">
        <p>YOU LOSE</p>
        <p>Better luck next time!</p>
      </div>}
    </main>
  );
}
