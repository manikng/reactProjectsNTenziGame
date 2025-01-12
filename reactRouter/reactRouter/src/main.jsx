import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Contact from "./components/contactus/Contactus.jsx";
import User from "./components/User.jsx";
import Github, { GithubDataLoader } from "./components/GITHUB/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader ={GithubDataLoader}
      path="github"
       element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
