import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const newUser = await response.json();

      setUsers([...users, newUser]);

      setFormData({
        name: "",
        email: "",
        age: "",
      });

      setMessage("User added successfully!");
    } catch (error) {
      setMessage("Failed to add user");
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
