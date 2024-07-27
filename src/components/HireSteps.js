import { Box, Button, Grid, Link, Typography } from "@mui/material";
import hire_steps from "../assets/images/hire_steps.webp";

const HireSteps = () => {
  return (
    <Box
      sx={{
        background: "#fef1e5",
        textAlign: "center",
        //   width: "80%",
        margin: "auto",
        padding: "30px 10% 50px",
        minHeight: "90vh",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="body2" sx={{ color: "#eda932" }}>
        Ready To Get Started?
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
          //   color: "white",
          marginBottom: "20px",
        }}
      >
        Hire In 3 Steps!
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      background: "#eda932",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100px",
                        width: "5px",
                        background: "black",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    fontWeight: "700",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  Fill a simple form
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontWeight: "300",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  We’ll review your information and online footprint to evaluate
                  your grant worthiness.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      background: "#eda932",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "150px",
                        width: "5px",
                        background: "black",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    fontWeight: "700",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  Answer a few questions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontWeight: "300",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  An expert on our team will work with you to better understand
                  your project, technical needs, and goals.We will then
                  recommend grant opportunities or give you recommendations to
                  position you for grant funding.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      background: "#eda932",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    fontWeight: "700",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  The Right Fit, Guaranteed
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                    fontWeight: "300",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    textAlign: "left",
                    // color: "white",
                  }}
                >
                  If you are grant worthy, we will match you with a grant writer
                  or a team ready to put together a powerful grant proposal for
                  you.
                </Typography>
              </Grid>
            </Grid>

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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <img
                style={{
                  width: "100%",
                }}
                src={hire_steps}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HireSteps;
