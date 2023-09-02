import React, { useState, useEffect , useRef } from 'react';
import cross from "../images/cross.svg";
import logo from "../images/logo.svg"
import * as styles from "../Styles/Content.module.css";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import RadioButton from './RadioBtn';
import RadioButton2 from './RadioBtn';
import {storage} from "../Components/firebase";
import { uploadBytes , listAll , getDownloadURL} from "firebase/storage";
import { ref } from 'firebase/storage';
import statesData from '../Components/States.json'
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
  const [isMessFood , setIsMessFood] = useState(false);
  const [photoText , setPhotoText] = useState("*Please upload your passport size photo")

  const closeError=()=>{
    setError1(false);
    setError2(false);
    setSuccess(false);  
    setpreview(false)
  }

  const customNoOptionsMessage = () => "Please select a Gender First";
  const customNoOptionsMessage2 = () => "Please select a State First";
  const customNoOptionsMessage3 = () => "Wait for states to load";

  const [fileUploaded , setFileUploaded] = useState(null);
  const [selectedState , setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);


  const hiddenFileInput = useRef(null);

  const imageUpload = event => {
    if(fileUploaded === null){
      hiddenFileInput.current.click();
    }
    else{
      setpreview(true);
    }
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
      margin: '0',
      paddingTop: '0',
      paddngBottom: '0',
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
      margin: '0',
      paddingTop: '0',
      paddngBottom: '0',
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
      margin: '0',
      paddingTop: '0',
      paddngBottom: '0',
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
      padding: '2px 2px',
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
    const stateOptions = obj.map(item => {
      return { value: item.name, label: item.name };
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
    // const fetchCityOptions = async () => {
    //   try {
    //     const response = await fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json');
    //     const data = await response.json();
    //     console.log(data[101]["states"])

    //     setStateOptions(createOptionsFromKeys(data[101]["states"]))
    //     const convertedOptions = convertApiFormat(data);
    //     setPlaceData(data[101]["states"]);
    //   } catch (error) {
    //     console.error('Error fetching cities:', error);
    //   }
    // };

    const fetchCityOptions = async () => {
      try {
        // console.log(statesData);
        setStateOptions(createOptionsFromKeys(statesData));
        const convertedOptions = convertApiFormat(statesData);
        setPlaceData(statesData);
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

  useEffect(()=>{

  },[selectedState])

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

  const [phone , setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email_id: '',
    phone: phone,
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
  const handleStateChange = (selectedOption) => {
    setSelectedCity(null); 
    setSelectedState(selectedOption); 
    const updatedFormData = { ...formData };
    updatedFormData["state"] = selectedOption;
    setFormData(updatedFormData)
  };
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption); 
    const updatedFormData = {...formData};
    if(selectedOption){
    updatedFormData["city"] = selectedOption.value;}
    setFormData(updatedFormData)
    
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
    console.log(event.target)
    const { id, value, name, type } = event.target;
    // console.log(id)
    // console.log(type)
    // console.log(value)
    // console.log(name)
    if(id === 'phone'){
      setPhone(value.replace(/\D/g,''));
    }
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
  const handleChangeMess = (event) => {
    console.log(event.target.value)
    let boolean = false;
    if(event.target.value === 'true')boolean = true;
    else boolean = false;
    console.log(boolean)
    const { id, value, name, type } = event.target;
    const updatedFormData = { ...formData };
    updatedFormData["is_coach"] = isCoach;
    if (name === 'is_messfood') {
      setIsMessFood(boolean);
      updatedFormData["is_messfood"] = boolean;
    }
    updatedFormData["is_coach"] = isCoach;
    setFormData(updatedFormData);
  };
  const handleChangeCoach = (event) => {
    console.log(event.target.value)
    let boolean = false;
    if(event.target.value === 'true')boolean = true;
    else boolean = false;
    console.log(boolean)
    const { id, value, name, type } = event.target;
    const updatedFormData = { ...formData };
    updatedFormData["is_coach"] = isCoach;
    if (name === 'is_coach') {
      setIsCoach(boolean);
      updatedFormData["is_coach"] = boolean;
    }
    updatedFormData["is_coach"] = boolean;
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


  // const digitsOnly=(e)=>{
  //   const phonePattern = /^\d+$/;
  //   const result = e.target.value.replace(/\D/g,'')
  //   console.log(e.target.value);
  //   console.log(result)
  //   setPhone(e.target.value)
  // };

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

      const response = await fetch('https://test.bitsbosm.org/2023/registrations/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      document.getElementById("registerbtn").style.pointerEvents="all";

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
      // document.getElementById("previewPara").style.color="white";
      // setparamsg("Photo uploaded successfully");
      setPhotoText("Click to edit Photo")
    }
  },[fileUploaded])


  const handleRegistration = () => {
    // console.log(formData)
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
       setErrorMsg('Upload Photo');
       setError1(true)
      setTimeout(() => {
      }, 1000);
      return;
    }
    
    document.getElementById("registerbtn").style.pointerEvents='none';
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

  const editPhoto =()=>{
    hiddenFileInput.current.click();
    // console.log("clicked")
  };
  // console.log(selectedState)
  // console.log(placedata)
  function filterObjectsByName(objectsArray, searchName) {
    return objectsArray.filter(object => object.name === searchName);
  }
  // console.log(filterObjectsByName(placedata , selectedState["value"]))
  // console.log(filterObjectsByName(placedata , selectedState["value"])[0]["cities"])
  // console.log(createOptionsFromKeys(filterObjectsByName(placedata , selectedState["value"])[0]["cities"]))
  let cities =[];
  if(placedata && filterObjectsByName(placedata , selectedState["value"]) && filterObjectsByName(placedata , selectedState["value"])[0]){
    cities = createOptionsFromKeys(filterObjectsByName(placedata , selectedState["value"])[0]["cities"]);
  }

  // console.log(formData)
  return (<>
    {error1 && <Error1 onClose={closeError} text={errormsg} />}
    {error2 && <Error2 onClose={closeError} text={errormsg} />}
    {success && <Success onClose={closeError} text={errormsg} />}
    {preview && <Preview onClose={closeError} onEditPhoto={editPhoto} text={errormsg} img={fileUploaded} />}
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
            <input className={styles["regInput"]} id='phone' value={phone} onChange={handleChange2} maxLength="10" />

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
                onChange={handleChangeCoach}
                checked={isCoach}
              />
              <RadioButton
                name="is_coach"
                id="false"
                value={false}
                text="No"
                onChange={handleChangeCoach}
                checked={!isCoach}
              />
            </div>

            <label htmlFor='is_messfood' className={styles.messLabel}>Sign up for Mess food? <span>(*Chargeable)</span></label>
            <div className={styles["radioBtns"]}>
              <RadioButton2
                name="is_messfood"
                id="true2"
                value={true}
                text="Yes"
                onChange={handleChangeMess}
                checked={isMessFood}
              />
              <RadioButton2
                name="is_messfood"
                id="false2"
                value={false}
                text="No"
                onChange={handleChangeMess}
                checked={!isMessFood}
              />
            </div>

          </div>
          <div className={styles["formMultiInput"]}>
            <label htmlFor='college_id' className={styles["collegeLabel"]}>College</label>
            <Select options={collegeOptions} onChange={(selectedOption) => handleChange(selectedOption, { id: 'college_id' })} styles={customStyles3} />

            <label htmlFor='state'>State</label>
            <Select  value={selectedState} options={stateOptions} onChange={(selectedOption) => {handleStateChange(selectedOption); handleChange(selectedOption, { id: 'state' })}} styles={customStyles} noOptionsMessage={customNoOptionsMessage3} />

            <label htmlFor='city'>City</label>
            <CreatableSelect  value={selectedCity} options={cities} onChange={(selectedOption) => handleCityChange(selectedOption, { id: 'city' })} styles={customStyles2} noOptionsMessage={customNoOptionsMessage2} isClearable isSearchable />

            <label htmlFor='sports'>Sports</label>
            <Select noOptionsMessage={customNoOptionsMessage} options={sportsOptions} onChange={(selectedOptions) => handleChangeMulti(selectedOptions, { name: 'sports' })} styles={customStylesMulti} isMulti />



            <label htmlFor='photo'>Photo</label>
            <div className={`${styles["regInput"]} ${styles["photoInputHover"]}`} id='photo' onChange={handleChange2} placeholder='*Please upload your passport size photo' onClick={imageUpload}>
              <span>{photoText}</span>
            </div>




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
            <button className={`${styles["submitBtn"]} ${styles["submitBtnMargin"]}`} onClick={imageUpload} style={{display: 'none'}}>
              {!fileUploaded && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 15.5V16.9C22.5 18.8602 22.5 19.8403 22.1185 20.589C21.783 21.2475 21.2475 21.783 20.589 22.1185C19.8403 22.5 18.8602 22.5 16.9 22.5H7.1C5.13982 22.5 4.15972 22.5 3.41103 22.1185C2.75247 21.783 2.21703 21.2475 1.88148 20.589C1.5 19.8403 1.5 18.8602 1.5 16.9V15.5M17.8333 7.33333L12 1.5M12 1.5L6.16667 7.33333M12 1.5V15.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
              {fileUploaded && <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 9.00006L13 5.00006M1.5 20.5001L4.88437 20.124C5.29786 20.0781 5.5046 20.0551 5.69785 19.9925C5.86929 19.937 6.03245 19.8586 6.18289 19.7594C6.35245 19.6476 6.49955 19.5005 6.79373 19.2063L20 6.00006C21.1046 4.89549 21.1046 3.10463 20 2.00006C18.8955 0.895489 17.1046 0.895488 16 2.00006L2.79373 15.2063C2.49955 15.5005 2.35246 15.6476 2.24064 15.8172C2.14143 15.9676 2.06301 16.1308 2.00751 16.3022C1.94496 16.4955 1.92198 16.7022 1.87604 17.1157L1.5 20.5001Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>}
              PHOTO</button>
            <input type="file"
              ref={hiddenFileInput}
              // style={{display:'none'}}
              hidden
              onChange={handleInputChange}
            />
            <button className={styles["submitBtn"]} id="registerbtn" onClick={handleRegistration}>REGISTER</button>
          </div>
          {/* <p id='previewPara' onClose={closeError}>{paramsg}</p> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default Form;
