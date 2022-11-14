
import './App.css';
import HomePage from './Component/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Csignup from './Component/Csignup';
import Osignup from './Component/Osignup';
import Customerhome from './Component/Customerhome';
import Ownerhome from './Component/Ownerhome';
import Bookinghome from './Component/Bookinghome';
import SavePayment from './Component/SavePayment';
import Adminhome from './Component/Adminhome';
import ServiceCar from './Component/ServiceCar';
import ServiceBike from './Component/ServiceBike';

import AboutHome from './Component/Abouthome';
import Footer from './Component/Footer';
import Update from './Component/Update';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" component={HomePage} exact/>
      <Route path="/abouthome" component={AboutHome} />
      <Route path="/login" component={LoginPage} />
      <Route path="/creg" component={Csignup} />
      <Route path="/oreg" component={Osignup} />
      <Route path="/customerhome" component={Customerhome}/>
      <Route path="/ownerhome" component={Ownerhome}/>
      <Route path="/savebooking" component={Bookinghome} />
      <Route path="/savepayment" component={SavePayment} />
      <Route path="/adminhome" component={Adminhome} />
      <Route path="/servicecar" component={ServiceCar} />
      <Route path="/servicebike" component={ServiceBike} />
      <Route path="/footer" component={Footer} />
      <Route path="/update" component={Update} />
      </Router>
      
</div>
  );
}

export default App;
