import React, { useRef, useState } from 'react'


export const ShippingForm = (props) => {

  const namRef = useRef()
  const surnameRef = useRef()
  const phoneNumRef = useRef()
  const emailRef = useRef()
  const dateOfBirthRef = useRef()
  const adressRef = useRef()
  const cityRef = useRef()
  const stateRef = useRef()
  const zipCodeRef = useRef()

  const [errors, setErrors] = useState({
    nameErr: null,
    surnameErr: null,
    phoneNumErr: null,
    emailErr: null,
    dateErr: null,
    adressErr: null,
    cityErr: null,
    stateErr: null,
    zipCodeErr: null
  })


  
  return (
    <div className="formContainer">
      <h1 className='title'>Shipping details</h1>
      <form>
        <label htmlFor='name' className={errors.nameErr !== null ? 'error' : null}>
          <p>Name {errors.nameErr !== null ? <span>{errors.nameErr}</span> : null}</p>
          <input type="text" ref={namRef} onBlur={(e)=> {
            if(e.target.value.length < 1) {
              setErrors({...errors, nameErr: 'Min 1 character.'})
             } else if (e.target.value.length >= 255){
              setErrors({...errors, nameErr: 'Max 255 characters.'})
             } else {
               setErrors({...errors, nameErr: null})
             } 
          }}
             id='name'/>
        </label>

        <label htmlFor='surname' className={errors.surnameErr !== null ? 'error' : null}>
          <p>Surname {errors.surnameErr !== null ? <span>{errors.surnameErr}</span> : null}</p>
          <input type="text" ref={surnameRef} id='surname' 
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              setErrors({...errors, surnameErr: 'Min 1 character.'})
             } else if (e.target.value.length >= 255){
              setErrors({...errors, surnameErr: 'Max 255 characters.'})
             } else {
               setErrors({...errors, surnameErr: null})
             } 
          }}/>
        </label>

        <label htmlFor='phoneNumber' className={errors.phoneNumErr !== null ? 'error' : null}>
          <p>Phone Number {errors.phoneNumErr !== null ? <span>{errors.phoneNumErr}</span> : null}</p>
          <input type="tel" ref={phoneNumRef} id='phoneNumber' pattern="\d*"
          onBlur={(e)=> {
            if(!/^[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4,6}$/im.test(e.target.value)) {
              setErrors({...errors, phoneNumErr: 'Invalid phone format - (123)123-1234'})
             } else {
               setErrors({...errors, phoneNumErr: null})
             } 
          }}/>
        </label>

        <label htmlFor='email' className={errors.emailErr !== null ? 'error' : null}>
          <p>Email {errors.emailErr !== null ? <span>{errors.emailErr}</span> : null}</p>
          <input type="email" ref={emailRef} id='email' 
          onBlur={(e)=> {
            if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ).test(e.target.value)) {
              setErrors({...errors, emailErr: 'Invalid email format - example@server.com'})
             } else {
               setErrors({...errors, emailErr: null})
             } 
          }}/>
        </label>
        
        <label htmlFor='dateOfBirth' className={errors.dateErr !== null ? 'error' : null}>
          <p>Date of birth {errors.dateErr !== null ? <span>{errors.dateErr}</span> : null}</p>
          <input type="text" ref={dateOfBirthRef} id='dateOfBirth' pattern="\d*" 
          onBlur={(e)=> {
            if(!/^(?:0[1-9]|1[012])([/])(?:0[1-9]|[12]\d|3[01])\1(?:19|20)\d\d$/.test(e.target.value)) {
              setErrors({...errors, dateErr: 'Invalid date format - mm/dd/yyyy'})
             } else {
               setErrors({...errors, dateErr: null})
             } 
          }}/>
        </label>

        <label htmlFor='adress' className={errors.adressErr !== null ? 'error' : null}>
          <p>Adress {errors.adressErr !== null ? <span>{errors.adressErr}</span> : null}</p>
          <input type="text" ref={adressRef} id='adress'
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              setErrors({...errors, adressErr: 'Adress must have min 1 character.'})
             } else if (e.target.value.length >= 255){
              setErrors({...errors, adressErr: 'Adress can have maximum 255 characters.'})
             } else {
               setErrors({...errors, adressErr: null})
             } 
          }}/>
        </label>

        <label htmlFor='city' className={errors.cityErr !== null ? 'error' : null}>
          <p>City {errors.cityErr !== null ? <span>{errors.cityErr}</span> : null}</p>
          <input type="text" ref={cityRef} id='city'
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              setErrors({...errors, cityErr: 'City must have min 1 character.'})
             } else if (e.target.value.length >= 255){
              setErrors({...errors, cityErr: 'City can have maximum 255 characters.'})
             } else {
               setErrors({...errors, cityErr: null})
             } 
          }}/>
        </label>

        <label htmlFor='state' className={errors.stateErr !== null ? 'error' : null}>
          <p>State {errors.stateErr !== null ? <span>{errors.stateErr}</span> : null}</p>
          <select id='state' ref={stateRef} defaultValue="placeholder" 
          onBlur={(e)=> {
            if(e.target.value === 'placeholder') {
              setErrors({...errors, stateErr: 'You have to choose state'})
             } else {
               setErrors({...errors, stateErr: null})
             } 
          }}>
            <option disabled value='placeholder'>Choose your state</option>
            <option value="Alabama">Alabama (AL)</option>
            <option value="Alaska">Alaska (AK)</option>
            <option value="Arizona">Arizona (AZ)</option>
            <option value="Arkansas">Arkansas (AR)</option>
            <option value="California">California (CA)</option>
            <option value="Colorado">Colorado (CO)</option>
            <option value="Connecticut">Connecticut (CT)</option>
            <option value="Delaware">Delaware (DE)</option>
            <option value="District Of Columbia">District Of Columbia (DC)</option>
            <option value="Florida">Florida (FL)</option>
            <option value="Georgia">Georgia (GA)</option>
            <option value="Hawaii">Hawaii (HI)</option>
            <option value="Idaho">Idaho (ID)</option>
            <option value="Illinois">Illinois (IL)</option>
            <option value="Indiana">Indiana (IN)</option>
            <option value="Iowa">Iowa (IA)</option>
            <option value="Kansas">Kansas (KS)</option>
            <option value="Kentucky">Kentucky (KY)</option>
            <option value="Louisiana">Louisiana (LA)</option>
            <option value="Maine">Maine (ME)</option>
            <option value="Maryland">Maryland (MD)</option>
            <option value="Massachusetts">Massachusetts (MA)</option>
            <option value="Michigan">Michigan (MI)</option>
            <option value="Minnesota">Minnesota (MN)</option>
            <option value="Mississippi">Mississippi (MS)</option>
            <option value="Missouri">Missouri (MO)</option>
            <option value="Montana">Montana (MT)</option>
            <option value="Nebraska">Nebraska (NE)</option>
            <option value="Nevada">Nevada (NV)</option>
            <option value="New Hampshire">New Hampshire (NH)</option>
            <option value="New Jersey">New Jersey (NJ)</option>
            <option value="New Mexico">New Mexico (NM)</option>
            <option value="New York">New York (NY)</option>
            <option value="North">North Carolina (NC)</option>
            <option value="North">North Dakota (ND)</option>
            <option value="Ohio">Ohio (OH)</option>
            <option value="Oklahoma">Oklahoma (OK)</option>
            <option value="Oregon">Oregon (OR)</option>
            <option value="Pennsylvania">Pennsylvania (PA)</option>
            <option value="Rhode Island">Rhode Island (RI)</option>
            <option value="South Carolina">South Carolina (SC)</option>
            <option value="South Dakota">South Dakota (SD)</option>
            <option value="Tennessee">Tennessee (TN)</option>
            <option value="Texas">Texas (TX)</option>
            <option value="Utah">Utah (UT)</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </label>

        <label htmlFor='zipCode' className={errors.zipCodeErr !== null ? 'error' : null}>
          <p>Zip Code {errors.zipCodeErr !== null ? <span>{errors.zipCodeErr}</span> : null} </p>
          <input type="text" ref={zipCodeRef} id='zipCode' pattern="\d*"
          onBlur={(e)=> {
            if(!/^\d{5}(-\d{4})?$/d.test(e.target.value)) {
              setErrors({...errors, zipCodeErr: 'Invalid zip code format - 12345 or 12345-6789'})
             } else {
               setErrors({...errors, zipCodeErr: null})
             } 
          }}/>
        </label>
      </form>
    </div>
  )
}
