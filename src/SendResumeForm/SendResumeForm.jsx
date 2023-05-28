import M from './SendResumeForm.module.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const SendResumeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    attachment: null
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'attachment') {
      setFormData({ ...formData, attachment: e.target.files[0] });  // Store the selected file
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = new FormData();  // Use FormData for sending form data including files
    postData.append('firstName', formData.firstName);
    postData.append('lastName', formData.lastName);
    postData.append('phone', formData.phone);
    postData.append('email', formData.email);
    postData.append('message', formData.message);
    postData.append('attachment', formData.attachment);  // Append the file to the form data

    axios.post('https://zenup.org/sendMailWithResume.php', postData)
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
    //   message: '',
    //   attachment: null
    // });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <form className={M.SendResumeForm} onSubmit={handleSubmit}>

      <div className={M.row}>
        <div>
          <label for="firstName">Tên</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div>
          <label for="lastName">Họ</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className={M.row}>
        <div>
          <label for="phone">Phone *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label for="email">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>

      <div className={M.row}>
        <div className={M.message}>
          <label for="message">Bạn muốn nói với chúng tôi</label>
          <textarea
            name="message" value={formData.message} onChange={handleChange}
            rows="8"
            required
          />
        </div>

        <div>
          <label className={M.labelText}>Upload CV của bạn</label>
          <div htmlFor="attachment" className={M.uploadBtn}>
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.bmp,.mp4"
            />
          </div>
        </div>
      </div>


      <button type="submit">Gửi</button>

      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Cảm ơn bạn rất nhiều!
          <br />
          Email của bạn đã được gửi tới chúng tôi.
        </MuiAlert>
      </Snackbar>
{/*       
      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Thank you for your submission!
          <br />
          Your email has been sent.
        </MuiAlert>
      </Snackbar> */}

    </form>
  );
};

export default SendResumeForm;
