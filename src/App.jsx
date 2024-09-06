import { useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Navbar } from './components/Navbar';
import { ForgotPass } from './components/Forgotpass';
import { PasswordReset } from './components/PasswordReset';
import AptitudeTest from './components/AptitudeTest';
import ProtectedRoute from './components/ProtectedRoute ';
import AptitudeTest2 from './components/AptitudeTest2';
function App() {

  return (
    <>
      <BrowserRouter> {/* Place Header inside BrowserRouter */}
          <Navbar/>
   
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword/:id/:token" element={<ForgotPass />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/aptitude" element={<AptitudeTest />} />
          <Route path="/aptitude2" element={<AptitudeTest2 />} />
         
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
