import { useState } from 'react';

function App() {
  const [input, setInput] = useState({});
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});

  const getInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!input.name) newErrors.name = "* Name is required";
    if (!input.profile) newErrors.profile = "* Profile picture URL is required";
    if (!input.email) newErrors.email = "* Email is required";
    else if (!/\S+@\S+\.\S+/.test(input.email)) newErrors.email = "* Enter a valid email";
    if (!input.rating) newErrors.rating = "* Rating is required";
    else if (input.rating < 1 || input.rating > 5) newErrors.rating = "* Rating must be 1–5";
    if (!input.description) newErrors.description = "* Description is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const setData = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setList([...list, input]);
    setInput({});
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 40px",
          padding: "30px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Your Review</h2>
        <form onSubmit={setData}>
          <InputField
            type="text"
            name="name"
            placeholder="Your Name"
            value={input.name}
            onChange={getInput}
            style={{borderColor:errors.name ? "red" : ""}}
          />
          <InputField
            type="text"
            name="profile"
            placeholder="Profile Pic URL"
            value={input.profile}
            onChange={getInput}
            style={{borderColor:errors.profile ? "red" : ""}}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your Email"
            value={input.email}
            onChange={getInput}
            style={{borderColor:errors.email ? "red" : ""}}
          />
          <InputField
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={input.rating}
            onChange={getInput}
              style={{borderColor:errors.rating ? "red" : ""}}
          />
          <div style={{ marginBottom: "16px" }}>
            <textarea
              name="description"
              placeholder="Your Review"
              value={input.description || ""}
              onChange={getInput}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                resize: "vertical",
                borderColor:errors.description ? "red" : ""
              }}
            />
            
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" style={submitButtonStyle}>Submit</button>
          </div>
        </form>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>Review List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {list.map((review, index) => (
          <div
            key={index}
            style={{
              width: "270px",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={review.profile || "https://via.placeholder.com/120"}
              alt="profile"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius:"20px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ marginBottom: "5px" }}>{review.name}</h3>
            <p style={{ fontSize: "14px", color: "#555" }}><strong>Email:</strong> {review.email}</p>
            <div style={{ margin: "10px 0" }}>
              <strong>Rating:</strong>{" "}
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: i < review.rating ? "#FFD700" : "#ccc", fontSize: "18px" }}>
                  {i < review.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "#444", fontStyle: "italic" }}>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InputField({ type, name, placeholder, value, onChange, error, style }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "14px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          ...style,
        }}
      />
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginTop: "5px",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#084688",
  color: "#fff",
  borderRadius: "8px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
};

export default App;
