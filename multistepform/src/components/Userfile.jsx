import React, { useState } from 'react'
import Userdetail from './Userdetail';
import Personaldetail from './Personaldetail';
import Confirm from './Confirm';
import Success from './Success';

const Userfile = () => {
    const[step,setStep]=useState(1);
    const[formData,setFormData] = useState({
       firstname:'',
       lastname:'',
       email:'',
       occupation:'',
       city:'',
        bio: ''
    });
    //proceed to next step
    const nextstep =() =>{
        setStep(step+1);
    };
    //go back to previous state
    const prevstep =() =>{
        setStep(step-1);
    };

    const handlechange = input => e => {
        setFormData({...formData,[input]: e.target.value});
    };
    const {firstname,lastname,email,occupation,city,bio}= formData;
    const values = {firstname,lastname,email,occupation,city,bio}
    switch(step){
        case 1:
            return(
              <Userdetail
              nextstep = {nextstep}
              handlechange = {handlechange}
              values ={values}
              />  
            )
        case 2:
            return(
              <Personaldetail
              nextstep = {nextstep}
              prevstep = {prevstep}
              handlechange = {handlechange}
              values ={values}
            />
            )
        case 3:
            return(
               <Confirm
               nextstep = {nextstep}
              prevstep = {prevstep}
              handlechange = {handlechange}
              values ={values}
               /> 
            )
        case 4:
            return(
               <Success/>
            )
    }
  
}

export default Userfile