
import ErrorExample from './components/01-error-example';
import UseStateArray from './components/UseStateArray';

import UseStateGotcha from "./components/UseStateGotcha"
import UseEffect from "./components/UseEffect"
import Multiple_useEffect from './components/Multiple_useEffect/'
import Fetch from "./components/fetch"
import MultiReturn from "./components/MultiReturn"
import MultipleReturn_Fetch from "./components/MultipleReturn_Fetch"
// import ToggleChallence from "./components/ToggleChallence"
import LoginOut from "./components/LoginOut"
import CleanUpFunction from "./components/CleanUpFunction"

import List from "./components/list"
import ControlledInputs from "./components/starter/01-controlled-inputs"
import UserChallenge from "./components/starter/02-user-challenge"
import MultipleInputs from "./components/starter/03-multiple-inputs"
import OtherInputs from "./components/starter/04-other-inputs"
import UncontrolledInputs from "./components/starter/05-form-data"
import UseRefBasics from "./components/UseRefBasics"
import Toggle from "./components/Toggle"
import FetchPerson from "./components/FetchPerson"
import CHooks from "./components/CustomHooks/CHooks"
import UserContainer from "./Starter/UserContainer"
import Starter from './Starter/Navbar'
import Starter2 from './Starter/NavLinks'
import Starter3 from './Starter/UserContainer'

import Use_Reducer from "./UseReducer/Use_Reducer"
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        
        
        
       
{/* < Sidenap />*/}
     {/*< Main /> */}
     {/* <ErrorExample />
    <UseStateArray/> */}
    {/* < UseStateGotcha /> */}

    {/* <  UseEffect />

    <  Multiple_useEffect /> */}

    {/* < Fetch /> */}
    {/* < MultiReturn /> */}
  {/* <MultipleReturn_Fetch /> */}
  {/* < ToggleChallence /> */}
  {/* <  LoginOut /> */}

  {/* <CleanUpFunction/> */}


  {/* <  List /> */}
  {/* < ControlledInputs /> */}
{/* < UserChallenge /> */}
{/* < MultipleInputs /> 
<OtherInputs/> */}
{/* <UncontrolledInputs/> */}

{/* <UseRefBasics/> */}
{/* <Toggle/>
<FetchPerson/> */}
{/* <CHooks/> */}
{/* <Starter/>
<Starter2/>
<Starter3/> */}

{/* <Use_Reducer/> */}
<nav>My Navbar</nav>
<Routes>


  
  <Route path='/' element={<  UseStateArray />}/>
  <Route path='other' element={< OtherInputs />}>
  <Route path='use' element={< Use_Reducer />}/>
  <Route path='toggle' element={< Toggle />}/>
  </Route>
  <Route path='fetch' element={< FetchPerson />}/>
  <Route path='m' element={< Multiple_useEffect />}/>

  <Route path='container' element={<UserContainer />}/>
</Routes>
<footer>My Footer</footer>
</BrowserRouter>
      </div>
      
    </>
  )
};

export default App
