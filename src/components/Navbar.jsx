import { NavLink } from 'react-router-dom';
import connectSphere from '../assets/connectSphere.svg';
import { Formik, Form } from 'formik';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../store/auth/selectors';
import LogoutButton from './Logout';

function Navbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleSearch = (values, actions) => {
    console.log('Search submitted:', values.search);
    actions.resetForm();
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark p-2'
      style={{ backgroundColor: 'transparent' }}
    >
      <div className='container-fluid'>
        <NavLink className='navbar-brand d-flex align-items-center' to='/'>
          <img src={connectSphere} alt='Logo' width={30} height={30} className='me-2' />
          Connect Sphere
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse ms-3' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {isLoggedIn && (
              <li className='nav-item ms-4 ms-lg-0'>
                <NavLink
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  to='/contact'
                >
                  Contacts
                </NavLink>
              </li>
            )}

            {!isLoggedIn ? (
              <>
                <li className='nav-item ms-4 ms-lg-3'>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to='/register'
                  >
                    Register
                  </NavLink>
                </li>
                <li className='nav-item ms-4 ms-lg-3'>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    to='/login'
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className='nav-item ms-4 ms-lg-3 d-flex align-items-center'>
                <span className='text-secondary mx-4'>Welcome, {user.name}!</span>
                <LogoutButton />
              </li>
            )}
          </ul>

          <Formik
            initialValues={{ search: '' }}
            onSubmit={(values, actions) => {
              handleSearch(values, actions);
            }}
          >
            {({ handleChange, values }) => (
              <Form
                className='d-flex ms-4'
                role='search'
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(values, { resetForm: () => {} });
                }}
              >
                <Filter handleChange={handleChange} />
                <button
                  type='button'
                  className='btn btn-outline-light px-3 py-1 ms-2'
                  style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                  onClick={() => handleSearch(values, { resetForm: () => {} })}
                >
                  Search
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
