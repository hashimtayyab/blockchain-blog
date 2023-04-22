import "./login.css";
import Navbar from "../Navbar/navbar";
import { Button } from "react-bootstrap";

export default function Login() {
  return (
    <><Navbar/>
    <div className="login">
        <div className="loginDiv">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <Button variant="success">Login</Button>
      </form>
      </div>
    </div>
    </>
  );
}