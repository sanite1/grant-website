import { Box, Button, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import IntroPic from "../assets/images/home_intro_image.jpeg";
import TrustedPic from "../assets/images/trusted_1.webp";
import backgroundImage from "../assets/images/blury_home_background.avif";
import Bockbone from "../assets/images/backbone_image.jpeg";
import WhyUs from "../components/WhyUs";
import HireSteps from "../components/HireSteps";
import Footer from "../components/Footer";
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

const Home = () => {
  return (
    <Box>
      <Navbar />

      {/* Introduction Text  */}

      <Box
        sx={{
          width: "80%",
          margin: "auto",
          minHeight: "90vh",
          padding: { xs: "50px 0", md: "0" },
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <AnimatedBox direction="left">
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xs: "40vh",
                    md: "80vh",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={IntroPic}
                  alt="Home Intro"
                />
              </Box>
            </AnimatedBox>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexWrap: "wrap",
                marginTop: { xs: "30px", md: "0" },
              }}
            >
              <AnimatedBox direction="right">
                <Typography
                  variant="h3"
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
                  Secure the Best 1% of Grant Writers
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
                  Managing a business is challenging enough without the added
                  burden of grant writing. Bring on exceptional grant writers
                  who can craft compelling proposals and help you secure the
                  funding you need.{" "}
                  <strong style={{ textDecoration: "" }}>
                    Spend less time writing and achieve more success.
                  </strong>
                </Typography>
                <>
                  <Link
                    href="/hire-a-grant-writer"
                    color="inherit"
                    underline="none"
                    sx={{
                      background: "#6367e4",
                      outline: "none",
                      borderRadius: "30px",
                      color: "white",
                      padding: "15px 24px",
                      marginTop: "20px",
                      float: "left",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Hire A Grant Writer
                  </Link>
                </>
              </AnimatedBox>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Winning Grants  */}

      <AnimatedBox direction="down">
        <Box
          sx={{
            background: "#333333",
            textAlign: "center",
            //   width: "80%",
            margin: "auto",
            padding: "30px 10% 50px",
          }}
        >
          <Typography variant="body2" sx={{ color: "#eda932" }}>
            The List is Wide
          </Typography>
          <Typography
            variant="h4"
            sx={{
              width: "100%",
              fontFamily: '"Inria Serif", serif',
              fontWeight: 700,
              fontStyle: "italic",
              marginBottom: "20px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "white",
            }}
          >
            Some Grants Our Writers Have Won
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: { xs: "45%", md: "15%" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={TrustedPic}
                alt="Home trusted"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "45%", md: "15%" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={TrustedPic}
                alt="Home trusted"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "45%", md: "15%" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={TrustedPic}
                alt="Home trusted"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "45%", md: "15%" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={TrustedPic}
                alt="Home trusted"
              />
            </Box>
            <Box
              sx={{
                width: { xs: "45%", md: "15%" },
                marginBottom: { xs: "10px", md: "0" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                src={TrustedPic}
                alt="Home trusted"
              />
            </Box>
          </Box>
        </Box>
      </AnimatedBox>

      {/* Bockbone Text  */}

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
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <AnimatedBox direction="left">
              <img
                style={{
                  width: "100%",
                  height: { xs: "40vh", md: "60vh" },
                  //   objectFit: "cover",
                  borderRadius: "10% 0 10% 0",
                }}
                src={Bockbone}
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
                  Our Drive
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
                  We Are the Essential Support for Impact-Driven Organizations
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
                  Grant writing can be complex, time-consuming, and highly
                  competitive, but it is achievable. Engage top-rated grant
                  writers to secure your next grant successfully.
                </Typography>
                <>
                  <Link
                    href="/hire-a-grant-writer"
                    color="inherit"
                    underline="none"
                    sx={{
                      background: "#6367e4",
                      outline: "none",
                      borderRadius: "30px",
                      color: "white",
                      padding: "15px 24px",
                      marginTop: "20px",
                      float: "left",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    Hire A Grant Writer
                  </Link>
                </>
              </AnimatedBox>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Why us  */}

      <WhyUs />

      {/* Hire Steps  */}

      <HireSteps />

      {/* Footer  */}

      <Footer />
    </Box>
  );
};

export default Home;
