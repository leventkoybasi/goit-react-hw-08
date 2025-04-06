import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../store/contacts/operations';
import { selectFilteredContacts } from '../store/contacts/selectors';
import ContactForm from '../components/ContactForm';
import avatars from '../js/index';
import bAvatar from '../assets/b.jpg';

function getAvatarBasedOnName(name) {
  if (name.toLowerCase().startsWith('bet')) {
    return bAvatar;
  }
  return avatars[Math.floor(Math.random() * avatars.length)];
}

export default function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        console.log(`Contact with ID ${contactId} deleted successfully`);
      })
      .catch((error) => {
        console.error('Failed to delete contact:', error);
      });
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12 d-lg-none mb-4'>
          <ContactForm />
        </div>
        <div className='col-lg-3 d-none d-lg-block'>
          <ContactForm />
        </div>
        <div className='col-12 col-lg-9 mt-2'>
          <h4 className='text-center mb-4 text-secondary'>Contact List</h4>
          <div className='container-lg'>
            <div className='d-flex flex-wrap gap-3 justify-content-center'>
              {contacts.map((contact, index) => (
                <div
                  className='col-12 col-lg-6'
                  key={index}
                  style={{ flex: '0 0 300px', maxWidth: '300px' }}
                >
                  <div className='card shadow-sm p-3 opacity-75 rounded-4'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center gap-3 flex-grow-1'>
                        <img
                          src={getAvatarBasedOnName(contact.name)}
                          alt={contact.name}
                          className='rounded-circle'
                          width={80}
                          height={80}
                        />
                        <div>
                          <h5 className='mb-1'>{contact.name}</h5>
                          <p className='text-muted mb-0'>Phone: {contact.number}</p>
                        </div>
                      </div>
                      <button
                        className='btn btn-danger px-3 py-2'
                        onClick={() => handleDelete(contact.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
