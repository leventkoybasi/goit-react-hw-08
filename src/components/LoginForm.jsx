import { Formik, Field, Form, ErrorMessage } from 'formik';
import connectSphere from '../assets/connectSphere.svg';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/auth/operations';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .max(8, 'Password must be at most 8 characters')
    .required('Password is required'),
});

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setInitialValues((prev) => ({
        ...prev,
        email: savedEmail,
        password: savedPassword,
        rememberMe: true,
      }));
    }
  }, []);

  const handleSubmit = (values, actions) => {
    if (values.rememberMe) {
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('Login successful!');
        actions.resetForm();
        navigate('/contact');
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error('Login failed: Invalid email or password');
        actions.setSubmitting(false);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 form-signin'>
      <div
        className='backDrop w-100 w-sm-75 w-md-50 w-lg-40 w-xl-30 p-4'
        style={{ maxWidth: '330px' }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                  <Field
                    type='email'
                    name='email'
                    className='form-control'
                    id='floatingInput'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='floatingInput'>E-mail Address</label>
                  <ErrorMessage name='email' component='div' className='text-danger small mt-1' />
                </div>
                <div className='form-floating'>
                  <Field
                    type='password'
                    name='password'
                    className='form-control'
                    id='floatingPassword'
                    placeholder='Password'
                  />
                  <label htmlFor='floatingPassword'>Password</label>
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-danger small mt-1'
                  />
                </div>
              </div>

              <div className='form-check text-start my-3 d-flex gap-3 justify-content-start align-items-center'>
                <Field
                  className='form-check-input'
                  type='checkbox'
                  name='rememberMe'
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Remember Me
                </label>
              </div>
              <button
                className='btn btn-primary w-100 py-2 mb-2'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign in'}
              </button>
              <button
                className='btn btn-primary w-100 py-2 mb-5 opacity-75'
                type='button'
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
