import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserSignup.css";
import Validation from "./Validation";



function UserSignup() {

  const navigate = useNavigate();
  const [usersignup, setUserSignup] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    place: "",
    landmark: "",
    pincode: "",
    certificate:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fzeenews.india.com%2Fpersonal-finance%2Faadhaar-card-update-change-address-in-aadhaar-in-few-simple-steps-here-s-how-2404829.html&psig=AOvVaw1WONdJHmzKCEaZNZ0mlitD&ust=1643883816847000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDs4crm4PUCFQAAAAAdAAAAABAD",
    isActive: "false",
  });

  
  const [error, setError] = useState({});

  const onHandleChange = (e) => {
    setUserSignup({
      ...usersignup,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();


      setError(Validation(usersignup));
    

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

       await axios.post("/users/signup",
        usersignup
       ,config).then((response)=>{
        console.log(response);
        navigate('/login')
      })

      localStorage.setItem("userInfo", JSON.stringify(usersignup));
    } catch (error) {
      console.log("The error is :", error);
    }

  };

  const theme = createTheme();

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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              onSubmit={submitHandler}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.email}
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.password}
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

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.name}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="given-name"
                  />
                  {error.name && <p className="error">{error.name}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.mobile}
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    autoComplete="given mobile"
                  />
                  {error.mobile && <p className="error">{error.mobile}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.place}
                    required
                    fullWidth
                    id="place"
                    label="Place"
                    name="place"
                    autoComplete="given place"
                  />
                  {error.place && <p className="error">{error.place}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.landmark}
                    required
                    fullWidth
                    id="landmark"
                    label="Landmark"
                    name="landmark"
                    autoComplete="given landmark"
                  />
                  {error.landmark && <p className="error">{error.landmark}</p>}
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={onHandleChange}
                    value={usersignup.pincode}
                    required
                    fullWidth
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    autoComplete="given pincode"
                  />
                  {error.pincode && <p className="error">{error.pincode}</p>}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#95498D" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/login"
                    variant="body2"
                    style={{ color: "#95498D", textDecoration: "none" }}
                  >
                    Already have an account?
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

export default UserSignup;
