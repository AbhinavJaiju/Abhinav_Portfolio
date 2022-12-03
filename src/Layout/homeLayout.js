import React from 'react';
import { Navbar } from '../Components';
import { Footer } from '../Container';
import './homeLayout.scss';

const HomeLayout = ({children}) =>{
return(
    <>
        <Navbar />
        <section className="container">
            {children}
        </section>
        <Footer />
    </>
)}
export default HomeLayout;