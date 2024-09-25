// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [age, setAge] = useState(initialValues.age || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Required';
    if (!age || age <= 0) errors.age = 'Must be greater than 0';
    if (!email) errors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email format';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({ name, age, email });
      setName('');
      setAge('');
      setEmail('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    setName(initialValues.name || '');
    setAge(initialValues.age || '');
    setEmail(initialValues.email || '');
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
