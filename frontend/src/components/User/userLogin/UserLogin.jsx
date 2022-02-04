import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import Validation from "./Validation";

function UserLogin() {
  const navigate = useNavigate();
  const theme = createTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [backendError, SetBackendError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    
    if(email.length === 0 || password.length ===0){
    setError(Validation(email, password));
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      await axios
        .post("/users/login", { email, password }, config)
        .then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data));
          const userInfo = JSON.parse(localStorage.getItem("userInfo"));
          console.log("userInfo : ", userInfo);
          if (userInfo) {
            navigate("/");
            console.log("login data :", data);
          } else {
            navigate("/");
          }
        });
    } catch (backendError) {
      SetBackendError(backendError.response.data.message);
      console.log("message :", backendError.response.data.message);
    }
  
  };

 

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className="paper" elevation={10}>
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#95498D" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              onSubmit={submitHandler}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="given-email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                  />
                  {error.email && <p className="error">{error.email}</p>}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                  {error.password && <p className="error">{error.password}</p>}
                </Grid>

                
              </Grid>
              <center>{backendError && <ErrorMessage>{backendError}</ErrorMessage>}</center>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#95498D" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign in
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/signup"
                    variant="body2"
                    style={{ color: "#95498D", textDecoration: "none" }}
                  >
                    Create account?
                  </Link>
                  <br />
                  <Link
                    to="/forgot"
                    variant="body2"
                    style={{ color: "#95498D", textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;
