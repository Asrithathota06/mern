import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  // The app uses localStorage to remember if a user is logged in.
  const isLoggedIn = Boolean(localStorage.getItem('loggedInUser'));

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-wrap">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? '/home' : '/login'} replace />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
