import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const activeUser = localStorage.getItem('loggedInUser');
    if (!activeUser) {
      navigate('/login');
      return;
    }

    const savedUser = localStorage.getItem('registeredUser');
    if (savedUser) {
      setStudent(JSON.parse(savedUser));
    }
  }, [navigate]);

  if (!student) {
    return null;
  }

  return (
    <section className="card">
      <h2>Welcome, {student.name}</h2>
      <p>This is your Home page after a successful login.</p>

      <div className="info-grid">
        <div>
          <strong>Email</strong>
          <p>{student.email}</p>
        </div>
        <div>
          <strong>Roll Number</strong>
          <p>{student.roll}</p>
        </div>
        <div>
          <strong>Department</strong>
          <p>{student.department}</p>
        </div>
      </div>

      <p className="action-note">
        Use the navigation bar to go to About or Contact, or choose Logout when you are done.
      </p>
    </section>
  );
}

export default Home;
