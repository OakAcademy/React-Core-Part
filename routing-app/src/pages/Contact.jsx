import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name ${firstName}\n LastName: ${lastName}\n Email: ${email}`;
    alert(message);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="contactWrapper">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="lastName">Surname:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="infoWrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
