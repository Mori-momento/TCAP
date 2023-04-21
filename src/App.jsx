import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ContactForm from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Events from './components/Events';

function App() {

  return (
    <>
      <div className='bg-gray-500' >
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contact-us" element={<ContactForm/>} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App
