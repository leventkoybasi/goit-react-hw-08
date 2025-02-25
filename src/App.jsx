import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Github from './components/Github';

function App() {
  return (
    <Router>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }} className='container m-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Github />
      </div>
    </Router>
  );
}

export default App;
