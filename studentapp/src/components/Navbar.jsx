import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = Boolean(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <header className="topbar">
      <div className="brand">Student Management</div>
      <nav className="nav-links">
        {loggedInUser && (
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/home">
            Home
          </NavLink>
        )}
        {!loggedInUser && (
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/register">
            Register
          </NavLink>
        )}
        {!loggedInUser && (
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/login">
            Login
          </NavLink>
        )}
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/contact">
          Contact
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about">
          About
        </NavLink>
      </nav>

      {loggedInUser && (
        <button type="button" className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Navbar;
