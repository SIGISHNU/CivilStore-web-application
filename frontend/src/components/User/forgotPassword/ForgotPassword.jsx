import React from 'react';
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

function ForgotPassword() {

    const theme = createTheme();
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
        <Avatar sx={{ m: 1, bgcolor: '#95498D' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }} >
          <Grid container spacing={2}>
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

            <Grid item xs={12}>
              <TextField
              // onChange={(e)=>setPassword(e.target.value)}
              // value={password}
                required
                fullWidth
                name="Re-password"
                label="Re-Password"
                type="password"
                id="Re-password"
                autoComplete="new-password"
              />
            </Grid>
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{background:"#95498D"}}
            sx={{ mt: 3, mb: 2 }}
          >
            Change password
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to='/login' variant="body2" style={{color:"#95498D", textDecoration:"none"}}>
                     Sign in?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Paper>
    </Container>
  </ThemeProvider>
  )
 
}

export default ForgotPassword;
