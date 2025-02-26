import { NavLink } from 'react-router-dom';
import connectSphere from '../assets/connectSphere.svg';
import { Formik, Field, Form } from 'formik';

const search = false;

function Navbar() {
  const handleSearch = (values, actions) => {
    console.log('Search submitted:', values);
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
        <div className='collapse navbar-collapse ms-3 ' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
            <li className='nav-item ms-4 ms-lg-0'>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to='/contact'
              >
                Contacts
              </NavLink>
            </li>
            <li className='nav-item ms-4 ms-lg-3 '>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to='/register'
              >
                Register
              </NavLink>
            </li>
            <li className='nav-item ms-4 ms-lg-3 '>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to='/login'
              >
                Login
              </NavLink>
            </li>
          </ul>
          <Formik
            initialValues={{
              search: '',
            }}
            onSubmit={handleSearch}
          >
            {({ handleChange }) => (
              <Form className='d-flex ms-4' role='search'>
                <Field
                  className='form-control me-2'
                  name='search'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  style={{ minWidth: '250px', maxWidth: '330px', width: '100%' }}
                  onChange={(e) => {
                    handleChange(e);
                    console.log('Search input value:', e.target.value);
                  }}
                />
                <button
                  className='btn btn-outline-light px-3 py-1'
                  style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                >
                  {search ? 'Searching...' : 'Search'}
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
