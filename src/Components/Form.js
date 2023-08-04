import React, {useState} from 'react';
import cross from "../images/cross.svg";
import logo from "../images/logo.svg"
import * as styles from "../Styles/Content.module.css";
import { navigate } from 'gatsby';
import Select from 'react-select';
import RadioButton from './RadioBtn';

const Form = () => {

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
        zIndex: 1001,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        fontWeight: 700,
        paddingLeft: '.25rem',
        zIndex: 1001,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#ffd700' : '#111',
        backgroundColor: state.isSelected ? 'transparent' : 'transparent',
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        fontWeight: 600,
        paddingLeft: '1rem',
        zIndex: 1001,
      }),
      menu:(provided) => ({
        ...provided ,
        position: 'relative',
        zIndex:1001.
      }),
      // multiValue: (provided) => ({
      //   ...provided,
      //   color: '#eee',
      //   fontFamily: 'Montserrat',
      //   fontSize: '1.8rem',
      //   fontWeight: 700,
      //   backgroundColor: '#ffd700',
      //   paddingLeft: '1rem',
      // }),
      // multiValueRemove: (provided) => ({
      //   ...provided,
      //   color: 'black',
      //   cursor: 'pointer',
      //   // '&:hover': {
      //   //   backgroundColor: 'black',
      //   //   color: 'white',
      //   // },
      // }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'white',
        cursor: 'pointer',
        zIndex: 1001,
      }),
      placeholder: () => ({ display: 'none' , zIndex: 1001, }),
      container: (provided) => ({
        ...provided,
        overflow: 'visible',
        zIndex: 1001,
      }),
      input: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        fontWeight: 700,
        paddingLeft: '1rem',
        zIndex: 1001,
      }),
    };
    const customStylesMulti = {
      control: (provided, state) => ({
        ...provided,
        height: 'auto',
        minHeight: '3rem',
        backgroundColor: 'transparent',
        border: state.isFocused ? '2px solid white' : '2px solid white',
        '&:hover': {
          borderColor: 'white',
        },
        cursor: 'text',
        overflow: 'hidden',
      }),
      singleValue: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.2rem',
        fontWeight: 700,
        paddingLeft: '1rem',
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#ffd700' : '#111',
        backgroundColor: state.isSelected ? 'transparent' : 'transparent',
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        fontWeight: 600,
        paddingLeft: '1rem',
      }),
      multiValue: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.2rem',
        fontWeight: 700,
        backgroundColor: '#fff',
        paddingLeft: '.25rem',
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        color: 'black',
        cursor: 'pointer',
      }),
      dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'white',
        cursor: 'pointer',
      }),
      placeholder: () => ({ display: 'none'}),
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
        minHeight: '3rem',
        overflow: 'hidden',
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
    const sportsOptions = [
      {value:"Athletics" , label: "Athletics"},
      {value:"Cricket" , label: "Cricket"},
      {value:"Basketball" , label: "Basketball"},
      {value:"Hockey" , label: "Hockey"},
      {value:"Athletics" , label: "Athletics"},
      {value:"Cricket" , label: "Cricket"},
      {value:"Basketball" , label: "Basketball"},
      {value:"Hockey" , label: "Hockey"},
    ];

    const isFormFilled = () => {
      const requiredFields = ['name', 'email', 'phone', 'gender', 'college', 'city', 'sports', 'yos'];
  
      for (const field of requiredFields) {
        const value = formData[field];
        if (Array.isArray(value) && value.length === 0) {
          return false;
        } else if (!Array.isArray(value) && (!value || value.trim() === '')) {
          return false;
        }
      }
  
      return true;
    };
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };
    
    const isValidPhoneNumber = (phone) => {
      const phonePattern = /^\d+$/;
      return phonePattern.test(phone);
    };
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      gender: '',
      college: '',
      city: '',
      sports: [],
      yos: '',
    });
    const handleChange = (selectedOption, { id, name, type }) => {
      const updatedFormData = { ...formData };
    
      if (type === 'radio') {
        updatedFormData[name] = selectedOption.value;
      } else if (type === 'checkbox') {
        if (!updatedFormData[name]) {
          updatedFormData[name] = [];
        }
        if (selectedOption) {
          updatedFormData[name].push(selectedOption.value);
        } else {
          updatedFormData[name] = updatedFormData[name].filter(
            (val) => val !== selectedOption.value
          );
        }
      } else {
        updatedFormData[id] = selectedOption.value.trim();
      }
    
      setFormData(updatedFormData);
    };
      
    const handleChange2 = (event) => {
      const { id, value, name, type } = event.target;
      const updatedFormData = { ...formData };
    
      if (type === 'radio') {
        updatedFormData[name] = value;
      } else if (type === 'checkbox') {
        if (!updatedFormData[name]) {
          updatedFormData[name] = [];
        }
        if (event.target.checked) {
          updatedFormData[name].push(value);
        } else {
          updatedFormData[name] = updatedFormData[name].filter((val) => val !== value);
        }
      } else {
        updatedFormData[id] = value.trim();
      }
    
      setFormData(updatedFormData);
    };
    const handleChangeMulti = (selectedOptions, { name }) => {
      const updatedFormData = { ...formData };
      updatedFormData[name] = selectedOptions ? selectedOptions.map(option => option.value) : [];
      setFormData(updatedFormData);
    };
    
 
    const handleRegistration = () => {
      if (isFormFilled(formData)) {
        if (!isValidEmail(formData.email)) {
          alert('Invalid email address.');
        } else if (!isValidPhoneNumber(formData.phone)) {
          alert('Invalid phone number. Please enter digits only.');
        } else {
          console.log('Form Data:', formData);
        }
      } else {
        alert('Please fill in all required fields.');
      }
    };


  return (
    <section className={styles["regPage"]}>
        <div className={styles["rpIcons"]}></div>
        <div className={styles["rpHeadingContainer"]}>
            <img src={logo} id='reg-logo' />
            <h3>REGISTRATION</h3>
            <img src={cross} onClick={goBack} className={styles["cross"]} />
        </div>
        <div className={styles["regBox"]}>
        <form className={styles["regForm"]}> 
            <div className={styles["formSingleInput"]}>
                <label htmlFor='name' className={styles["nameLabel"]}>Name</label>
                <input className={styles["regInput"]} id='name' onChange={handleChange2}  />

                <label htmlFor='email'>E-mail</label>
                <input className={styles["regInput"]} id='email' onChange={handleChange2}  />

                <label htmlFor='phone'>Phone</label>
                <input className={styles["regInput"]} id='phone' onChange={handleChange2} maxLength="10"  />

                <label htmlFor='gender'>Gender</label>
                <div className={styles["radioBtns"]}>
                    {/* <input id='genderM' type='radio' name='gender' value="Male" onChange={handleChange2}  />
                    <label htmlFor='genderM'>Male</label>
                    <input id='genderF' type='radio' name='gender' value="Female"  onChange={handleChange2} />
                    <label htmlFor='genderF'>Female</label>
                    <input id='genderO' type='radio' name='gender' value="Others"  onChange={handleChange2} />
                    <label htmlFor='genderO'>Others</label> */}
                    <RadioButton
                      name="gender"
                      id="Male"
                      value="Male"
                      text="Male"
                      onChange={handleChange2}
                      // checked={theme.dark}
                    />
                    <RadioButton
                      name="gender"
                      id="Female"
                      value="Female"
                      text="Female"
                      onChange={handleChange2}
                      // checked={theme.dark}
                    />
                    <RadioButton
                      name="gender"
                      id="Other"
                      value="Other"
                      text="Other"
                      onChange={handleChange2}
                      // checked={theme.dark}
                    />
                </div>
            </div>
            <div className={styles["formMultiInput"]}>
                <label htmlFor='college' className={styles["collegeLabel"]}>College</label>
                <Select options={collegeOptions} onChange={(selectedOption) => handleChange(selectedOption, { id: 'college' })} styles={customStyles}  />

                <label htmlFor='city'>City</label>
                <Select options={cityOptions} onChange={(selectedOption) => handleChange(selectedOption, { id: 'city' })} styles={customStyles}  />

                <label htmlFor='sports'>Sports</label>
                <Select options={sportsOptions} onChange={(selectedOptions) => handleChangeMulti(selectedOptions, { name: 'sports' })} styles={customStylesMulti} isMulti />

                <label htmlFor='yos'>Year Of Study</label>
                <div className={styles["yearOfStudy"]}>
                    <input id='yos1' type='radio' name='yos' value="1" onChange={handleChange2}  />
                    <label htmlFor='yos1'>1</label>
                    <input id='yos2' type='radio' name='yos' value="2" onChange={handleChange2}  />
                    <label htmlFor='yos2'>2</label>
                    <input id='yos3' type='radio' name='yos' value="3" onChange={handleChange2}  />
                    <label htmlFor='yos3'>3</label>
                    <input id='yos4' type='radio' name='yos' value="4" onChange={handleChange2}  />
                    <label htmlFor='yos4'>4</label>
                    <input id='yos5' type='radio' name='yos' value="5" onChange={handleChange2}  />
                    <label htmlFor='yos5'>5</label>
                </div>
            </div>
        </form>
        <div className={styles["btnContainer"]}>
        <button className={styles["submitBtn"]} onClick={handleRegistration}>REGISTER</button>
        </div>
        </div>
    </section>
  );
};

export default Form;