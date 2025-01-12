crux: jab bhi kisi fxn ko based on some other things ke basis pe run krana ho to useEffect ke ander hi run krao as it come in sideeffects as it changing the current dom state for e.g in this case checkWin ko run krana tha hr bar jab user koi guess kre ya koi wrong count ho to in conditions ke basis pe if win hue to directly mujhe win div ko render krana tha similarly for lose div ko 

eng :Crux: Whenever you need to run a function based on some other dependencies, you should use `useEffect` because it handles side effects, such as changing the current DOM state. For example, in this case, you need to run `checkWin` every time the user makes a guess or the wrong count changes. Based on these conditions, if the user wins, you should render the win div, and similarly, render the lose div if the user loses.

The `useEffect` hook in React is used to perform side effects in function components. Side effects can include data fetching, subscriptions, or manually changing the DOM. However, `useEffect` is also useful for running code in response to changes in state or props, even if it doesn't interact with an external system.

In your case, you are using `useEffect` to call the `checkWin` function whenever `guessWord` or `wrongGuess` changes. This ensures that the win condition is checked every time the user makes a guess.

### Explanation of `useEffect` Usage

```javascript
useEffect(() => {
    checkWin();
}, [guessWord, wrongGuess]);
```

- **Dependency Array**: The array `[guessWord, wrongGuess]` tells React to run the `checkWin` function whenever either `guessWord` or `wrongGuess` changes. This is crucial for keeping the win/loss state up to date.
- **Side Effect**: Although `checkWin` does not interact with an external system, it does update the component's state (`setWin`). This is considered a side effect because it affects the component's behavior and rendering.

### Potential Mistakes

- **State Dependencies**: Ensure that `guessWord` and `wrongGuess` are correctly defined and updated in your component's state.
- **State Updates**: Make sure `setWin` is correctly defined and used to update the win state.
- **Function Scope**: Ensure `checkWin` is defined within the same scope as the `useEffect` hook or is properly imported if defined elsewhere.

### Example of Correct Usage

Here's a more complete example to illustrate how `useEffect` and `checkWin` should be used together:

```javascript
import React, { useState, useEffect } from 'react';

function App() {
    const [guessWord, setGuessWord] = useState([]);
    const [wrongGuess, setWrongGuess] = useState(0);
    const [win, setWin] = useState(null);
    const maxWrong = 6;
    const curWord = "example"; // Example word to guess

    useEffect(() => {
        checkWin();
    }, [guessWord, wrongGuess]);

    function checkWin() {
        if (wrongGuess >= maxWrong) {
            setWin(false);
        } else if (curWord.split("").every((letter) => guessWord.includes(letter))) {
            setWin(true);
        }
    }

    // ...existing code...

    return (
        <div>
            {/* Render your component UI */}
        </div>
    );
}

export default App;
```

In this example:

- `guessWord` and `wrongGuess` are state variables that track the user's guesses.
- `useEffect` ensures `checkWin` is called whenever these state variables change.
- `checkWin` updates the win state based on the current guesses and the word to be guessed.

This setup ensures that your component correctly responds to user interactions and updates the win/loss state accordingly.

CSSS:
The problem is that the position: absolute; in the .lost::before class requires the parent element to have position: relative; to position it correctly. Add position: relative; to the span element.

//note useEffect rerender krta hai to if u use a =[] and then in 
//useEffect u use setA to add a component it rerenders and initilizes it to empty again
//so use a state to store the component and then add it to the state
    // const [a, setA] = useState([]);
    // useEffect(() => {
    //     setA((prev) => [...prev, <FarewellMsgs />]);
    //     console.log("checking a if array", a);
    // }, [wrongGuess]);
then rendering it as:
    <div>
                {a.map((cmp)=>{
                    console.log("cmp",cmp);
                    
                    return cmp
                })}
                </div>

export and const dono ek saath use nhi kiye ja skte