import { useState } from 'react';
import { Button, TextField, Select, Rating } from './ui';

export default function Contact() {
  const [contact, setContact] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    priority: '',
    satisfaction: 0,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (value) => {
    setContact((prev) => ({ ...prev, satisfaction: value }));
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    console.log('Contact Message:', contact);
    setSubmitted(true);
    setTimeout(() => {
      setContact({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        priority: '',
        satisfaction: 0,
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h2>Contact Page - Get in Touch</h2>
      {submitted ? (
        <div
          style={{
            padding: '16px',
            backgroundColor: '#d4edda',
            color: '#155724',
            borderRadius: '4px',
            marginBottom: '16px',
          }}
        >
          Thank you! Your message has been sent successfully.
        </div>
      ) : null}

      <form onSubmit={handleSubmitContact}>
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Your name"
          value={contact.fullName}
          onChange={handleChange}
          required
          name="fullName"
        />

        <TextField
          id="email"
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          value={contact.email}
          onChange={handleChange}
          required
          name="email"
        />

        <TextField
          id="subject"
          label="Subject"
          placeholder="What is this about?"
          value={contact.subject}
          onChange={handleChange}
          required
          name="subject"
        />

        <Select
          id="priority"
          label="Priority Level"
          options={[
            { value: 'low', label: 'Low' },
            { value: 'medium', label: 'Medium' },
            { value: 'high', label: 'High' },
          ]}
          value={contact.priority}
          onChange={handleChange}
          name="priority"
        />

        <TextField
          id="message"
          label="Message"
          placeholder="Your message..."
          value={contact.message}
          onChange={handleChange}
          required
          name="message"
        />

        <Rating
          label="How satisfied are you with our service?"
          value={contact.satisfaction}
          onChange={handleRatingChange}
          size="medium"
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button type="submit" variant="primary" size="large">
            Send Message
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              setContact({
                fullName: '',
                email: '',
                subject: '',
                message: '',
                priority: '',
                satisfaction: 0,
              })
            }
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}