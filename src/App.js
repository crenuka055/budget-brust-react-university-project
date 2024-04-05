import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Donate from './pages/donate';
import Error from './pages/error';
import Login from './pages/login';
import Sign from './pages/signup';
import Dashboard from './pages/Dashboard'
import ResetPassword from './pages/resetpassword';
import GradientEffect from './components/GradientEffect';
import Testing from './pages/testing';
import ForgetPassword from './pages/forgetpassword';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/donate' element={<Donate />} />
                <Route path='/error' element={<Error />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Sign />} />
                <Route path='/forgetpassword' element={<ForgetPassword />} />
                <Route path='/resetpassword/:token' element={<ResetPassword />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/testing' element={<Testing />} />
                <Route path='/admin' element={<Admin />} />
                {/* 
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                /> */}
            </Routes>
        </Router>
        <GradientEffect />
    </>
  );
}

export default App;
