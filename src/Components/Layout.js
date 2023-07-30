import React from 'react';
import Navbar from './Navbar';
import "../Styles/globals.css"

const Layout = ({content , navbar}) => {
    return (
        <section className='layout-section'>
            <div className='fixed-bg'>
                <div className='fixed-bg-red'></div>
                <div className='fixed-bg-blue'></div>
            </div>
            {navbar && <Navbar />}
            <div>{content}</div>
        </section>
    );
};

export default Layout;