
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/inscription' element={<SignUp />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router> 
    
  )
}

export default App
