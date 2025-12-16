import React from "react";
import styles from "./login.module.css";

const LoginForm = ({login}) => {
    const [credentials, setCredentials] = React.useState({ username: "", password: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

  return (
    <div className={styles.loginContainer}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        className={styles.input}
        onChange={handleChange}
        value={credentials.username}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className={styles.input}
        onChange={handleChange}
        value={credentials.password}
      />
      <button onClick={() => login(credentials.username, credentials.password)} className={styles.button}>Login</button>
    </div>
  );
};

export default LoginForm;
