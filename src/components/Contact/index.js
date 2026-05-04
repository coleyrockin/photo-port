import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const initialState = { name: '', email: '', message: '' };

function Contact() {
  const [formState, setFormState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { name, email, message } = formState;

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setFormState((prev) => ({ ...prev, [field]: value }));

    if (field === 'email') {
      setErrorMessage(value && !validateEmail(value) ? 'Your email is invalid.' : '');
    } else if (!value) {
      setErrorMessage(`${field} is required.`);
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('Please fill out every field before submitting.');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid.');
      return;
    }
    const subject = encodeURIComponent(`Photo Port contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:coleyrockin@aol.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading" data-testid="h1tag">
        Get in touch
      </h1>
      <p className="contact-sub">
        Available for commercial, food, and portrait work. Drop a message below.
      </p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={message}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
        {errorMessage && (
          <p className="form-error" role="alert">
            {errorMessage}
          </p>
        )}
        {submitted && !errorMessage && (
          <p className="form-success" role="status">
            Thanks — your mail client should be opening now.
          </p>
        )}
        <button data-testid="button" type="submit" className="btn-submit">
          Send message
        </button>
      </form>
    </section>
  );
}

export default Contact;
