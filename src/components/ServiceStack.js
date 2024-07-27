import { Box, Grid, Typography } from "@mui/material";
import Service1 from "../assets/images/service1.svg";
import Service2 from "../assets/images/service2.svg";
import Service3 from "../assets/images/service3.svg";
import Service4 from "../assets/images/service4.svg";

const Service = () => {
  return (
    <Box
      sx={{
        // textAlign: "center",
        //   width: "80%",
        margin: "auto",
        padding: "30px 10% 50px",
        minHeight: "90vh",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "#eda932",
        }}
      >
        We're here for you
      </Typography>
      <Typography
        variant="h4"
        sx={{
          width: { xs: "100%", md: "60%" },
          fontFamily: '"Inria Serif", serif',
          fontWeight: 700,
          fontStyle: "italic",
          margin: "auto",
          marginBottom: "40px",
          letterSpacing: "2px",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        We know you want to do more... We’ve got you covered.
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            style={{
              width: "100px",
              height: "100px",
              //   objectFit: "cover",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
            src={Service1}
            alt="Home Intro"
          />
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
            }}
          >
            Grant Searching
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            Finding grants can be challenging. Let us handle the search for you,
            identifying opportunities that fit your needs.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            style={{
              width: "100px",
              height: "100px",
              //   objectFit: "cover",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
            src={Service2}
            alt="Home Intro"
          />
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
            }}
          >
            Grant Consultation
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            Not sure which grant to apply for your business? We provide expert
            advice to guide you.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            style={{
              width: "100px",
              height: "100px",
              //   objectFit: "cover",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
            src={Service3}
            alt="Home Intro"
          />
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
            }}
          >
            Grant Reviewing
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            Our seasoned grant writers will review your proposals and offer
            valuable insights and improvements.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            style={{
              width: "100px",
              height: "100px",
              //   objectFit: "cover",
              borderRadius: "10%",
              marginBottom: "10px",
            }}
            src={Service4}
            alt="Home Intro"
          />
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
            }}
          >
            Pitch Deck Consulting/Review
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
            }}
          >
            Your pitch deck is crucial for making a great first impression on
            investors. We're here to ensure it's outstanding.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;
