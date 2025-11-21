import React, { useEffect, useState } from "react";
import { getJobs } from "./api/api";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        console.error("Frontend error:", err);
      }
    };

    loadJobs();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend Connected to Backend 🎉</h1>

      {jobs.length === 0 ? (
        <p>No jobs yet or backend empty.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>{job.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
