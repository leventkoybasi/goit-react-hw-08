/* eslint-disable react/no-unescaped-entities */
import '../index.css';
import connectionImage from '../assets/connection.png';

function Home() {
  return (
    <div className='container'>
      <div
        className='connection-content mt-5 rounded-5'
        style={{
          backgroundImage: `url(${connectionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '550px',
          opacity: 0.5,
        }}
      >
        <div className='mt-4 opacity-100'>
          <h1
            className='display-4 text-center pt-4'
            style={{ opacity: 1, color: 'white', paddingTop: '50px' }}
          >
            Welcome to ConnectSphere
          </h1>
          <p className='lead text-center fs-md-6 pt-3 px-5' style={{ opacity: 1, color: 'white' }}>
            ConnectSphere is a platform that not only connects individuals who are in need of help
            but also offers a wide range of services to assist people in overcoming challenges.
            Whether you're looking for assistance, guidance, or to offer your skills to others,
            ConnectSphere is here to bridge the gap and foster a community of support and
            empowerment for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
