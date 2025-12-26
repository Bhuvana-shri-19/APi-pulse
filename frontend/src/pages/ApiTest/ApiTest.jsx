import axios from "axios";
import { useState } from "react";
import "./ApiTest.css";

export default function ApiTest({ showResult }) {
  const [url, setUrl] = useState("");

  const testApi = async () => {
    if (!url) return;
    const res = await axios.post("http://localhost:5000/test", { url });
    showResult(res.data);
  };

  return (
    <div className="screen">
      <div className="card">
        <h2 className="title">Test Public API</h2>
        <p className="subtitle">Enter any public API endpoint 🔗</p>

        <input
          placeholder="🌐 https://api.example.com/data"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button className="btn" onClick={testApi}>
          Test API
        </button>
      </div>
    </div>
  );
}
