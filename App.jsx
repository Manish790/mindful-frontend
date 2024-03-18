import React from "react";
import HomePage from "./components/HomePage";
import Error404 from './components/Error404';
import { BrowserRouter as Router,Routes,Route }  from "react-router-dom";
import Login from './components/Login/Login';
const App = () => {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/*" element={<Error404 />} />

     
      </Routes>full
    </Router>
  );
};

export default App;
