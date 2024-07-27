import { Box, Button, Grid, Link, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import IntroPic from "../assets/images/home_intro_image.jpeg";
import TrustedPic from "../assets/images/trusted_1.webp";
import backgroundImage from "../assets/images/blury_home_background.avif";
import Bockbone from "../assets/images/backbone_image.jpeg";
import WhyUs from "../components/WhyUs";
import HireSteps from "../components/HireSteps";
import Footer from "../components/Footer";

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
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src={IntroPic}
                alt="Home Intro"
              />
            </Box>
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
              <Box>
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
                <Button
                  sx={{
                    background: "#6367e4",
                    outline: "none",
                    borderRadius: "30px",
                    color: "white",
                    padding: "15px 24px",
                    marginTop: "20px",
                  }}
                >
                  Hire a Grant Writer
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Winning Grants  */}

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
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <img
            style={{
              width: "15%",
              objectFit: "cover",
            }}
            src={TrustedPic}
            alt="Home trusted"
          />
          <img
            style={{
              width: "15%",
              objectFit: "cover",
            }}
            src={TrustedPic}
            alt="Home trusted"
          />
          <img
            style={{
              width: "15%",
              objectFit: "cover",
            }}
            src={TrustedPic}
            alt="Home trusted"
          />
          <img
            style={{
              width: "15%",
              objectFit: "cover",
            }}
            src={TrustedPic}
            alt="Home trusted"
          />
          <img
            style={{
              width: "15%",
              objectFit: "cover",
            }}
            src={TrustedPic}
            alt="Home trusted"
          />
        </Box>
      </Box>

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
            <Box>
              <img
                style={{
                  width: "100%",
                  height: "60vh",
                  //   objectFit: "cover",
                  borderRadius: "10% 0 10% 0",
                }}
                src={Bockbone}
                alt="Home Intro"
              />
            </Box>
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
              <Box>
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
              </Box>
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
