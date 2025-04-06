# Contact Management Dashboard

**Contact Management Dashboard** is a React-based application designed to manage contacts efficiently. It provides features such as user authentication, contact creation, deletion, and filtering. The application is built with modern tools and libraries like Redux Toolkit, React Router, Formik, and Bootstrap.

---

## Features

- **User Authentication**:

  - Register, Login, and Logout functionality.
  - `Remember Me` option to save login credentials in `localStorage`.

- **Contact Management**:

  - Add new contacts with name and phone number.
  - Delete existing contacts.
  - Filter contacts by name.

- **Responsive Design**:

  - Fully responsive layout using Bootstrap.
  - Optimized for mobile, tablet, and desktop devices.

- **Toast Notifications**:

  - Success and error notifications using `react-hot-toast`.

- **State Management**:
  - Global state management with Redux Toolkit.
  - Persistent authentication state using `redux-persist`.

---

## Tech Stack

- **Frontend**: React, React Router, Formik, Yup
- **State Management**: Redux Toolkit, Redux Persist
- **Styling**: Bootstrap, SCSS
- **Notifications**: React Hot Toast
- **API**: Axios
- **Build Tool**: Vite

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/leventkoybasi/goit-react-hw-08.git
   cd goit-react-hw-08
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:

   ```bash
   npm run build
   ```

5. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

---

## Folder Structure

```
src/
├── components/    # Reusable React components
├── pages/         # Application pages
├── store/         # Redux store and slices
├── styles/        # Global styles
├── assets/        # Static assets
└── App.jsx        # Main application component
```

---

## Environment Variables

The application uses the following environment variables:

- `VITE_API_BASE_URL`: Base URL for the API (default: `https://connections-api.goit.global`).

To set up environment variables, create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://connections-api.goit.global
```

---

## Dependencies

### Main Dependencies

- React: ^19.0.0
- Redux Toolkit: ^2.5.1
- React Router DOM: ^7.2.0
- Formik: ^2.4.6
- Yup: ^1.6.1
- Bootstrap: ^5.3.3
- React Hot Toast: ^2.5.2

### Dev Dependencies

- Vite: ^6.1.0
- ESLint: ^9.19.0

---

## Features in Detail

### Authentication

- **Register**: Users can register with their name, email, and password.
- **Login**: Users can log in with their email and password.
- **Logout**: Users can log out securely.

### Contact Management

- **Add Contact**: Add a new contact with a name and phone number.
- **Delete Contact**: Remove a contact from the list.
- **Filter Contacts**: Search for contacts by name.

### Notifications

- Success and error notifications are displayed using `react-hot-toast`.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [leventkoybasi](https://github.com/leventkoybasi)
