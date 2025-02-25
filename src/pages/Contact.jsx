import contact from '../js/contactData.json';
import avatars from '../js/index.js';

function getRandomAvatar() {
  return avatars[Math.floor(Math.random() * avatars.length)];
}

function Contact() {
  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4 text-secondary'>Contact List</h2>
      <div className='row justify-content-center row-gap-1 column-gap-3'>
        {contact.map((contact, index) => (
          <div className='col-md-4 col-sm-6 mb-4' key={index}>
            <div className='card shadow-sm p-3'>
              <div className='d-flex align-items-center'>
                <img
                  src={getRandomAvatar()}
                  alt={contact.name}
                  className='rounded-circle'
                  width={80}
                  height={80}
                />
                <div className='ms-3'>
                  <h5>{contact.name}</h5>
                  <p className='text-muted mb-0'>Phone: {contact.number}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
