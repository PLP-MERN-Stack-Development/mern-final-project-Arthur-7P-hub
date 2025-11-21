import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Example endpoint (GET /jobs)
export const getJobs = async () => {
  try {
    const response = await API.get("/jobs");
    return response.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
