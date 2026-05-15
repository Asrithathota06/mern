import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // useState keeps the local form values while the user types.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const storedUser = localStorage.getItem('registeredUser');
    if (!storedUser) {
      setError('No registration found. Please register first.');
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.email === email && userData.password === password) {
      // Save a simple login flag in localStorage.
      localStorage.setItem('loggedInUser', userData.email);
      navigate('/home');
      return;
    }

    setError('Invalid email or password. Please try again.');
  };

  return (
    <section className="card">
      <h2>Student Login</h2>
      <p>Enter your registered email and password.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginEmail">Email</label>
          <input
            id="loginEmail"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="loginPassword">Password</label>
          <input
            id="loginPassword"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <div className="full button-row">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
