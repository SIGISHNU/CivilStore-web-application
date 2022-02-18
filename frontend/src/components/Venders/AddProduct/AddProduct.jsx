import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
// import Navbar from "../venderHome/Navbar";
import Header from "../venderHome/Header";



function AddProduct() {

    const theme = createTheme()
  return (
<div>
    <Header/>
<ThemeProvider theme={theme}>
   
       
      <Container component="main" maxWidth="xs">
          
        <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2><strong>ADD PRODUCT</strong></h2>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
             
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // onChange={onHandleChange}
                    // value={vendersignup.email}
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="name"
                    label="Product name"
                    autoFocus
                  />
                  {/* {error.email && <p className="error">{error.email}</p>} */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    // onChange={onHandleChange}
                    // value={vendersignup.password}
                    required
                    fullWidth
                    name="company name"
                    label="Company name"
                    type="text"
                    id="company name"
                    autoComplete="company name"
                  />
                  {/* {error.password && <p className="error">{error.password}</p>} */}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    // onChange={onHandleChange}
                    // value={vendersignup.name}
                    required
                    fullWidth
                    id="Price"
                    label="Price"
                    name="Price"
                    autoComplete="given-Price"
                  />
                  {/* {error.name && <p className="error">{error.name}</p>} */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // onChange={onHandleChange}
                    // value={vendersignup.mobile}
                    required
                    fullWidth
                    id="quantity"
                    label="Quantity"
                    name="Quantity"
                    autoComplete="given quantity"
                  />
                  {/* {error.mobile && <p className="error">{error.mobile}</p>} */}
                </Grid>             
                <Grid item xs={12} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Mechinary type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Mechinary type"
                    // onChange={onHandleChange}
                  > 
                    <MenuItem value={10}>Heavy Mechinary</MenuItem>
                    <MenuItem value={20}>Small Mechinary</MenuItem>
                  </Select>
                </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    // onChange={onHandleChange}
                    // value={vendersignup.place}
                    required
                    fullWidth
                    id="Description"
                    label="Description"
                    name="description"
                    autoComplete="given description"
                  />
                  {/* {error.place && <p className="error">{error.place}</p>} */}
                </Grid>
                
                <Grid item xs={12}>
                  <input
                    // onChange={onHandleChange}
                    // value={vendersignup.logo}
                    required
                    fullWidth
                    id="Product"
                    name="Product"
                    type="file"
                    autoComplete="given Product"
                  />
                  {/* {error.logo && <p className="error">{error.logo}</p>} */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background: "#395185" }}
                sx={{ mt: 3, mb: 2 }}
              >
                ADD PRODUCT
              </Button>
            </Box>
          </Box>
      </Container>
    </ThemeProvider>
    </div>
 );
}

export default AddProduct;
