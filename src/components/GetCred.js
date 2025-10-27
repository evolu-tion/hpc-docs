import React, { useState } from 'react';
import styles from '../pages/index.module.css';
import Link from '@docusaurus/Link';


export default function EmailAccessPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div >
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your register email here"
            required
            style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
          />
          <br />
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Get Login Credential
          </button>
        </form>
        {submitted && (
          <div>
            <b>Your access link</b>: <a href={`http://10.128.1.10:3333/get_login/${encodeURIComponent(email)}`} target="_blank" rel="noopener noreferrer">Link</a>
          </div>
        )}
      </div>
    </div>
  );
}
