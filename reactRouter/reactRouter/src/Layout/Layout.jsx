import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

//Outlet ye changing components ko render karta hai
//ye baki ke component ko as a base use and iske ander jo bhi hoga
//use changing component ko render krta rhega baki ke component same rhaenge

export default function Layout() {
  return (
  <>
    <Header />
    <Outlet /> 
    {/* header and footer same rhega uske beech mai component change hote rhenge 
     */}
    <Footer />
    </>
  );
}
