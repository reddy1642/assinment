import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactMethod: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPreferred Contact: ${formData.contactMethod}`);
    setFormData({ name: '', email: '', message: '', contactMethod: '' }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} required>
        <option value="">Select Contact Method</option>
        <option value="Email">Email</option>
        <option value="Phone">Phone</option>
        <option value="Text">Text</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
