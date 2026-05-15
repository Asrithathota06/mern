import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please complete all fields before sending your message.');
      return;
    }
    setStatus('Thank you! Your message is ready to be reviewed.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="card">
      <h2>Contact Us</h2>
      <p>Use this form if you have questions about the student registration flow.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          />
        </div>

        {status && <p className="form-error">{status}</p>}

        <div className="full button-row">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
