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
      }),
      singleValue: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        fontWeight: 700,
        paddingLeft: '.25rem',
        zIndex: 1002,
      }),
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#ffd700' : '#111',
        backgroundColor: state.isSelected ? 'transparent' : 'transparent',
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        fontWeight: 600,
        paddingLeft: '1rem',
        zIndex: 1002,
      }),
      menu:(provided) => ({
        ...provided ,
        zIndex:1002,
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
        zIndex: 1002,
      }),
      placeholder: () => ({ display: 'none' , zIndex: 1002, }),
      container: (provided) => ({
        ...provided,
        overflow: 'visible',
        zIndex: 1002,
      }),
      input: (provided) => ({
        ...provided,
        color: '#eee',
        fontFamily: 'Montserrat',
        fontSize: '1.5rem',
        fontWeight: 700,
        paddingLeft: '1rem',
        zIndex: 1002,
      }),
    };
    const customStyles2 = {
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
      valueContainer:(provided)=>({
        ...provided,
        padding:'0px 8px'
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
        // height: '3rem',
        overflow: 'hidden',
      }),
    };

    function convertApiFormat(apiResponse) {
      const result = {};
    
      apiResponse.forEach((sport) => {
        const { id, name } = sport;
        if (!result[name]) {
          result[name] = { value: id, label: name };
        }
      });
      const convertedArray = Object.values(result);
    
      return convertedArray;
    }
    
  
    const collegeOptions = [
      {id:1 , name: "IIT Bombay"},
      {id:2 , name: "IIT Delhi"},
      {id:3 , name: "IIT Madras"},
      {id:4 , name: "BITS Pilani"},
    ];
    const cityOptions = [
      {id:1 , name: "Bombay"},
      {id:2 , name: "Delhi"},
      {id:3 , name: "Madras"},
      {id:4 , name: "Pilani"},
    ];
    const sportsOptions = [
      {id:1 , name: "Athletics"},
      {id:2 , name: "Cricket"},
      {id:3 , name: "Basketball"},
      {id:4 , name: "Hockey"},
      {id:5 , name: "Athletics"},
      {id:6 , name: "Cricket"},
      {id:7 , name: "Basketball"},
      {id:8 , name: "Hockey"},
    ];

    const isFormFilled = () => {
      const requiredFields = ['name', 'email_id', 'phone', 'gender', 'college_id', 'city', 'sports', 'year_of_study'];
  
      for (const field of requiredFields) {
        const value = formData[field];
        if (Array.isArray(value) && value.length === 0) {
          return false;
        } else if (!Array.isArray(value) && (!value || value === '')) {
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
      email_id: '',
      phone: '',
      gender: '',
      college_id: '',
      city: '',
      sports: [],
      year_of_study: '',
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
        updatedFormData[id] = selectedOption.value;
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
        if (!isValidEmail(formData.email_id)) {
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

                <label htmlFor='email_id'>E-mail</label>
                <input className={styles["regInput"]} id='email_id' onChange={handleChange2}  />

                <label htmlFor='phone'>Phone</label>
                <input className={styles["regInput"]} id='phone' onChange={handleChange2} maxLength="10"  />

                <label htmlFor='gender' className={styles["genderLabel"]}>Gender</label>
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
                    />
                    <RadioButton
                      name="gender"
                      id="Female"
                      value="Female"
                      text="Female"
                      onChange={handleChange2}
                    />
                    <RadioButton
                      name="gender"
                      id="Other"
                      value="Other"
                      text="Other"
                      onChange={handleChange2}
                    />
                </div>
            </div>
            <div className={styles["formMultiInput"]}>
                <label htmlFor='college_id' className={styles["collegeLabel"]}>College</label>
                <Select options={convertApiFormat(collegeOptions)} onChange={(selectedOption) => handleChange(selectedOption, { id: 'college_id' })} styles={customStyles}  />

                <label htmlFor='city'>City</label>
                <Select options={convertApiFormat(cityOptions)} onChange={(selectedOption) => handleChange(selectedOption, { id: 'city' })} styles={customStyles2}  />

                <label htmlFor='sports'>Sports</label>
                <Select options={convertApiFormat(sportsOptions)} onChange={(selectedOptions) => handleChangeMulti(selectedOptions, { name: 'sports' })} styles={customStylesMulti} isMulti />

                <label htmlFor='year_of_study'>Year Of Study</label>
                <div className={styles["yearOfStudy"]}>
                    <input id='year_of_study1' type='radio' name='year_of_study' value="1" onChange={handleChange2}  />
                    <label htmlFor='year_of_study1'>1</label>
                    <input id='year_of_study2' type='radio' name='year_of_study' value="2" onChange={handleChange2}  />
                    <label htmlFor='year_of_study2'>2</label>
                    <input id='year_of_study3' type='radio' name='year_of_study' value="3" onChange={handleChange2}  />
                    <label htmlFor='year_of_study3'>3</label>
                    <input id='year_of_study4' type='radio' name='year_of_study' value="4" onChange={handleChange2}  />
                    <label htmlFor='year_of_study4'>4</label>
                    <input id='year_of_study5' type='radio' name='year_of_study' value="5" onChange={handleChange2}  />
                    <label htmlFor='year_of_study5'>5</label>
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