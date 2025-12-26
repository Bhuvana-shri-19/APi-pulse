import axios from "axios";
import "./SignUp.css";

export default function SignUp({ next }) {
  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await axios.post("http://localhost:5000/auth/signup", data);
    next();
  };

  return (
    <div className="screen">
      <form onSubmit={submit} className="card">
        <h2 className="title">Create Your Account</h2>
        <p className="subtitle">Join us and start testing APIs 🚀</p>

        <input name="name" placeholder="👤 Enter your name" required />
        <input name="email" placeholder="📧 Enter your email" required />
        <input
          name="password"
          type="password"
          placeholder="🔒 Create a strong password"
          required
        />

        <button className="btn">Create Account</button>
      </form>
    </div>
  );
}
