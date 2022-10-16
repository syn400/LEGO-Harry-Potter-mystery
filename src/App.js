import './styles.scss'
import {MinifigCard} from './components/minifigCard/minifigCard'
import {ShippingForm} from './components/shippingForm/shippingForm'
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    name: null,
    surname: null,
    phoneNum: null,
    email: null,
    date: null,
    adress: null,
    city: null,
    state: null,
    zipCode: null
  });

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
  });


  return (
    <div className="container">
        <ShippingForm setUsr={setUserData} data={userData} errors={errors} setErrors={setErrors} />
        <MinifigCard data={userData} setUsr={setUserData} errors={errors} setErrors={setErrors} />
    </div>
  );
}

export default App;
