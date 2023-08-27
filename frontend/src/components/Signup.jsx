import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import styles from "./page.module.css";
import { useState } from "react";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    const payload = {
      name,
      email,
      password,
    };
    // console.log(payload);
    fetch("https://levitationbackend.onrender.com/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg == "user registration failed") {
          alert("User registration failed");
        } else {
          alert("Registration successful");

          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      className={styles.mainDiv}
      style={{ height: "400px", marginTop: "50px" }}
    >
      <Heading style={{ fontSize: "25px", marginBottom: "20px" }}>
        Signup
      </Heading>
      <FormControl onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="name">Full Name:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              height: "30px",
              border: "2px solid green",
              marginLeft: "50px",
            }}
          />
        </Box>
        <FormLabel htmlFor="email">Email:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="email"
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
        <FormLabel htmlFor="password">Password:</FormLabel>

        <Box style={{ marginTop: "-20px", marginBottom: "20px" }}>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              height: "30px",
              border: "2px solid green",
              marginLeft: "50px",
            }}
          />
        </Box>

        <Button
          className={styles.submitbtn}
          type="submit"
          onClick={handleSignup}
          style={{
            backgroundColor: "green",
            colorL: "red",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Register
        </Button>
        <p
          onClick={() => {
            window.location.href = "/";
          }}
          style={{ cursor: "pointer" }}
        >
          Already have an account ? <b>Sign In</b>
        </p>
      </FormControl>
    </Box>
  );
};

export default Signup;
