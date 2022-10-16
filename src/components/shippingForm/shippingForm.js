import React from 'react'


export const ShippingForm = (props) => {


  
  return (
    <div className="formContainer">
      <h1 className='title'>Shipping details</h1>
      <form>
        <label htmlFor='name' className={props.errors.nameErr !== null ? 'error' : null}>
          <p>Name {props.errors.nameErr !== null ? <span>{props.errors.nameErr}</span> : null}</p>
          <input type="text" onBlur={(e)=> {
            if(e.target.value.length < 1) {
              props.setErrors({...props.errors, nameErr: 'Min 1 character.'})
             } else if (e.target.value.length >= 255){
              props.setErrors({...props.errors, nameErr: 'Max 255 characters.'})
             } else {
               props.setErrors({...props.errors, nameErr: null})
               props.setUsr({...props.data, name: e.target.value})
             } 
          }}
             id='name'/>
        </label>

        <label htmlFor='surname' className={props.errors.surnameErr !== null ? 'error' : null}>
          <p>Surname {props.errors.surnameErr !== null ? <span>{props.errors.surnameErr}</span> : null}</p>
          <input type="text" id='surname' 
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              props.setErrors({...props.errors, surnameErr: 'Min 1 character.'})
             } else if (e.target.value.length >= 255){
              props.setErrors({...props.errors, surnameErr: 'Max 255 characters.'})
             } else {
               props.setErrors({...props.errors, surnameErr: null})
               props.setUsr({...props.data, surname: e.target.value})
             } 
          }} />
        </label>

        <label htmlFor='phoneNumber' className={props.errors.phoneNumErr !== null ? 'error' : null}>
          <p>Phone Number {props.errors.phoneNumErr !== null ? <span>{props.errors.phoneNumErr}</span> : null}</p>
          <input type="tel" maxLength='13' id='phoneNumber' pattern="\d*"
          onBlur={(e)=> {
            if(!/^[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4}$/im.test(e.target.value)) {
              props.setErrors({...props.errors, phoneNumErr: 'Invalid phone format - (123)123-1234'})
             } else {
               props.setErrors({...props.errors, phoneNumErr: null})
               props.setUsr({...props.data, phoneNum: e.target.value})
             } 
          }}/>
        </label>

        <label htmlFor='email' className={props.errors.emailErr !== null ? 'error' : null}>
          <p>Email {props.errors.emailErr !== null ? <span>{props.errors.emailErr}</span> : null}</p>
          <input type="email" id='email' 
          onBlur={(e)=> {
            if(!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              ).test(e.target.value)) {
              props.setErrors({...props.errors, emailErr: 'Invalid email format - example@server.com'})
             } else {
               props.setErrors({...props.errors, emailErr: null})
               props.setUsr({...props.data, email: e.target.value})
             } 
          }}/>
        </label>
        
        <label htmlFor='dateOfBirth' className={props.errors.dateErr !== null ? 'error' : null}>
          <p>Date of birth {props.errors.dateErr !== null ? <span>{props.errors.dateErr}</span> : null}</p>
          <input type="text" maxLength='10' id='dateOfBirth' pattern="\d*" 
          onBlur={(e)=> {
            const date = new Date();
            const currentYear = date.getFullYear();

            if(!/^(?:0[1-9]|1[012])([/])(?:0[1-9]|[12]\d|3[01])\1(?:19|20)\d\d$/.test(e.target.value)) {
              props.setErrors({...props.errors, dateErr: 'Invalid date format - mm/dd/yyyy'})
             } else if (e.target.value.slice(6,10) >= currentYear) {
              props.setErrors({...props.errors, dateErr: 'Your date must be in the past'})
             } else {
               props.setErrors({...props.errors, dateErr: null})
               props.setUsr({...props.data, date: e.target.value})
             } 
          }}/>
        </label>

        <label htmlFor='adress' className={props.errors.adressErr !== null ? 'error' : null}>
          <p>Adress {props.errors.adressErr !== null ? <span>{props.errors.adressErr}</span> : null}</p>
          <input type="text" id='adress'
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              props.setErrors({...props.errors, adressErr: 'Adress must have min 1 character.'})
             } else if (e.target.value.length >= 255){
              props.setErrors({...props.errors, adressErr: 'Adress can have maximum 255 characters.'})
             } else {
               props.setErrors({...props.errors, adressErr: null})
               props.setUsr({...props.data, adress: e.target.value})
             } 
          }}/>
        </label>

        <label htmlFor='city' className={props.errors.cityErr !== null ? 'error' : null}>
          <p>City {props.errors.cityErr !== null ? <span>{props.errors.cityErr}</span> : null}</p>
          <input type="text" id='city'
          onBlur={(e)=> {
            if(e.target.value.length < 1) {
              props.setErrors({...props.errors, cityErr: 'City must have min 1 character.'})
             } else if (e.target.value.length >= 255){
              props.setErrors({...props.errors, cityErr: 'City can have maximum 255 characters.'})
             } else {
               props.setErrors({...props.errors, cityErr: null})
               props.setUsr({...props.data, city: e.target.value})
             } 
          }}/>
        </label>

        <label htmlFor='state' className={props.errors.stateErr !== null ? 'error' : null}>
          <p>State {props.errors.stateErr !== null ? <span>{props.errors.stateErr}</span> : null}</p>
          <select id='state' defaultValue="placeholder" 
          onBlur={(e)=> {
            if(e.target.value === 'placeholder') {
              props.setErrors({...props.errors, stateErr: 'You have to choose state'})
             } else {
               props.setErrors({...props.errors, stateErr: null})
               props.setUsr({...props.data, state: e.target.value})
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

        <label htmlFor='zipCode' className={props.errors.zipCodeErr !== null ? 'error' : null}>
          <p>Zip Code {props.errors.zipCodeErr !== null ? <span>{props.errors.zipCodeErr}</span> : null} </p>
          <input type="text" maxLength='10' id='zipCode' pattern="\d*"
          onBlur={(e)=> {
            if(!/^\d{5}(-\d{4})?$/d.test(e.target.value)) {
              props.setErrors({...props.errors, zipCodeErr: 'Invalid zip code format - 12345 or 12345-6789'})
             } else {
               props.setErrors({...props.errors, zipCodeErr: null})
               props.setUsr({...props.data, zipCode: e.target.value})
             } 
          }}/>
        </label>
      </form>
    </div>
  )
}
