import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../store/auth/operations';

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        console.log('Logout successful');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };

  return (
    <button className='nav-item-button' onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
