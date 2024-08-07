import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Service from "../components/ServiceStack";
import backgroundImage from "../assets/images/blury_home_background.avif";
import introImage from "../assets/images/service_intro.webp";

import { useInView } from "react-intersection-observer";

import { keyframes } from "@emotion/react";

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromDown = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedBox = ({ children, direction }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  let animation;
  switch (direction) {
    case "left":
      animation = slideFromLeft;
      break;
    case "right":
      animation = slideFromRight;
      break;
    case "down":
      animation = slideFromDown;
      break;
    case "appear":
      animation = appear;
      break;
    default:
      animation = appear;
  }

  return (
    <Box
      ref={ref}
      sx={{
        animation: inView ? `${animation} 1s ease-out` : "none",
      }}
    >
      {children}
    </Box>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          padding: "50px 10%",
          margin: "auto",
          minHeight: "90vh",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "10vh",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <AnimatedBox direction="left">
              <img
                style={{
                  width: "100%",
                  height: "60vh",
                  //   objectFit: "cover",
                  borderRadius: "10% 0 10% 0",
                }}
                src={introImage}
                alt="Home Intro"
              />
            </AnimatedBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexWrap: "wrap",
              }}
            >
              <AnimatedBox direction="right">
                <Typography variant="body2" sx={{ color: "#eda932" }}>
                  Services
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    width: "100%",
                    fontFamily: '"Inria Serif", serif',
                    fontWeight: 700,
                    fontStyle: "italic",
                    marginBottom: "10px",
                    letterSpacing: "2px",
                    lineHeight: "1.5",
                  }}
                >
                  As the backbone of impact-driven organizations
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
                  We provide essential support in navigating the complex,
                  time-consuming, and competitive world of grant writing. Our
                  top-rated grant writers are here to help you secure your next
                  grant successfully, allowing you to focus on making a
                  difference.
                </Typography>
              </AnimatedBox>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* services  */}

      <AnimatedBox direction="down">
        <Service />
      </AnimatedBox>
      <Footer />
    </Box>
  );
};

export default Services;
