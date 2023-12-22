import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPass from './components/ForgotPass';
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex justify-end h-full w-full">
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgotpassword" element={<ForgotPass/>}/>
        </Routes>
    </div>
    </Router>
    
  );
};
export default App;
