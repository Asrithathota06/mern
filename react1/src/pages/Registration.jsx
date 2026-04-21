function Registration() {
  return (
    <section className="card">
      <h2>Student Registration</h2>
      <p>Fill in your details to create a student account.</p>

      <form className="form-grid">
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Enter full name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter email" />
        </div>

        <div>
          <label htmlFor="roll">Roll Number</label>
          <input id="roll" type="text" placeholder="Enter roll number" />
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <input id="department" type="text" placeholder="Enter department" />
        </div>

        <div className="full">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create password" />
        </div>

        <div className="full">
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
}

export default Registration;
