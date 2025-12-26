import axios from "axios";
import "./SignIn.css";

export default function SignIn({ next }) {
  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await axios.post("http://localhost:5000/auth/signin", data);
    next();
  };

  return (
    <div className="screen">
      <form onSubmit={submit} className="card">
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Sign in to continue 🚀</p>

        <input
          name="email"
          placeholder="📧 Enter your email"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="🔒 Enter your password"
          required
        />

        <button className="btn">Login</button>
      </form>
    </div>
  );
}
