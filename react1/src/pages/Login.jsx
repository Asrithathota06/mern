function Login() {
  return (
    <section className="card">
      <h2>Student Login</h2>
      <p>Login to access your student dashboard.</p>

      <form className="form-grid">
        <div className="full">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" type="email" placeholder="Enter email" />
        </div>

        <div className="full">
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" type="password" placeholder="Enter password" />
        </div>

        <div className="full">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
