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
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images for society
import cash from "assets/images/billl.jpg";
import points from "assets/images/points.jpg";
import manage from "assets/images/manage.jpg";
import bill from "assets/images/bill.png";
import election from "assets/images/voting-box.png";
import notice from "assets/images/corkboard.png";
import festival from "assets/images/concert.jpg";

// Images for residents
import rent from "assets/images/rent.jpg";
import help from "assets/images/support.jpg";
import book from "assets/images/booking.jpg";
import guest from "assets/images/guest.jpg";
import offline from "assets/images/offline.jpg";
import connect from "assets/images/neighbour.jpg";
import gate from "assets/images/security.jpg";


function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Benefits For Society Management :
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            Turn every interaction into points and every point into cash with SOCARE. Join the reward revolution now! 🚀💸
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={cash}
                name="💸 Cash In Your Points Anytime:"
                position={{ color: "info", label: "For Management" }}
                description="Need cash? Convert your hard-earned points into real money whenever you desire. SOCARE empowers you to reap the benefits of your vibrant community life."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={points}
                name="💰 Earn Points with Every Activity"
                position={{ color: "info", label: "For Society" }}
                description="Welcoming a new neighbor or hosting a community program through SOCARE? Earn points effortlessly. The more activity, the more points – it's that simple!"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={manage}
                name="🏠 Managing Multiple Properties Stressing You Out?"
                position={{ color: "info", label: "Management Benefit" }}
                description="Explore SOCARE's streamlined approach. Easily oversee and manage multiple apartments, villas, or office spaces effortlessly. Simplify your property management journey with SOCARE!"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={bill}
                name="💸 Bill Payments Made Effortless with SOCARE"
                position={{ color: "info", label: "Management Benefit" }}
                description="Struggling with multiple bills? SOCARE ensures a hassle-free experience. Easily manage and pay maintenance dues, utility bills, and other payments with just a few clicks. Your convenience, our priority! 💳🏡"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={election}
                name="🗳️ Conduct Seamless Elections and Enhance Community Engagement with SOCARE"
                position={{ color: "info", label: "Management Benefit" }}
                description="Experience the convenience of conducting society elections within the SOCARE app. Vote securely and effortlessly from the comfort of your home, fostering a more inclusive and participative community governance. Stay connected and actively engage in shaping the future of your society."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={notice}
                name="📢 Efficient Notice Board for Instant Communication and Event Management"
                position={{ color: "info", label: "Management Benefit" }}
                description="SOCARE streamlines communication by providing a centralized platform for broadcasting notices to every flat member. Whether it's important announcements, event details, or festival celebrations, stay in the loop effortlessly. Enhance community cohesion through timely and organized communication, fostering a sense of belonging among residents."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={festival}
                name="💡 Seamlessly Organize Festivals, Collect Contributions, and Stay Updated"
                position={{ color: "info", label: "Management Benefit" }}
                description="Empower your community with SOCARE's features to create festival notices, collect contributions, and keep everyone updated on the latest posts. Effortlessly organize and participate in festivals, ensuring a vibrant and harmonious community atmosphere. SOCARE makes it easy to contribute, stay informed, and actively participate in the festivities that bring residents together."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6, mt: 5 }}>
            <MKTypography variant="h3" color="white">
              Benefits For Society Resident :
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            Discover the Best, Trusted by Neighbors!
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={rent}
                name="🌐 Offers, Buy/Sell/Rent, Recommendations:"
                position={{ color: "info", label: "Owner Benefit" }}
                description="SOCARE connects you to exclusive offers, facilitates seamless transactions, and provides trusted recommendations. Your one-stop platform for discovering and engaging with the best services in your community."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={help}
                name="🚨 Emergency Help at Your Fingertips:"
                position={{ color: "info", label: "Resident Benefit" }}
                description="Feel secure with SOCARE! Access immediate assistance from security and neighbors whenever needed. Your safety matters to us. Stay protected and connected with SOCARE."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={book}
                name="🎉 Book Common Facilities, Stay Updated on Activities and Events:"
                position={{ color: "info", label: "Residents Facility" }}
                description="Unlock the potential of your community living! Book shared facilities effortlessly and stay informed about upcoming activities and events. SOCARE ensures you never miss out on the vibrant happenings in your community."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={guest}
                name="🏡 Convenient Booking for Guest House and More:"
                position={{ color: "info", label: "Guests Facility" }}
                description="Planning a guest visit or a celebration? SOCARE lets you book guest houses and facilitates smooth arrangements for festivals and events. Elevate your community experience with SOCARE's convenient booking features."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={connect}
                name="👋 Build Neighborly Connections:"
                position={{ color: "info", label: "Residents Benefit" }}
                description="SOCARE fosters a sense of community by providing a private social network. Connect with your neighbors, engage in discussions, share updates, and enhance the bonds that make your community special. SOCARE brings neighbors closer, making community living enjoyable and connected."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={offline}
                name="📱 Skip Offline Visits, Embrace Seamless Management:"
                position={{ color: "info", label: "Residents Benefit" }}
                description="Bid farewell to tedious paperwork and time-consuming visits! SOCARE simplifies community management by offering a comprehensive suite of features in one application. Access facilities, pay bills, and manage tasks without leaving the comfort of your home. SOCARE streamlines management processes, ensuring efficiency and ease for all residents."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={gate}
                name="🔐 Secure Gate Access and Guest Tracking for Enhanced Security"
                position={{ color: "info", label: "Residents Benefit" }}
                description="Experience heightened security with SOCARE's gate access features. Track and approve guests seamlessly, allowing residents to monitor and control who enters their premises. SOCARE ensures that residents have the tools they need to create a secure and welcoming environment within the society, promoting peace of mind and community safety."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
