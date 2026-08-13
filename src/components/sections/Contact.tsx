import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Ways to get in touch with me.</p>
      </div>

      <div className="contact-grid">
        <a href="tel:+40771642396" className="contact-card">
          <strong>Phone</strong>
          <span className="contact-desc">+40 771 642 396</span>
        </a>

        <a
          href="mailto:andrei_barbuceanu@yahoo.com"
          className="contact-card"
        >
          <strong>Email</strong>
          <span className="contact-desc">andrei_barbuceanu@yahoo.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/alin-andrei-barbuceanu-96a473388/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <strong>LinkedIn</strong>
          <span className="contact-desc">Alin Andrei Barbuceanu</span>
        </a>

        <a
          href="https://github.com/andreibarbuceanu"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <strong>GitHub</strong>
          <span className="contact-desc">Projects and source code</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
