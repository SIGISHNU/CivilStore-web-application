import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Validation from './Validation';

function VendersLogin() {

    const theme = createTheme();
    const [error,setError]=useState({})

    const ohHandleSubmit = (e) => {
        e.preventDefault();
        setError(Validation())

    }

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className='paper' elevation={10}>
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#395185' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Vendor Signin
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={ohHandleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              // onChange={(e)=>setEmail(e.target.value)}
              // value={email}
                autoComplete="given-email"
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
              // onChange={(e)=>setPassword(e.target.value)}
              // value={password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background:"#395185"}}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to='/vendersignup' variant="body2" style={{color:"#395185", textDecoration:"none"}}>
                     Create account?
              </Link>
              {/* <Link to='/forgot' variant="body2" style={{color:"#95498D", textDecoration:"none"}}>
                     Forgot password?
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Paper>
    </Container>
  </ThemeProvider>
  )
}

export default VendersLogin;
