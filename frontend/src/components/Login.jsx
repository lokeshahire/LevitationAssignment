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
    fetch("https://levitationbackend.onrender.com/users/login", {
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
          window.location.href = "/form";
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box style={{ marginTop: "50px" }} className={styles.mainDiv}>
      <Heading style={{ fontSize: "25px", marginBottom: "20px" }}>
        Login
      </Heading>
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
            style={{
              height: "30px",
              border: "2px solid green",
              marginLeft: "50px",
            }}
          />
        </Box>
        <FormLabel
          htmlFor="password"
          style={{ marginLeft: "50px", marginTop: "50px" }}
        >
          Password:
        </FormLabel>
        <Box
          style={{
            marginTop: "-25px",
            marginLeft: "50px",
          }}
        >
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ height: "30px", border: "2px solid green" }}
          />
        </Box>
        <Button
          variant="solid"
          colorScheme="blue"
          className={styles.submitbtn}
          type="submit"
          onClick={handleLogin}
          style={{ backgroundColor: "green", colorL: "red" }}
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
