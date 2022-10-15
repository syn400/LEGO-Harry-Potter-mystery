import React from 'react'


export const ShippingForm = () => {
  return (
    <div className="formContainer">
      <h1 className='title'>Shipping details</h1>
      <form>
        <label htmlFor='name'>
          <p>Name</p>
          <input type="text" id='name'/>
        </label>

        <label htmlFor='surname'>
          <p>Surname</p>
          <input type="text" id='surname'/>
        </label>

        <label htmlFor='phoneNumber'>
          <p>Phone Number</p>
          <input type="tel" id='phoneNumber'/>
        </label>

        <label htmlFor='email'>
          <p>Email</p>
          <input type="email" id='email'/>
        </label>
        
        <label htmlFor='dateOfBirth'>
          <p>Date of birth</p>
          <input type="text" id='dateOfBirth'/>
        </label>

        <label htmlFor='adress'>
          <p>Adress</p>
          <input type="text" id='adress'/>
        </label>

        <label htmlFor='city'>
          <p>City</p>
          <input type="text" id='city'/>
        </label>

        <label htmlFor='state'>
          <p>State</p>
          <select id='state' defaultValue="placeholder">
            <option disabled value='placeholder'>Choose your state</option>
            <option value="AL">Alabama (AL)</option>
            <option value="AK">Alaska (AK)</option>
            <option value="AZ">Arizona (AZ)</option>
            <option value="AR">Arkansas (AR)</option>
            <option value="CA">California (CA)</option>
            <option value="CO">Colorado (CO)</option>
            <option value="CT">Connecticut (CT)</option>
            <option value="DE">Delaware (DE)</option>
            <option value="DC">District Of Columbia (DC)</option>
            <option value="FL">Florida (FL)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="HI">Hawaii (HI)</option>
            <option value="ID">Idaho (ID)</option>
            <option value="IL">Illinois (IL)</option>
            <option value="IN">Indiana (IN)</option>
            <option value="IA">Iowa (IA)</option>
            <option value="KS">Kansas (KS)</option>
            <option value="KY">Kentucky (KY)</option>
            <option value="LA">Louisiana (LA)</option>
            <option value="ME">Maine (ME)</option>
            <option value="MD">Maryland (MD)</option>
            <option value="MA">Massachusetts (MA)</option>
            <option value="MI">Michigan (MI)</option>
            <option value="MN">Minnesota (MN)</option>
            <option value="MS">Mississippi (MS)</option>
            <option value="MO">Missouri (MO)</option>
            <option value="MT">Montana (MT)</option>
            <option value="NE">Nebraska (NE)</option>
            <option value="NV">Nevada (NV)</option>
            <option value="NH">New Hampshire (NH)</option>
            <option value="NJ">New Jersey (NJ)</option>
            <option value="NM">New Mexico (NM)</option>
            <option value="NY">New York (NY)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="ND">North Dakota (ND)</option>
            <option value="OH">Ohio (OH)</option>
            <option value="OK">Oklahoma (OK)</option>
            <option value="OR">Oregon (OR)</option>
            <option value="PA">Pennsylvania (PA)</option>
            <option value="RI">Rhode Island (RI)</option>
            <option value="SC">South Carolina (SC)</option>
            <option value="SD">South Dakota (SD)</option>
            <option value="TN">Tennessee (TN)</option>
            <option value="TX">Texas (TX)</option>
            <option value="UT">Utah (UT)</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </label>

        <label htmlFor='zipCode'>
          <p>Zip Code</p>
          <input type="text" id='zipCode'/>
        </label>
      </form>
    </div>
  )
}
