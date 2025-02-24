import { NavLink } from 'react-router-dom';
import connectSphere from '../assets/connectSphere.svg';

function Navbar() {
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
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to='/contact'
              >
                Contacts
              </NavLink>
            </li>
            <li className='nav-item ms-3'>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                to='/login'
              >
                Login
              </NavLink>
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-light px-3 py-1' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
