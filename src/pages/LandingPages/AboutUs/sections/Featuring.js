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

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import coinbase from "assets/images/logos/gray-logos/logo1.png";
import nasa from "assets/images/logos/gray-logos/logo2.png";
import netflix from "assets/images/logos/gray-logos/logo3.png";
import pinterest from "assets/images/logos/gray-logos/logo4.png";
import spotify from "assets/images/logos/gray-logos/logo5.png";
import vodafone from "assets/images/logos/gray-logos/logo6.png";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
       <Grid mb={5}>
        <h1>Chosen by more than 100+ residential communities worldwide.</h1>
       </Grid>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={10000}
              separator=","
              title="Residents"
              description="Joined over 10,000 residents experiencing a 'high-performing' living standard, guided by certified project managers."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              separator=","
              suffix="+"
              title="Societies"
              description="Connected with 100+ societies that adhere to quality standards, ensuring a seamless experience for our users."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Benefit from 24/7 active support, ensuring timely resolution and engagement with our dedicated team members."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
