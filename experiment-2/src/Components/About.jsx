import { useState } from 'react';
import { Button, TextField, Checkbox, Rating } from './ui';

export default function About() {
  const [about, setAbout] = useState({
    bio: '',
    agreeToTerms: false,
    skillRating: 0,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setAbout((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRatingChange = (value) => {
    setAbout((prev) => ({ ...prev, skillRating: value }));
  };

  const handleSave = () => {
    console.log('About Data:', about);
    alert('Profile updated: ' + JSON.stringify(about));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>About Page - Profile Form</h2>
      <p>Update your profile information</p>

      <TextField
        id="bio"
        label="Bio"
        placeholder="Tell us about yourself"
        value={about.bio}
        onChange={handleChange}
        name="bio"
      />

      <Rating
        label="Rate Your Skills"
        value={about.skillRating}
        onChange={handleRatingChange}
        size="large"
      />

      <Checkbox
        id="terms"
        label="I agree to the terms and conditions"
        checked={about.agreeToTerms}
        onChange={handleChange}
        name="agreeToTerms"
      />

      <div style={{ marginTop: '24px' }}>
        <Button
          variant="success"
          size="large"
          onClick={handleSave}
        >
          Save Profile
        </Button>
      </div>
    </div>
  );
}