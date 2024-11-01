import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './redux/actions';

function Signup({ onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(registerUser({ name, email, password }));
      // Redirect to Feed or handle UI update
      alert('Account created successfully!');
      onSwitchToLogin(); // Redirect to login after signup
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account? <button onClick={onSwitchToLogin}>Login</button>
      </p>
    </div>
  );
}

export default Signup;
