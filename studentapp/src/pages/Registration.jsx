import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  // useState keeps the form data in local component state.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roll: '',
    department: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, roll, department, password } = formData;
    if (!name || !email || !roll || !department || !password) {
      setError('Please fill in all fields before registering.');
      return;
    }

    const userData = { name, email, roll, department, password };
    // localStorage stores structured data as a string.
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    navigate('/login');
  };

  return (
    <section className="card">
      <h2>Student Registration</h2>
      <p>Use this form to register your student account.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="roll">Roll Number</label>
          <input
            id="roll"
            type="text"
            value={formData.roll}
            onChange={handleChange}
            placeholder="Enter your roll number"
          />
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter your department"
          />
        </div>

        <div className="full">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <div className="full button-row">
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
}

export default Registration;
