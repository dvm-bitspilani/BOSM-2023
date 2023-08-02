import React from 'react';
import Layout from '../Components/Layout';
import cross from "../images/cross.svg";
import logo from "../images/logo.svg"
import * as styles from "../Styles/Content.module.css";
import Multiselect from 'multiselect-react-dropdown';
import { navigate } from 'gatsby';

const registration = () => {

    const goBack = () => {
        navigate(-1);
    };

  return (
    <Layout
        navbar={false}
        fixedbg={false}
        content={
            <section className={styles["regPage"]}>
                <div className={styles["rpIcons"]}></div>
                <div className={styles["rpHeadingContainer"]}>
                    <img src={logo} />
                    <h3>REGISTRATION</h3>
                    <img src={cross} onClick={goBack} className={styles["cross"]} />
                </div>
                <form className={styles["regForm"]}> 
                    <div className={styles["formSingleInput"]}>
                        <label htmlFor='name'>NAME</label>
                        <input className={styles["regInput"]} id='name' />

                        <label htmlFor='email'>E-MAIL</label>
                        <input className={styles["regInput"]} id='email' />

                        <label htmlFor='phone'>PHONE</label>
                        <input className={styles["regInput"]} id='phone' />

                        <label htmlFor='gender'>GENDER</label>
                        <div className={styles["radioBtns"]}>
                            <input id='genderM' type='radio' name='gender' value="Male" />
                            <label htmlFor='genderM'>Male</label>
                            <input id='genderF' type='radio' name='gender' value="Female" />
                            <label htmlFor='genderF'>Female</label>
                            <input id='genderO' type='radio' name='gender' value="Others" />
                            <label htmlFor='genderO'>Others</label>
                        </div>
                    </div>
                    <div className={styles["formMultiInput"]}>

                    </div>
                </form>
            </section>
        }
    />
  );
};

export default registration;