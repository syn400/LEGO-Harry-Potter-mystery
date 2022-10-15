import './styles.scss'
import {MinifigCard} from './components/minifigCard'
import {ShippingForm} from './components/shippingForm'

function App() {

  return (
    <div className="App">
      <div className="container">
        <ShippingForm />
        <MinifigCard />
      </div>
    </div>
  );
}

export default App;
