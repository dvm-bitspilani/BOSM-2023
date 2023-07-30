import React from 'react';
import * as styles from '../Styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles["navbar"]}>
            <ul>
                <li className={styles['navLinks']}>ABOUT US</li>
                <li className={styles['navLinks']}>EVENTS</li>
                <li className={styles['navLinks']}>CONTACT US</li>
                <li className={styles['navLinks']}>SPONSORS</li>
            </ul>
        </nav>
    );
};

export default Navbar;
