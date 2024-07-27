import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#333333",
        margin: "auto",
        padding: "30px 10% 0px",
      }}
    >
      <Grid container spacing={2} mb={"20px"}>
        <Grid item xs={12} sm={4} md={2.5}>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              marginBottom: "10px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
              color: "white",
            }}
          >
            Subscribe to our newsletter
          </Typography>
          <Box display={"flex"} alignItems={"end"}>
            <TextField
              id="standard-basic"
              size="small"
              label="Email"
              variant="standard"
              sx={{
                "& .MuiInputBase-input": {
                  outline: "none",
                  color: "white",
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input:hover": {
                  outline: "none",
                  borderRadius: "5px",
                  borderBottomColor: "white",
                  color: "white",
                },
                "& .MuiFormHelperText-root": {
                  color: "red !important",
                },
                "& .Mui-active": {
                  border: "1px solid white",
                  outline: "none",
                  borderRadius: "5px",
                  borderBottomColor: "white",
                },
                "& .Mui-focused": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "white", // Change the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change the border color when active/focused
                  },
                },
              }}
            />
            <Box
              sx={{
                background: "#6367e4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30px",
                width: "50px",
                boxSizing: "border-box",
              }}
            >
              <ArrowRightAltIcon sx={{ color: "white" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2.5}>
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: "sans-serif",
                  letterSpacing: "1px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Company
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: "sans-serif",
                  letterSpacing: "1px",
                  color: "white",
                }}
              >
                <Link href="/" color="inherit" underline="none">
                  Home
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: "sans-serif",
                  letterSpacing: "1px",
                  color: "white",
                }}
              >
                <Link
                  href="/hire-a-grant-writer"
                  color="inherit"
                  underline="none"
                >
                  Hire Writer
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: "sans-serif",
                  letterSpacing: "1px",
                  color: "white",
                }}
              >
                <Link href="/services" color="inherit" underline="none">
                  Services
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  width: "100%",
                  marginBottom: "15px",
                  fontFamily: "sans-serif",
                  letterSpacing: "1px",
                  color: "white",
                }}
              >
                <Link href="/faqs" color="inherit" underline="none">
                  FAQs
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={3.5}>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
              color: "white",
            }}
          >
            Location
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              marginBottom: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              color: "white",
            }}
          >
            Flat 52 The Arcade, {"\n"}
            N7 0RY London UNITED KINGDOM
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              marginBottom: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              fontWeight: "700",
              color: "white",
              marginTop: "30px",
            }}
          >
            Email
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              marginBottom: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              color: "white",
            }}
          >
            info@bitville.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3.5}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="body1"
              startIcon={<FaWhatsapp color="white" />}
              sx={{
                border: "1px solid white",
                borderRadius: "20px",
                padding: "10px 25px",
                color: "white",
              }}
            >
              <Link
                href="https://api.whatsapp.com/send?phone=447311990756&text=Hello%2C%20please%20help%20me%20win%20a%20grant."
                color="inherit"
                underline="none"
              >
                Chat With Us
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider color="white" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            // width: "100%",
            fontFamily: '"Inria Serif", serif',
            fontWeight: 700,
            fontStyle: "italic",
            marginBottom: "20px",
            letterSpacing: "2px",
            lineHeight: "1.5",
            color: "white",
          }}
        >
          LOGO
        </Typography>
        <Box display={"flex"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "16px",
            }}
          >
            <InstagramIcon fontSize="20px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "16px",
            }}
          >
            <XIcon fontSize="20px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "16px",
            }}
          >
            <FaLinkedinIn />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              background: "white",
              borderRadius: "50%",
              marginLeft: "16px",
            }}
          >
            <FaFacebookF />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
