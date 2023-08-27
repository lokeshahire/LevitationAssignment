import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };
    // console.log(payload);
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg == "user registration failed") {
          alert("User Login failed");
        } else {
          localStorage.setItem("token", res.token);
          alert("Login successful");

          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box style={{ marginTop: "50px" }} className={styles.mainDiv}>
      <Heading>Login</Heading>
      <FormControl onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="email" style={{ marginLeft: "50px" }}>
          Email:
        </FormLabel>
        <Box style={{ marginTop: "-25px" }}>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "30px" }}
          />
        </Box>
        <FormLabel
          htmlFor="password"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          Password:
        </FormLabel>
        <Box style={{ marginTop: "-25px" }}>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ height: "30px" }}
          />
        </Box>
        <Button
          variant="solid"
          colorScheme="blue"
          className={styles.submitbtn}
          type="submit"
          onClick={handleLogin}
        >
          Login
        </Button>
        <p
          onClick={() => {
            window.location.href = "/signup";
          }}
          style={{ cursor: "pointer" }}
        >
          Don't have an account ? <b>Sign Up</b>
        </p>
      </FormControl>
    </Box>
  );
};

export default Login;
