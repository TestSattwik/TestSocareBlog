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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import serv4 from "assets/images/society.jpg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="🎉 Heard of the Secret Society Treasure ? 🏦"
                    description="✨ Ever dreamed of SOCARE app earns your society glittering points effortlessly? Gather enough, and you'll be swimming in funds!💰🏊‍♂️ Dial now to unveil the treasure map! 📞✨ Unlock The Treasure - SOCARE Magic"
                  />
                </MKBox>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="😌 Relax as SOCARE Takes the Lead:"
                    description=" Say goodbye to the management's headaches. SOCARE automates processes, keeps residents engaged, and ensures a steady flow of points, turning your society into a thriving hub! Join SOCARE now, and for the first 6 months, enjoy special benefits that turbocharge your community's earnings! 🔥🕑"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="👋 Visitor Management Made Easy:"
                    description="SOCARE ensures a secure environment by streamlining visitor management. Easily authorize guests, pre-authenticate visitors, and enhance security effortlessly."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="📢 Communication Hub at Your Fingertips:"
                    description=" Stay informed with SOCARE's dynamic notice board! Receive updates, announcements, and festival details in real-time. Effortless communication that brings your community together."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
               image={serv4}
              title="Ready to turn clicks into cash ? 📲💰"
              description="Don't miss out on this golden opportunity! Join SOCARE today. 🏡🌟 Limited Time Offer"
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Contact to find out more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
