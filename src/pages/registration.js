import React from 'react';
import Layout from '../Components/Layout';
import cross from "../images/cross.svg";
import logo from "../images/logo.svg"
import * as styles from "../Styles/Content.module.css";
import { navigate } from 'gatsby';
import Select from 'react-select';

const registration = () => {

    const goBack = () => {
        navigate(-1);
    };

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          height: '3rem',
          backgroundColor: 'transparent',
          border: state.isFocused ? '2px solid white' : '2px solid white',
          '&:hover': {
            borderColor: 'white',
          },
          cursor: 'text',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: '#eee',
          fontFamily: 'Montserrat',
          fontSize: '1.8rem',
          fontWeight: 700,
          paddingLeft: '1rem',
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? '#ffd700' : '#111',
          backgroundColor: state.isSelected ? 'transparent' : 'transparent',
          fontFamily: 'Montserrat',
          fontSize: '1.6rem',
          fontWeight: 600,
          paddingLeft: '1rem',
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: 'white',
        }),
        placeholder: () => ({ display: 'none' }),
        container: (provided) => ({
          ...provided,
          overflow: 'visible',
        }),
        input: (provided) => ({
          ...provided,
          color: '#eee',
          fontFamily: 'Montserrat',
          fontSize: '1.8rem',
          fontWeight: 700,
          paddingLeft: '1rem',
        }),
      };
      
           
           
    const collegeOptions = [
        {value:"IIT Bombay" , label: "IIT Bombay"},
        {value:"IIT Delhi" , label: "IIT Delhi"},
        {value:"IIT Madras" , label: "IIT Madras"},
        {value:"BITS Pilani" , label: "BITS Pilani"},
    ];
    const cityOptions = [
        {value:"Bombay" , label: "Bombay"},
        {value:"Delhi" , label: "Delhi"},
        {value:"Madras" , label: "Madras"},
        {value:"Pilani" , label: "Pilani"},
    ];

    const handleChange = selectedCollege =>{
        console.log(selectedCollege);
    }

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
                        <label htmlFor='college'>COLLEGE</label>
                        <Select options={collegeOptions} onChange={handleChange} styles={customStyles}  />

                        <label htmlFor='city'>CITY</label>
                        <Select options={cityOptions} onChange={handleChange} styles={customStyles}  />
                    </div>
                </form>
            </section>
        }
    />
  );
};

export default registration;