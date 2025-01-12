//but for to run all these you need to install vite+react 

//first import createRoot from react-dom/client
import React from "react";
import { createRoot } from "react-dom/client";

//2. createRoot which refers to index.html 's root div 
const root = createRoot(document.getElementById("root"));

//3.render root and uske ander html code paass kr skte hai
root.render(<h1>hello </h1>);