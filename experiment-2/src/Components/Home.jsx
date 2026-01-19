import { useState } from 'react';
import { Button, TextField, Select, Rating, Checkbox } from './ui';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    rating: 0,
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Home Page - Form Demo</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Full Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          required
          name="name"
        />

        <TextField
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
          name="email"
        />

        <Select
          id="category"
          label="Category"
          options={[
            { value: 'tech', label: 'Technology' },
            { value: 'design', label: 'Design' },
            { value: 'business', label: 'Business' },
          ]}
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Choose a category"
          required
          name="category"
        />

        <Rating
          label="Rate Your Experience"
          value={formData.rating}
          onChange={handleRatingChange}
          size="medium"
        />

        <Checkbox
          id="subscribe"
          label="Subscribe to our newsletter"
          checked={formData.subscribe}
          onChange={handleInputChange}
          name="subscribe"
        />

        <Button type="submit" variant="primary" size="medium">
          Submit
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="medium"
          onClick={() =>
            setFormData({
              name: '',
              email: '',
              category: '',
              rating: 0,
              subscribe: false,
            })
          }
          style={{ marginLeft: '8px' }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
}