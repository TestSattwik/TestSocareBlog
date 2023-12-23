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
import CenteredBlogCardimg from "examples/Cards/BlogCards/CenteredBlogCardimg";
import CenteredBlogCardimgleft from "examples/Cards/BlogCards/CenteredBlogCardimgleft";
import serv1 from "assets/images/socaremob2.png";
import serv2 from "assets/images/managesociety.png";
import serv3 from "assets/images/socaremob1.png";
import serv4 from "assets/images/socaremob3.png";


function Bloginfo() {
  return (
    <MKBox component="section" py={12}>
            
            <Container>
     
     <Grid container spacing={3} alignItems="center">
     <Grid mb={1} alignItems="center">
        <h1>SOCARE : Elevating Community Living with Smart Solutions!</h1>
      <p>Empower your community living with an integrated software suite for managing apartments, villas, smart cities, and townships. Immerse in global best practices through our innovative solutions!</p>
      </Grid>
     <Grid item xs={12} lg={4} sx={{  mt: { xs: 3, lg: 0 } }} justifyContent="flex-start">
         <CenteredBlogCardimg
           image={serv2}
           title="Get insights on Search"
           description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
           action={{
             type: "internal",
             route: "pages/company/about-us",
             color: "info",
             label: "find out more",
           }}
         />
       </Grid>
      
       <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
         <Grid container justifyContent="flex-start">
           <Grid item xs={12} md={6}>
             <MKBox mb={5}>
               <DefaultInfoCard
                 icon="public"
                 title="Struggling to manage multiple properties efficiently?"
                 description="Socare simplifies property management. Use one apartment management app to oversee multiple owned units effortlessly."
               />
             </MKBox>
           </Grid>
           <Grid item xs={12} md={6}>
             <MKBox mb={5}>
               <DefaultInfoCard
                 icon="public"
                 title="Need assistance in finding and managing domestic help?"
                 description="Socare provides a Domestic Help feature, helping you find domestic assistance, view/provide reviews, and monitor attendance conveniently."
               />
             </MKBox>
           </Grid>
         </Grid>
       </Grid>
     </Grid>
   </Container>

      <Container>
      
        <Grid container spacing={3} mt={1} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container spacing={1} justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Do you find it inconvenient to book guest houses or organize celebrations offline?"
                    description="With Socare, book guest houses and plan events effortlessly within the app. No more offline visits, just seamless planning."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Experiencing challenges with your traditional bill payment methods?"
                    description="Introducing our cutting-edge BillPay App, designed to streamline your payment process effortlessly. Say goodbye to the hassles of manual transactions and late payments. "
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCardimg
              image={serv1}
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          
        </Grid>
      </Container>

    

      <Container>
     
        <Grid container mt={1} spacing={3} alignItems="center">
          
          <Grid item xs={12} lg={4} sx={{ mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCardimg
              image={serv4}
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Finding it cumbersome to manage visitors and their authorizations?"
                    description="Socare's Visitor Management allows you to authorize visitors, pre-authenticate guests, and manage the entire visitation process seamlessly."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Need assistance in finding and managing domestic help?"
                    description="Socare provides a Domestic Help feature, helping you find domestic assistance, view/provide reviews, and monitor attendance conveniently."
                  />
                </MKBox>
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
     
      <Container>
      
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="public"
                  title="Need immediate help during emergencies?"
                  description="Socare provides Emergency Help, connecting you with security and neighbors when immediate assistance is required."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="public"
                  title=" Looking for easy options to handle bill payments?"
                  description="Socare simplifies bill payments, offering easy options for maintenance dues and utility bills. Manage your payments hassle-free within the app."
                />
              </MKBox>
            </Grid>
           
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCardimg
            image={serv3}
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
            action={{
              type: "internal",
              route: "pages/company/about-us",
              color: "info",
              label: "find out more",
            }}
          />
        </Grid>
        
      </Grid>
    </Container>  
      
     
    
    </MKBox>
  );
}

export default Bloginfo;
