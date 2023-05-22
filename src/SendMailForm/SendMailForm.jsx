import M from './SendMailForm.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const SendMailForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://zenup.org/sendMail.php', formData)
      .then(response => {
        // Handle success response
        console.log(response.data);
        setSnackbarOpen(true); // Open the snackbar on success
      })
      .catch(error => {
        // Handle error response
        console.error(error);
      });

    // Reset form data
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   phone: '',
    //   email: '',
    //   message: ''
    // });
  };
  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <form className={M.SendMailForm} onSubmit={handleSubmit}>

      <div className={M.name}>
        <div>
          <label for="firstName">First Name *</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div>
          <label for="lastName">Last Name *</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className={M.contact}>
        <div>
          <label for="phone">Phone *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label for="email">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      <div className={M.message}>
        <label for="message">Message *</label>
        <textarea
          name="message" value={formData.message} onChange={handleChange}
          rows="8"
          required
        />
      </div>

      <button type="submit">Submit</button>
      
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Thank you for your submission!
          <br />
          Your email has been sent.
        </MuiAlert>
      </Snackbar>

    </form>
  );
};

export default SendMailForm;
