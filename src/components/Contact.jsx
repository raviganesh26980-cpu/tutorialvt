function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>Email: info@shivashri.in | Phone: +91 12345 67890</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;