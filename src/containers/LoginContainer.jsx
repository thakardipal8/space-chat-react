import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import HomeContainer from "./HomeContainer";
import LoginList from "../data/loginList";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [friendOf, setFriendOf] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const loginRecords = LoginList.filter(
        (record) => record.email === email && record.password === password
      );
      if (loginRecords.length > 0) {
        setFriendOf(loginRecords[0].userId);
      } else {
        alert("Wrong credentials. Please try again!");
      }
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {friendOf === 0 ? (
        <Form className="loginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button
            className="loginButton"
            variant="primary"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Form>
      ) : (
        <HomeContainer friendOf={friendOf} />
      )}
    </>
  );
};

export default LoginContainer;
