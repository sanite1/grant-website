import { Box, Grid, TextField, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";

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

const HireWriter = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name Is required"),
    companyName: yup.string().required("Company name Is required"),
    email: yup.string().required("Email Is required"),
    message: yup.string().required("Message Is required"),
  });

  const { handleSubmit, trigger, control } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const handleLoadClick = async (data) => {
    setLoading(true);
  };

  const [orgType, setOrgType] = React.useState("");

  const handleChange = (event) => {
    setOrgType(event.target.value);
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background: "#fef1e5",
          //   width: "80%",
          margin: "auto",
          padding: "30px 10% 50px",
          marginTop: "10vh",
        }}
      >
        <AnimatedBox direction="down">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              width: "100%",
              fontFamily: '"Inria Serif", serif',
              fontWeight: 700,
              fontStyle: "italic",
              marginBottom: "20px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#333333",
            }}
          >
            Your Grant Writer Is Waiting
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Inria Serif", serif',
              textAlign: "center",
              color: "#333333",
              width: { xs: "100%", md: "70%" },
              margin: "auto",
            }}
          >
            We take great pride in matching our grant writers with organizations
            making a difference! Before we get started, we’d like to ask a few
            questions to better understand your needs.
          </Typography>
        </AnimatedBox>
        <AnimatedBox direction="left">
          <Box
            sx={{
              width: { xs: "100%", sm: "85%", md: "80%" },
              margin: "50px auto",
              background: "white",
              borderRadius: "20px",
              padding: {
                xs: "65px 5% 65px",
                sm: "100px 10% 65px",
                md: "55px 10% 65px",
              },
              boxSizing: "border-box",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  First Name
                </Typography>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="Leo"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("firstName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Last Name
                </Typography>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="Fernandez"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("lastName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Your title in the organization
                </Typography>
                <Controller
                  name="title"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g Chief Product Officer"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("title");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Name of your organization
                </Typography>
                <Controller
                  name="companyName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g Bitville"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("companyName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  How is your organization registered?
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    {/* Select one */}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orgType}
                    size="small"
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"For profit"}>For Profit</MenuItem>
                    <MenuItem value={"NGO"}>NGO</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  In what year did you register your organization?
                </Typography>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g. 2020"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("firstName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  In what year did you begin operations?
                </Typography>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g. 2020"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("firstName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  How many employees do you have?
                </Typography>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g. 2020"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("lastName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  In which city and country is your organization headquartered?
                </Typography>
                <Controller
                  name="location"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g London, UK"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("location");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Official Website
                </Typography>
                <Controller
                  name="website"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g www.bitville.com"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("website");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Work Email
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g. leo@bitville.com"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Whatsapp Phone Number
                </Typography>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g. 44280482842"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("lastName");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  What was your annual revenue (business) or expenditure (NGO)
                  in 2023?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    lineHeight: "20px",
                    margin: "10px 0",
                  }}
                  variant="body2"
                >
                  {" "}
                  Note: Grant funders typically give between 30 - 50% of an
                  organization’s annual revenue/budget, as grant funding.
                  Sharing this with us helps us find the right grants for you.
                </Typography>
                <Controller
                  name="revenue"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g 100,000,000"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("revenue");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  What was your revenue (business) or expenditure (NGO) last
                  month?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    lineHeight: "20px",
                    margin: "10px 0",
                  }}
                  variant="body2"
                >
                  {" "}
                  Note: This helps us understand how fast you are growing
                  especially if you are doing better in the current year.
                  Sharing this with us will help us find the right opportunities
                  for you (especially accelerators).
                </Typography>
                <Controller
                  name="revenueM"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      placeholder="e.g 450,000,000"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("revenueM");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  What problem is your organization solving?
                </Typography>
                <Controller
                  name="website"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      multiline
                      minRows={4}
                      placeholder="Write your answer here"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("website");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  How do you solve this problem? Tell us how you change the
                  world.
                </Typography>
                <Controller
                  name="website"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      multiline
                      minRows={4}
                      placeholder="Write your answer here"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("website");
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontFamily: `${"Montserrat"}, sans-serif`,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                  variant="body2"
                >
                  {" "}
                  Which Grant(s) do you wish to hire a grant writer for?
                </Typography>
                <Controller
                  name="website"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { ref, ...fields },
                    fieldState: { error },
                  }) => (
                    <TextField
                      variant="outlined"
                      // sx={textStyle}
                      multiline
                      minRows={4}
                      placeholder="Write your answer here"
                      size="small"
                      fullWidth
                      {...fields}
                      inputRef={ref}
                      error={Boolean(error?.message)}
                      helperText={error?.message}
                      onKeyUp={() => {
                        trigger("website");
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box>
              <LoadingButton
                size="small"
                onClick={handleSubmit(handleLoadClick)}
                endIcon={<SendIcon />}
                loading={loading}
                fullWidth
                loadingPosition="end"
                variant="contained"
                sx={{
                  fontFamily: `${"Montserrat"}, sans-serif`,
                  fontSize: "20px",
                  background: "#6367e4",
                  color: "#000000",
                  "&:hover": {
                    backgroundColor: "#6367e4",
                  },
                  boxShadow: "0 !important",
                  textTransform: "none ! important",
                  borderRadius: "20px",
                  padding: "10px 30px",
                  marginTop: "20px",
                }}
              >
                Submit
              </LoadingButton>
            </Box>
          </Box>
        </AnimatedBox>
      </Box>
      <Footer />
    </Box>
  );
};

export default HireWriter;
