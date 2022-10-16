import './styles.scss'
import {MinifigCard} from './components/minifigCard/minifigCard'
import {ShippingForm} from './components/shippingForm/shippingForm'
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState()
  return (
    <div className="container">
        <ShippingForm setUsr={setUserData}/>
        <MinifigCard data={userData} />
    </div>
  );
}

export default App;
