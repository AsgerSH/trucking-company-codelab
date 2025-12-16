import { useState } from 'react';
import styles from './RegisterDrivers.module.css'; // optional — remove if you don't have this

export default function RegisterDrivers() {
  const [form, setForm] = useState({
    name: '',
    license: '',
    phone: '',
    email: '',
    street: '',
    zip: '',
    city: '',
    assignedTruck: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);

    // Example: POST to your json-server or API
    // fetch('http://127.0.0.1:3000/drivers', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    //   .then(res => res.json())
    //   .then(result => console.log('Saved', result))
    //   .catch(err => console.error(err));
  };

  return (
    <div className={styles?.page ?? undefined} style={{ padding: 20 }}>
      <h1>Register New Driver</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} /><br /><br />

        <label htmlFor="license">License Number:</label><br />
        <input id="license" name="license" type="text" required value={form.license} onChange={handleChange} /><br /><br />

        <label htmlFor="phone">Phone Number:</label><br />
        <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} /><br /><br />

        <label htmlFor="street">Street Address:</label><br />
        <input id="street" name="street" type="text" required value={form.street} onChange={handleChange} /><br /><br />

        <label htmlFor="zip">ZIP Code:</label><br />
        <input id="zip" name="zip" type="text" required value={form.zip} onChange={handleChange} /><br /><br />

        <label htmlFor="city">City:</label><br />
        <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} /><br /><br />

        <label htmlFor="assignedTruck">Assigned Truck:</label><br />
        <select id="assignedTruck" name="assignedTruck" value={form.assignedTruck} onChange={handleChange}>
          <option value="">Select a Truck</option>
          <option value="1">Truck 1</option>
          <option value="2">Truck 2</option>
          <option value="3">Truck 3</option>
          <option value="4">Truck 4</option>
          <option value="5">Truck 5</option>
        </select><br /><br />

        <label htmlFor="agreeToTerms">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            required
            checked={form.agreeToTerms}
            onChange={handleChange}
          />
          {' '}I agree to the terms and conditions
        </label><br /><br />

        <button type="submit">Register Driver</button>
      </form>
    </div>
  );
}