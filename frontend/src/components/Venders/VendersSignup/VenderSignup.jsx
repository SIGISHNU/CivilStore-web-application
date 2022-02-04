import React, { useState } from "react";
import Validation from "./Validation";
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
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";


function VenderSignup() {
  const theme = createTheme();
  const [vendersignup, setVenderSignup] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    place: "",
    landmark: "",
    pincode: "",
    account: "regular",
    logo: "",
  });
  const [error, setError] = useState({});

  const onHandleChange = () => {};

  const submitHandler = (e) => {
    e.preventDefault();

    setError(Validation(vendersignup));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className="paper" elevation={10}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#395185" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Venders Signup
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
                    value={vendersignup.email}
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
                    value={vendersignup.password}
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
                    value={vendersignup.name}
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
                    value={vendersignup.mobile}
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
                    value={vendersignup.place}
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
                    value={vendersignup.landmark}
                    required
                    fullWidth
                    id="landmark"
                    label="Landmark"
                    name="landmark"
                    autoComplete="given landmark"
                  />
                  {error.landmark && <p className="error">{error.landmark}</p>}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={onHandleChange}
                    value={vendersignup.pincode}
                    required
                    fullWidth
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    autoComplete="given pincode"
                  />
                  {error.pincode && <p className="error">{error.pincode}</p>}
                </Grid>
                <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Account</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={onHandleChange}
                  > 
                    <MenuItem value={10}>Regular account</MenuItem>
                    <MenuItem value={20}>Premium Account</MenuItem>
                  </Select>
                </FormControl>
                </Grid>
                
                <Grid item xs={12}>
                  <input
                    onChange={onHandleChange}
                    value={vendersignup.logo}
                    required
                    fullWidth
                    id="logo"
                    name="logo"
                    type="file"
                    autoComplete="given pincode"
                  />
                  {error.logo && <p className="error">{error.logo}</p>}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#395185" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/venderlogin"
                    variant="body2"
                    style={{ color: "#395185", textDecoration: "none" }}
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

export default VenderSignup;
