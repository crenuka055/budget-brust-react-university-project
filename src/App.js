import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Donate from './pages/donate';
import Error from './pages/error';
import Login from './pages/login';
import Sign from './pages/signup';
<<<<<<< HEAD
import Dashboard from './pages/dashboard';
=======
>>>>>>> 0255a6fa32fe66601d2336fc948e460d2be0bdae
import ResetPassword from './pages/forgetpassword';
import GradientEffect from './components/GradientEffect';

function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path='/donate' element={<Donate />} />
                <Route path='/error' element={<Error />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Sign />} />
<<<<<<< HEAD
                <Route path='/dashboard' element={<Dashboard />} />
=======
>>>>>>> 0255a6fa32fe66601d2336fc948e460d2be0bdae
                <Route path='/forgetpassword' element={<ResetPassword />} />
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
