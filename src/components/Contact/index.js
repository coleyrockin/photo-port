import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

const initialState = { name: '', email: '', message: '' };

function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { name, email, message } = formState;

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;
    setFormState((prev) => ({ ...prev, [fieldName]: value }));

    if (fieldName === 'email') {
      setErrorMessage(value && !validateEmail(value) ? 'Your email is invalid.' : '');
    } else if (!value) {
      setErrorMessage(`${fieldName} is required.`);
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

    // Demo behavior: open the user's mail client with the message pre-filled.
    // Swap for a Formspree / Netlify Forms / API endpoint when wiring real delivery.
    const subject = encodeURIComponent(`Photo Port contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" role="alert">
              {errorMessage}
            </p>
          </div>
        )}
        {submitted && !errorMessage && (
          <p className="success-text" role="status">
            Thanks — your mail client should be opening now.
          </p>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
