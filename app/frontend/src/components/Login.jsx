import React, { useState } from "react";

const Login = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Convert response to JSON
  
      if (!response.ok) {
        // If response is not okay, throw the actual error message
        throw new Error(data?.detail || data?.message || "Login failed");
      }
  
      console.log("User logged in successfully:", data);
      alert(`Login Successful! ${data.message}`);
    } catch (error) {
      console.error("Error:", error);
  
      // Extract a readable error message
      let errorMessage = "Login failed";
  
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "object") {
        errorMessage = JSON.stringify(error);
      }
  
      alert(`Login failed: ${errorMessage}`);
    }
  };  

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button 
          onClick={toggleForm}  
          style={styles.linkButton}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  linkButton: {
    background: "none",
    border: "none",
    padding: 0,
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: "inherit",
  },
};

export default Login;
