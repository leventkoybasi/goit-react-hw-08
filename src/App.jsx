import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './store/auth/operations';
import { selectIsLoggedIn, selectIsRefreshing } from './store/auth/selectors';
import Background from './components/Background';
import Loader from './components/Loader';

// Lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./components/RegisterForm'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Components
import Navbar from './components/Navbar';
import Github from './components/Github';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Background />
        <div style={{ position: 'relative', zIndex: 1 }} className='container m-auto'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/contact'
              element={isLoggedIn ? <ContactPage /> : <Navigate to='/register' />}
            />
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
