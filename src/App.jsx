import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Background from './components/Background';

//lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactPage = lazy(() => import('./pages/Contact'));

//components
import Navbar from './components/Navbar';
import Github from './components/Github';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Background />
        <div style={{ position: 'relative', zIndex: 1 }} className='container m-auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          <Github />
        </div>
      </Suspense>
    </>
  );
}

export default App;
