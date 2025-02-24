import connectSphere from '../assets/connectSphere.svg';

function LoginForm() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 form-signin'>
      <div
        className='backDrop w-100 w-sm-75 w-md-50 w-lg-40 w-xl-30 p-4'
        style={{ maxWidth: '330px' }}
      >
        <form>
          <img
            className='mb-4 d-block mx-auto'
            src={connectSphere}
            alt='Logo'
            width={57}
            height={57}
          />
          <h2 className='h3 mb-3 fw-normal text-center'>Please Sign In</h2>

          <div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label htmlFor='floatingInput'>E-mail Address</label>
            </div>
            <div className='form-floating'>
              <input
                type='password'
                className='form-control'
                id='floatingPassword'
                placeholder='Password'
              />
              <label htmlFor='floatingPassword'>Password</label>
            </div>
          </div>

          <div className='form-check text-start my-3 d-flex gap-3 justify-content-start align-items-center'>
            <input
              className='form-check-input'
              type='checkbox'
              defaultValue='remember-me'
              id='flexCheckDefault'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              Remember Me
            </label>
          </div>
          <button className='btn btn-primary w-100 py-2 mb-5' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
