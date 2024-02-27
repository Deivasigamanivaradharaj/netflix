import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Landingpage/Home';
import Login from './Login/Login';
import LoginHelp from './Login/LoginHelp';
import Signup from './Signup/Signup';
import Registration from './Signup/Registration';
import RegForm from './Signup/RegForm';
import ChoosePlan from './Signup/ChoosePlan';
import PlanForm from './Signup/PlanForm';
import PaymentPicker from './Signup/PaymentPicker';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='LoginHelp' element={<LoginHelp></LoginHelp>}></Route>
        <Route path='signup' element={<Signup></Signup>}>
          <Route path='registration' element={<Registration></Registration>}></Route>
          <Route path='regform' element={<RegForm></RegForm>}></Route>
          <Route path='chooseplan' element={<ChoosePlan></ChoosePlan>}></Route>
          <Route path='planform' element={<PlanForm></PlanForm>}></Route>
          <Route path='paymentPicker' element={<PaymentPicker></PaymentPicker>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
