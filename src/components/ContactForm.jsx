import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../index.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contacts/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  number: Yup.string()
    .min(5, 'Phone must be at least 5 characters')
    .max(8, 'Phone must be at most 8 characters')
    .required('Phone is required'),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        console.log('Contact added successfully');
        actions.resetForm();
      })
      .catch((error) => {
        console.error('Failed to add contact:', error);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-start mb-5 addContact'>
      <div
        className='backDrop w-100 w-sm-75 w-md-50 w-lg-40 w-xl-30 p-4'
        style={{ maxWidth: '330px', minWidth: '300px' }}
      >
        <Formik
          initialValues={{ name: '', number: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className='h3 mb-3 fw-normal text-center text-secondary'>Add Contact</h2>

              <div className='form-floating mb-3'>
                <Field
                  type='text'
                  name='name'
                  className='form-control'
                  id='floatingName'
                  placeholder='Name'
                />
                <label htmlFor='floatingName'>Name</label>
                <ErrorMessage name='name' component='div' className='text-danger small mt-1' />
              </div>

              <div className='form-floating'>
                <Field
                  type='text'
                  name='number'
                  className='form-control'
                  id='floatingNumber'
                  placeholder='Phone Number'
                />
                <label htmlFor='floatingNumber'>Phone Number</label>
                <ErrorMessage name='number' component='div' className='text-danger small mt-1' />
              </div>

              <button
                className='btn btn-primary w-100 py-2 my-4'
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Adding Contact...' : 'Add Contact'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;
