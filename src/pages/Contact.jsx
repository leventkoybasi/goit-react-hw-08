import ContactForm from '../components/ContactForm.jsx';
import contact from '../js/contactData.json';
import avatars from '../js/index.js';

function getRandomAvatar() {
  return avatars[Math.floor(Math.random() * avatars.length)];
}

function Contact() {
  return (
    <div className='container mt-5 '>
      <div className='row '>
        {/* Small and Medium Screens: Form on top, Contact List below */}
        <div className='col-12 d-lg-none mb-4 '>
          <ContactForm />
        </div>

        {/* Large Screens and above: Form on the left, Contact List on the right */}
        <div className='col-lg-3 d-none d-lg-block'>
          <ContactForm />
        </div>

        <div className='col-12 col-lg-9 mb-5 mt-2'>
          <h4 className='text-center mb-4 text-secondary'>Contact List</h4>
          <div className='row px-3 d-flex align-items-center justify-content-center gap-2'>
            {contact.map((contact, index) => (
              <div className='col-md-4 col-sm-6 mb-3' key={index}>
                <div className='card shadow-sm p-3 opacity-75 rounded-4'>
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
      </div>
    </div>
  );
}

export default Contact;
