import React from "react";
import { Header, Skills, Work, About, Testimonials } from "./Container";
import './App.scss';
import { HomeLayout } from './Layout';


const App =() =>{
    return (
        <div className="app">
            <HomeLayout>
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonials />
            </ HomeLayout>
        </div>
    )
}

export default App;