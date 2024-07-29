import { Box, Grid, Typography } from "@mui/material";
import WhyChooseUs from "../assets/images/why_choose_us.jpeg";
import Why1 from "../assets/images/why1.webp";
import Why2 from "../assets/images/why2.webp";
import Why3 from "../assets/images/why3.webp";
import Why4 from "../assets/images/why4.webp";

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

const WhyUs = () => {
  return (
    <AnimatedBox direction="down">
      <Box
        sx={{
          padding: "100px 10%",
          margin: "auto",
          minHeight: "90vh",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box>
                <Typography variant="body2" sx={{ color: "#eda932" }}>
                  Why us?
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
                  Why Leading Businesses Choose Us
                </Typography>
                <img
                  style={{
                    width: "100%",
                    height: "40vh",
                    //   objectFit: "cover",
                    borderRadius: "10%",
                  }}
                  src={WhyChooseUs}
                  alt="Home Intro"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexWrap: "wrap",
              }}
            >
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        //   objectFit: "cover",
                        borderRadius: "10%",
                        marginBottom: "10px",
                      }}
                      src={Why1}
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
                      Perfect Match
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
                      We thoroughly assess your mission, progress, and team to
                      connect you with grant opportunities tailored precisely
                      for you.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        //   objectFit: "cover",
                        borderRadius: "10%",
                        marginBottom: "10px",
                      }}
                      src={Why2}
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
                      Stress-Free Process
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
                      Let us handle the complex task of crafting compelling
                      proposals, allowing you to concentrate on expanding your
                      business.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        //   objectFit: "cover",
                        borderRadius: "10%",
                        marginBottom: "10px",
                      }}
                      src={Why3}
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
                      Expert Pairing
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
                      We analyze your technical strengths to pair you with grant
                      writers who are experts in your industry’s language.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        //   objectFit: "cover",
                        borderRadius: "10%",
                        marginBottom: "10px",
                      }}
                      src={Why4}
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
                      Timely Deliverables
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
                      Ensure timely submission with our commitment to meeting
                      all deadlines, giving you peace of mind and a competitive
                      edge in your grant applications.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AnimatedBox>
  );
};

export default WhyUs;
