
import AssemblyEndGame from "./components/Header";
import Langs from "./components/langs";
import { useState, useEffect } from "react";
import clsx from "clsx";
import words from "./words";
//by extension auto import :drag shift drop import name from './components/Header.jsx';
export default function App() {
  const [win, setWin] = useState(false);
  const [curWord, setCurWord] = useState("react");
  const [guessWord, setGuessWord] = useState([]);
  const [wrongGuess, setWrongGuess] = useState(0);
    console.log("the current word is :", curWord);
  const maxWrong = 8;

  useEffect(() => {
    checkWin();
  }, [guessWord, wrongGuess]);

  function genRandomWord() {
    const randIdx = Math.floor(Math.random() * words.length);
    console.log(words[randIdx]);
    return words[randIdx];
  }

  function handleClick(letter) {
    if (letter && !curWord.includes(letter)) {
      setWrongGuess((prev) => prev + 1);
    }

    setGuessWord((prev) => (prev.includes(letter) ? prev : [...prev, letter]));
  }

  function checkWin() {
    if (wrongGuess >= maxWrong) {
      setWin(false);
    } else if (
      curWord.split("").every((letter) => guessWord.includes(letter))
    ) {
      setWin(true);
    }
  }
  const renderNewGame = win || wrongGuess >= maxWrong;
  console.log("the render new game is :", renderNewGame);

  const keyBord = "abcdefghijklmnopqrstuvwxyz".split("").map((letter, idx) => {
    const isGuessed = guessWord.includes(letter);
    const isCorrect = curWord.includes(letter);

    const className = clsx(
      "keyEle p-4 w-12 text-blue-500 text-lg font-semibold",
      {
        "bg-green-500": isGuessed && isCorrect,
        "bg-red-500": isGuessed && !isCorrect,
      }
    );

    return (
      <span key={idx} className="bg-yellow-500 rounded-md m-1">
        <button onClick={() => handleClick(letter)} className={className}>
          {letter.toUpperCase()}
        </button>
      </span>
    );
  });

  const Keys = curWord.split("");
  const Letter = Keys.map((letter, idx) => {
    return (
      <span
        className="flex justify-center items-center letterBox w-14 h-14 rounded-lg "
        key={idx}
      >
        {guessWord.includes(letter) ? letter.toUpperCase() : null}
      </span>
    );
  });

  return (
    <>
      <AssemblyEndGame
        gameWin={win}
        gameLost={wrongGuess >= maxWrong}
        wrongGuessCounts={wrongGuess}
      />
      <Langs wrongGuessCounts={wrongGuess} />
      <div className="flex justify-center gap-1 mt-8">{Letter}</div>
      <div className="keyContainer flex flex-wrap justify-center gap-1 mt-8 max-w-3xl mx-auto px-4">
        {keyBord}
      </div>
      <div className="flex justify-center mt-8">
        {renderNewGame && (
          <button
            onClick={() => {
              setCurWord(genRandomWord()); // or any other word
              setGuessWord([]);
              setWrongGuess(0);
              setWin(false);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            New Game
          </button>
        )}
      </div>
    </>
  );
}
