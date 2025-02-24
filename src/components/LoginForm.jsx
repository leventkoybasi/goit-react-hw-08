import { Formik, Field, Form, ErrorMessage } from 'formik';
import connectSphere from '../assets/connectSphere.svg';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .max(8, 'Password must be at most 8 characters')
    .required('Password is required'),
});

function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log('Form submitted:', values);
    actions.resetForm();
    actions.setSubmitting(true);

    // Simüle edilmiş bir API çağrısı veya işlem
    setTimeout(() => {
      // İşlem tamamlandığında isSubmitting durumunu false yap
      actions.setSubmitting(false);

      // Formu sıfırla
      actions.resetForm();
    }, 2000);
  };

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 form-signin'>
      <div
        className='backDrop w-100 w-sm-75 w-md-50 w-lg-40 w-xl-30 p-4'
        style={{ maxWidth: '330px' }}
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
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
                className='btn btn-primary w-100 py-2 mb-5'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign in'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
