/* eslint-disable react/jsx-no-duplicate-props */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/macbook.png";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sx={12} md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Be the first to use the software</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
            Ready for a hands-free, rewarding experience? Embrace SOCARE now! Click here to know more and watch your society thrive effortlessly. 🚀💸
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput type="email" label="Your Name Here..." fullWidth />
              </Grid>
              <Grid item xs={8}>
                <MKInput type="email" label="Phone No..." fullWidth />
              </Grid>
              <Grid item xs={8}>
                <MKInput type="email" label="Your Society Name..." fullWidth />
              </Grid>
              <Grid item xs={8}>
  <TextField
    label="Any Suggestions ? Then Type Here"
    fullWidth
    variant="outlined"
    margin="normal"
    // Add any additional properties or styles as needed
  />
</Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Let's Talk
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="50%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
