import React from "react";
import { Header, Footer, Skills, Work, About, Testimonials } from "./Container";
import { Navbar } from "./Components";
import './App.scss';


const App =() =>{
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App;