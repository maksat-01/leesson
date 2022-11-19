import './style/style.scss'
import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Advant from "./components/advant/advant"
import Services from  "./components/services/services"
import Cargo from "./components/cargo/cargo"
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Rates from "./components/pages/rates/Rates";
import Home from "./components/home/home";
// import React from "@types/react";



function App() {
    return (
        <>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/rates' element={<Rates/>}/>
            </Routes>

        </>

    );
}

export default App;
