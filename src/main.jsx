import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './custom.scss';
import './index.css';
import App from './App.jsx';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store.js';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Toaster
          position='top-right'
          reverseOrder={false}
          toastOptions={{
            className: 'shadow-sm p-3 opacity-75 rounded-4',
            style: {
              background: '#fff',
              color: '#333',
            },
          }}
        />
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
