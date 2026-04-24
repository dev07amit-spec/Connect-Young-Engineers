import axios from "axios";

// Create a centralized axios instance
const apiClient = axios.create({
    baseURL: "https://apiconnect.youngengineers.org",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;