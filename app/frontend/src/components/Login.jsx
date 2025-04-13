import React, { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
      const response = await fetch(`${API_BASE_URL}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password.trim(),
        }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();
      alert(data.message);  
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 p-3 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mb-4 p-3 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <button onClick={toggleForm} className="text-blue-600 underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;




// import React, { useState } from "react";

// const Login = ({ toggleForm }) => {
//   const [formData, setFormData] = useState({
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
//         const response = await fetch("http://localhost:8000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({
//                 email: formData.email.trim(),  // Ensure no leading/trailing spaces
//                 password: formData.password.trim()
//             }), 
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.detail || "Login failed");
//         }

//         const data = await response.json();
//         alert(data.message);  
//     } catch (error) {
//         alert("Login failed: " + error.message);
//     }
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
// }

// export default Login;
