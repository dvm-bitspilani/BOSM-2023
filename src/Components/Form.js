import React, { useState, useEffect , useRef } from 'react';
import cross from "../images/cross.svg";
import logo from "../images/logo.svg"
import * as styles from "../Styles/Content.module.css";
import Select from 'react-select';
import RadioButton from './RadioBtn';
import upload from "../images/upload.svg"
import {storage} from "../Components/firebase";
import { uploadBytes , listAll , getDownloadURL} from "firebase/storage";
import { ref } from 'firebase/storage';
import Error1 from './Error1';
import Error2 from './Error2';
import Success from "./Success";
import Preview from "./Preview";
import {v4} from "uuid";

const Form = ({ setRegPage , setShowBlackScreen2 }) => {

  const [preview , setpreview] = useState(false)
  const [error1 , setError1]=useState(false)
  const [error2 , setError2]=useState(false)
  const [success , setSuccess]=useState(false)
  const [errormsg , setErrorMsg] = useState("")

  const closeError=()=>{
    setError1(false);
    setError2(false);
    setSuccess(false);  
    setpreview(false)
  }

  const customNoOptionsMessage = () => "Please select a Gender First";
  const customNoOptionsMessage2 = () => "Please select a State First";

  const [fileUploaded , setFileUploaded] = useState(null);
  const [selectedState , setSelectedState] = useState("");


  const hiddenFileInput = useRef(null);

  const imageUpload = event => {
    hiddenFileInput.current.click();
  };
  const handleInputChange = event =>{
    setFileUploaded(event.target.files[0]);
  };

  const goBack = () => {
    setShowBlackScreen2(true);
    setTimeout(() => {
      setShowBlackScreen2(false);
    }, 3000);

    setTimeout(() => {
      setRegPage(false);
    }, 1000);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '2rem',
      height: '2rem',
      backgroundColor: 'transparent',
      border: state.isFocused ? '2px solid white' : '2px solid white',
      '&:hover': {
        borderColor: 'white',
      },
      cursor: 'text',
      outline: 'none',
      boxShadow: 'none',
    }),
    indicatorSeparator: () => { },
    valueContainer: (provided) => ({
      ...provided,
      height: '1.8rem'
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '1.8rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1002,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#111',
      backgroundColor: state.isSelected ? '#7CC6DB' : 'transparent',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
      zIndex: 1002,
      '&:hover': {
        backgroundColor: '#7CC6DB',
        color: '#fff'
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 1002,
      '&::-webkit-scrollbar': {
        width: '1px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#000',
      },
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
      padding: '5px',
    }),
    placeholder: () => ({ display: 'none', zIndex: 1002, }),
    container: (provided) => ({
      ...provided,
      overflow: 'visible',
      zIndex: 1002,
    }),
    input: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1002,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#111',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
    }),
  };
  const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '2rem',
      height: '2rem',
      backgroundColor: 'transparent',
      border: state.isFocused ? '2px solid white' : '2px solid white',
      '&:hover': {
        borderColor: 'white',
      },
      cursor: 'text',
      outline: 'none',
      boxShadow: 'none',
    }),
    indicatorSeparator: () => { },
    valueContainer: (provided) => ({
      ...provided,
      height: '1.8rem'
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '1.8rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1001,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#111',
      backgroundColor: state.isSelected ? '#7CC6DB' : 'transparent',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
      zIndex: 1001,
      '&:hover': {
        backgroundColor: '#7CC6DB',
        color: '#fff'
      },
    }),
    menu: (provided) => ({
      ...provided,
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
      padding: '5px'
    }),
    placeholder: () => ({ display: 'none', zIndex: 1001, }),
    container: (provided) => ({
      ...provided,
      overflow: 'visible',
      zIndex: 1001,
    }),
    input: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1001,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#111',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#fff',
      display:'none',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffd700'
      }
    }),
  };
  const customStyles3 = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '2rem',
      height: '2rem',
      backgroundColor: 'transparent',
      border: state.isFocused ? '2px solid white' : '2px solid white',
      '&:hover': {
        borderColor: 'white',
      },
      cursor: 'text',
      outline: 'none',
      boxShadow: 'none',
    }),
    indicatorSeparator: () => { },
    valueContainer: (provided) => ({
      ...provided,
      height: '1.8rem'
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '1.8rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1003,
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#111',
      backgroundColor: state.isSelected ? '#7CC6DB' : 'transparent',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
      zIndex: 1003,
      '&:hover': {
        backgroundColor: '#7CC6DB',
        color: '#fff'
      },
    }),
    menu: (provided) => ({
      ...provided,
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
      zIndex: 1003,
      padding: '5px'
    }),
    placeholder: () => ({ display: 'none', zIndex: 1003, }),
    container: (provided) => ({
      ...provided,
      overflow: 'visible',
      zIndex: 1003,
    }),
    input: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '.25rem',
      zIndex: 1003,
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#111',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#fff',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffd700'
      }
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
      // cursor: 'text',
      overflow: 'hidden',
      outline: 'none',
      boxShadow: 'none',
      // height: '2rem',
      minHeight: '2rem'
    }),
    indicatorSeparator: () => { },
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#111',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      // height: '1.8rem',
      height:'inherit',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '1rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '2px 8px',
      alignItems: '',
      webkitAlignItems: ''
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#111',
      backgroundColor: state.isSelected ? '#7CC6DB' : 'transparent',
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 500,
      paddingLeft: '1rem',
      '&:hover': {
        backgroundColor: '#7CC6DB',
        color: '#fff'
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      color: '#eee',
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 700,
      backgroundColor: '#fff',
      paddingLeft: '.25rem',
      alignItems: 'center',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'black',
      padding: '0',
      paddingLeft: '0',
      paddingRIght: '0',
      width:'14px',
      height:'14px',
      // cursor: 'pointer',
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#fff',
      cursor: 'pointer',
      '&:hover': {
        color: '#ffd700'
      }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: 'white',
      // cursor: 'pointer',
      padding: '5px'
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
      fontSize: '1.2rem',
      fontWeight: 700,
      paddingLeft: '1rem',
      // height: '3rem',
      overflow: 'hidden',
      margin: '0',
      paddingTop: '0',
      paddngBottom: '0',
    }),
  };

  function convertApiFormat(apiResponse) {
    if (apiResponse && apiResponse.data && Array.isArray(apiResponse.data)) {
      return apiResponse.data.map((item) => ({
        label: item.name,
        value: item.id,
      }));
    } else {
      return [];
    }
  }


  const [collegeOptions, setCollegeOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [sportsOptionsMale, setSportsOptionsMale] = useState([]);
  const [sportsOptionsFemale, setSportsOptionsFemale] = useState([]);
  const [sportsOptionsOther, setSportsOptionsOther] = useState([]);

  function convertArray(arr) {
    return arr.map(item => ({
      value: item.id,
      label: item.name
    }));
  }
  function createOptionsFromKeys(obj) {
    const stateOptions = Object.keys(obj).map(key => {
      return { value: key, label: key };
    });
  
    return stateOptions;
  }
  function createOptionsFromInputObject(inputObj) {
    const cityOptions = [];
  
    for (const state in inputObj.data) {
      const cities = inputObj.data[state];
      cities.forEach(city => {
        cityOptions.push({ value: city, label: city });
      });
    }
  
    return cityOptions;
  }

  const [placedata , setPlaceData] = useState([]);
  useEffect(() => {
    const fetchCollegeOptions = async () => {
      try {
        const response = await fetch('https://bitsbosm.org/2023/registrations/get_colleges/');
        const data = await response.json();

        const convertedOptions = convertApiFormat(data);
        setCollegeOptions(convertedOptions);
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };
    const fetchCityOptions = async () => {
      try {
        const response = await fetch('https://bitsbosm.org/2023/registrations/get_cities/');
        const data = await response.json();

        setStateOptions(createOptionsFromKeys(data["data"]))
        const convertedOptions = convertApiFormat(data);
        setPlaceData(data["data"]);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    const fetchSportsOptions = async () => {
      try {
        const response = await fetch('https://bitsbosm.org/2023/registrations/get_sports/');
        const data = await response.json();

        const other = [...data["male"] ,...data["female"]]

        setSportsOptionsOther(convertArray(other));
        setSportsOptionsMale(convertArray(data["male"]));
        setSportsOptionsFemale(convertArray(data["female"]));
      } catch (error) {
        // console.error('Error fetching sports:', error);
      }
    };

    fetchCollegeOptions();
    fetchCityOptions();
    // fetchStateOptions();
    fetchSportsOptions();
  }, []);

  function createArrayOfObjects(inputArray) {
    if(!inputArray)return;
    const outputArray = [];
  
    for (const value of inputArray) {
      outputArray.push({ value, label: value });
    }
  
    return outputArray;
  }


  const isFormFilled = () => {
    const requiredFields = ['name', 'email_id', 'phone', 'gender', 'college_id', 'city', 'state', 'sports', 'year_of_study'];
    const missingFields = [];

    for (const field of requiredFields) {
      const value = formData[field];
      if (Array.isArray(value) && value.length === 0) {
        missingFields.push(field);
      } else if (!Array.isArray(value) && (!value || value === '')) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {

      return false;
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
    year_of_study: '0',
    is_coach: false,
    img_url:'',
  });
  const changeKeyName = (formData) => {
    const updatedFormData = { ...formData };

    updatedFormData['sports_ids'] = updatedFormData['sports'];
    delete updatedFormData['sports'];

    return updatedFormData;
  };
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

  const [isCoach, setIsCoach] = useState(false);

  const [gender, setGender] = useState('');
  const handleChange2 = (event) => {
    const { id, value, name, type } = event.target;
    const updatedFormData = { ...formData };
    updatedFormData["is_coach"] = isCoach;
    if (name === 'is_coach') {
      setIsCoach(value === 'true');
      updatedFormData["is_coach"] = value === 'true';
    }
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
    updatedFormData["is_coach"] = isCoach;
    setFormData(updatedFormData);
  };
  const handleChange3 = (event) => {
    setGender(event.target.value)
    const { id, value, name, type } = event.target;
    const updatedFormData = { ...formData };
    updatedFormData["is_coach"] = isCoach;
    if (name === 'is_coach') {
      setIsCoach(value === 'true');
      updatedFormData["is_coach"] = value === 'true';
    }
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
    updatedFormData["is_coach"] = isCoach;
    setFormData(updatedFormData);
  };


  const handleChangeMulti = (selectedOptions, { name }) => {
    const updatedFormData = { ...formData };
    updatedFormData[name] = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData(updatedFormData);
  };


  const submitFormData = async (data) => {
    try {

      if (data.is_coach) {
        data.year_of_study = "0";
      }

      const response = await fetch('https://bitsbosm.org/2023/registrations/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        // console.log(response);
        response.json().then(
          parsedResponse => {
            const message = parsedResponse.message;
            setErrorMsg(message)
            // console.log(message);
          }
        );
        setError2(true)
      }
    } catch (error) {
      setErrorMsg("There was some error submiting your request. Please try again!");
      setError2(true)
    }
  };
  const [paramsg , setparamsg] =useState('* Upload your passport size photo');
  useEffect(()=>{
    if(fileUploaded){
      document.getElementById("previewPara").style.color="white";
      setparamsg("Click here to Preview your photo")
    }
  },[fileUploaded])


  const handleRegistration = () => {
    if (!isFormFilled(formData)) {
      setErrorMsg("Fill all the fields of the form");
      setError1(true)
      return;
    }
  
    if (!isValidEmail(formData.email_id)) {
      setErrorMsg('Invalid email address.');
      setError1(true)
      return;
    }
  
    if (!isValidPhoneNumber(formData.phone)) {
      setErrorMsg('Invalid phone number.');
      setError1(true)
      return;
    }
  
    if (fileUploaded === null) {
      // setErrorMsg('Upload Photo');
      // setError1(true)
      document.getElementById("previewPara").classList.add(`${styles["errorAnimation"]}`)
      setTimeout(() => {
        document.getElementById("previewPara").classList.remove(`${styles["errorAnimation"]}`)
      }, 1000);
      document.getElementById("previewPara").style.color="red";
      return;
    }
  
    const imageref = ref(storage, `images/${fileUploaded.name + v4()}`);
  
    uploadBytes(imageref, fileUploaded)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            const updatedFormData = { ...formData };
            updatedFormData["img_url"] = url;
            submitFormData(changeKeyName(updatedFormData));
          })
          .catch((error) => {
            setErrorMsg('Error getting image URL. Please try again.');
            setError2(true)
          });
      })
      .catch((error) => {
        setErrorMsg('Error uploading image. Please try again.');
        setError2(true)
      });
  };
  
  let sportsOptions = [];

  if(gender === 'M'){
    sportsOptions = sportsOptionsMale
  }else if(gender === 'F'){
    sportsOptions=sportsOptionsFemale
  }else if(gender === 'O'){
    sportsOptions=sportsOptionsOther
  }

  const onClickPara = ()=>{
    if(!fileUploaded)return;
    else if(fileUploaded){
      setpreview(true)
    }
  };

  return (<>
    {error1 && <Error1 onClose={closeError} text={errormsg} />}
    {error2 && <Error2 onClose={closeError} text={errormsg} />}
    {success && <Success onClose={closeError} text={errormsg} />}
    {preview && <Preview onClose={closeError} text={errormsg} img={fileUploaded} />}
    <section className={styles["regPage"]} >
      <div className={styles["rpIcons"]}  ></div>
      <div className={styles["rpHeadingContainer"]}>
        <img alt="" src={logo} onClick={goBack} id='reg-logo' />
        <h3>REGISTRATION</h3>
        <img alt='' src={cross} onClick={goBack} className={styles["cross"]} />
      </div>
      <div className={styles["regBox"]}>
        <form className={styles["regForm"]}>
          <div className={styles["formSingleInput"]}>
            <label htmlFor='name' className={styles["nameLabel"]}>Name</label>
            <input className={styles["regInput"]} id='name' onChange={handleChange2} />

            <label htmlFor='email_id'>E-mail</label>
            <input className={styles["regInput"]} id='email_id' onChange={handleChange2} />

            <label htmlFor='phone'>Phone</label>
            <input className={styles["regInput"]} id='phone' onChange={handleChange2} maxLength="10" />

            <label htmlFor='gender' className={styles.genderLabel}>Gender</label>
            <div className={styles["radioBtns"]}>

              <RadioButton
                name="gender"
                id="M"
                value="M"
                text="Male"
                onChange={handleChange3}
              />
              <RadioButton
                name="gender"
                id="F"
                value="F"
                text="Female"
                onChange={handleChange3}
              />
              <RadioButton
                name="gender"
                id="O"
                value="O"
                text="Other"
                onChange={handleChange3}
              />
            </div>

            <label htmlFor='is_coach' className={styles.genderLabel}>Are You a Coach?</label>
            <div className={styles["radioBtns"]}>
              <RadioButton
                name="is_coach"
                id="true"
                value={true}
                text="Yes"
                onChange={handleChange2}
                checked={isCoach}
              />
              <RadioButton
                name="is_coach"
                id="false"
                value={false}
                text="No"
                onChange={handleChange2}
                checked={!isCoach}
              />
            </div>
          </div>
          <div className={styles["formMultiInput"]}>
            <label htmlFor='college_id' className={styles["collegeLabel"]}>College</label>
            <Select options={collegeOptions} onChange={(selectedOption) => handleChange(selectedOption, { id: 'college_id' })} styles={customStyles3} />

            <label htmlFor='state'>State</label>
            <Select options={stateOptions} onChange={(selectedOption) => {setSelectedState(selectedOption); handleChange(selectedOption, { id: 'state' })}} styles={customStyles} />

            <label htmlFor='city'>City</label>
            <Select options={createArrayOfObjects(placedata[`${selectedState["value"]}`])} onChange={(selectedOption) => handleChange(selectedOption, { id: 'city' })} styles={customStyles2} noOptionsMessage={customNoOptionsMessage2} isClearable isSearchable />

            <label htmlFor='sports'>Sports</label>
            <Select noOptionsMessage={customNoOptionsMessage} options={sportsOptions} onChange={(selectedOptions) => handleChangeMulti(selectedOptions, { name: 'sports' })} styles={customStylesMulti} isMulti />

            <label htmlFor='year_of_study'>Year Of Study</label>
            <div className={`${styles["yearOfStudy"]} ${isCoach ? styles["disabledYearOfStudy"] : ""}`}>
              <input id='year_of_study1' type='radio' name='year_of_study' value="1" onChange={handleChange2} disabled={isCoach} checked={isCoach ? false : formData.year_of_study === '1'} />
              <label htmlFor='year_of_study1'>1</label>
              <input id='year_of_study2' type='radio' name='year_of_study' value="2" onChange={handleChange2} disabled={isCoach} checked={isCoach ? false : formData.year_of_study === '2'} />
              <label htmlFor='year_of_study2'>2</label>
              <input id='year_of_study3' type='radio' name='year_of_study' value="3" onChange={handleChange2} disabled={isCoach} checked={isCoach ? false : formData.year_of_study === '3'} />
              <label htmlFor='year_of_study3'>3</label>
              <input id='year_of_study4' type='radio' name='year_of_study' value="4" onChange={handleChange2} disabled={isCoach} checked={isCoach ? false : formData.year_of_study === '4'} />
              <label htmlFor='year_of_study4'>4</label>
              <input id='year_of_study5' type='radio' name='year_of_study' value="5" onChange={handleChange2} disabled={isCoach} checked={isCoach ? false : formData.year_of_study === '5'} />
              <label htmlFor='year_of_study5'>5</label>
            </div>
          </div>
        </form>
        <div className={styles["btnContainer"]}>
          <div>
            <button className={`${styles["submitBtn"]} ${styles["submitBtnMargin"]}`} onClick={imageUpload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 15.5V16.9C22.5 18.8602 22.5 19.8403 22.1185 20.589C21.783 21.2475 21.2475 21.783 20.589 22.1185C19.8403 22.5 18.8602 22.5 16.9 22.5H7.1C5.13982 22.5 4.15972 22.5 3.41103 22.1185C2.75247 21.783 2.21703 21.2475 1.88148 20.589C1.5 19.8403 1.5 18.8602 1.5 16.9V15.5M17.8333 7.33333L12 1.5M12 1.5L6.16667 7.33333M12 1.5V15.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>PHOTO</button>
            <input type="file"
              ref={hiddenFileInput}
              // style={{display:'none'}}
              hidden
              onChange={handleInputChange}
            />
            <button className={styles["submitBtn"]} onClick={handleRegistration}>REGISTER</button>
          </div>
          <p onClick={onClickPara} id='previewPara' onClose={closeError}>{paramsg}</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Form;