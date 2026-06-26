import { useState } from "react";
import "../styles/contact.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSuccess("Message sent successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          rows="6"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;