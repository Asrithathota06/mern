function Contact() {
  return (
    <section className="card">
      <h2>Contact Us</h2>
      <p>Have questions? Send a message to the student support team.</p>

      <form className="form-grid">
        <div>
          <label htmlFor="contactName">Name</label>
          <input id="contactName" type="text" placeholder="Your name" />
        </div>

        <div>
          <label htmlFor="contactEmail">Email</label>
          <input id="contactEmail" type="email" placeholder="Your email" />
        </div>

        <div className="full">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message" />
        </div>

        <div className="full">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
