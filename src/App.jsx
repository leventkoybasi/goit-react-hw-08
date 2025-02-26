import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Background from './components/Background';

//lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./components/RegisterForm'));
const ContactPage = lazy(() => import('./pages/Contact'));

//components
import Navbar from './components/Navbar';
import Github from './components/Github';
import Loader from './components/Loader';

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Background />
        <div style={{ position: 'relative', zIndex: 1 }} className='container m-auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
          <Github />
        </div>
      </Suspense>
    </>
  );
}

export default App;
