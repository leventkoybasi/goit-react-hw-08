import { useDispatch } from 'react-redux';
import { changeFilter } from '../store/filters/slice.js';
import { Field } from 'formik';

export default function Filter({ handleChange }) {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
    handleChange(e);
  };

  return (
    <div>
      <Field
        className='form-control me-2'
        name='search'
        type='search'
        placeholder='Search'
        aria-label='Search'
        style={{
          minHeight: '38px',
          paddingTop: '0.375rem',
          paddingBottom: '0.375rem',
          minWidth: '250px',
          maxWidth: '330px',
          width: '100%',
        }}
        onChange={handleFilterChange}
      />
    </div>
  );
}
