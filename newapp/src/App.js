
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Dates from './components/Dates';
import Nav from './components/Nav';




function App() {
  const name ="shubanu"
  const adj ="beautiful"
  return (
    <div className="App">
     
      
     
     <Routes>
      <Route path='/' element={<Nav/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      < Dates name={name} adj={adj} />

     
      </div>
    

  );
}
export default App;