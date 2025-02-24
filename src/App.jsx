import Background from './components/Background';
import LoginForm from './components/LoginForm';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }} className='container m-auto'>
        <Navbar />
        <LoginForm />
      </div>
    </>
  );
}

export default App;
