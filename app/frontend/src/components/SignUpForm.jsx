// import React, { useState } from "react";

// // const API_URL = "https://job-seek-meet.onrender.com"; // Ensure no trailing slash

// const SignUpForm = ({ toggleForm }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // const response = await fetch(`${API_URL}/api/signup`, { // Use deployed backend
//       const response = await fetch(`/signup`, { // Use deployed backend
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || "Sign-up failed");
//       }

//       console.log("User registered successfully:", data);
//       alert(`Sign Up Successful! ${data.message}`);
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert(`Sign-up failed: ${error.message}`);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//           required
//         />
//         <button type="submit" style={styles.button}>Sign Up</button>
//       </form>
//       <p>
//         Already have an account?{" "}
//         <button onClick={toggleForm} style={styles.linkButton}>
//           Sign in
//         </button>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "300px",
//     margin: "50px auto",
//     padding: "20px",
//     textAlign: "center",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     margin: "10px 0",
//     padding: "10px",
//     fontSize: "16px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   button: {
//     padding: "10px",
//     fontSize: "16px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   linkButton: {
//     background: "none",
//     border: "none",
//     padding: 0,
//     color: "#007bff",
//     textDecoration: "underline",
//     cursor: "pointer",
//     fontSize: "inherit",
//   },
// };

// export default SignUpForm;


import React, { useState } from "react";

const API_URL = "https://job-seek-meet.onrender.com/";

const SignUpForm = ({ toggleForm }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Sign-up failed");
      }

      console.log("User registered successfully:", data);
      alert(`Sign Up Successful! ${data.message}`);
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Sign-up failed: ${error.message}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          style={styles.input}
          required
        />
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
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <button
          onClick={toggleForm}  // switch to Login form when clicked
          style={styles.linkButton}
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

// Inline styles for simplicity
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

export default SignUpForm;


