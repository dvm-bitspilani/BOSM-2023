import React from 'react';
import * as styles from '../Styles/Navbar.module.css';

const Navbar = () => {
    return (
        <React.Fragment>
        <div className={styles['navbarContainer']}>
        <nav className={styles['navbarLeft']}>
            <ul>
                <li className={styles['navLinks']}>ABOUT US</li>
                <li className={styles['navLinks']}>EVENTS</li>
            </ul>
        </nav>
        <nav className={styles["navbarRight"]}>
            <ul>
                <li className={styles['navLinks']}>CONTACT US</li>
                <li className={styles['navLinks']}>SPONSORS</li>
            </ul>
        </nav>
        </div>
        </React.Fragment>
    );
};

export default Navbar;
