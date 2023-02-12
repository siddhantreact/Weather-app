
import './App.css';

import Home from '../src/Components/Home';
import About from './Components/About';
import Weather from './Components/Weather';


import {Routes ,Route} from "react-router-dom"

function App() {

 
  return (

    <div className="App">
       
      

      <Routes>

       <Route  exact path={"/"}  element={<Home/>} />
       <Route  exact path={"/about"}  element={<About/>}/>
       <Route  exact path={"/weather"}  element={<Weather/>}/>

      </Routes>




    </div>
  );
}

export default App;
