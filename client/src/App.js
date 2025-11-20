import React, { useState, useEffect } from "react";
import API from "./api";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Fetch jobs
  useEffect(() => {
    if (!user) return;
    API.get("/jobs", { headers: { Authorization: `Bearer ${user.token}` } })
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));

    socket.on("newJob", job => setJobs(prev => [job, ...prev]));
    return () => socket.off("newJob");
  }, [user]);

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", { email, password });
      setUser(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await API.post("/users/register", { name: "User", email, password });
      setUser(res.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleCreateJob = async () => {
    try {
      const res = await API.post(
        "/jobs",
        { title, description: desc },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setTitle("");
      setDesc("");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  if (!user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login / Register</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {user.user.name}</h2>
      <div>
        <h3>Create Job</h3>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
        <button onClick={handleCreateJob}>Add Job</button>
      </div>

      <h3>Jobs</h3>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <strong>{job.title}</strong> by {job.createdBy.name}<br />
            {job.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
