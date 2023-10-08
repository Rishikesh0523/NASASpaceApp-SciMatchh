import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import LoginHome from './pages/LoginHome';
import Resources from './pages/Resources';
import News from './pages/News';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/homepage' element={<LoginHome/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App