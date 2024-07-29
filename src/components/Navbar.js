import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  const activeLinkStyle = {
    color: "#6367e4",
    fontWeight: "bold",
    textDecoration: "underline",
  };

  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    if (sideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [sideBar]);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "20% 60% 20%",
          width: "80%",
          margin: "auto",
          padding: "0 10%",
          height: "10vh",
          borderBottomStyle: "solid",
          borderBottom: "1px",
          borderBottomColor: "black",
          position: "fixed",
          top: "0",
          background: "white",

          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
          zIndex: "9999",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            background: "#333333",
            zIndex: "9999",
            display: sideBar ? "block" : "none",
            padding: "10%",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Inria Serif", serif',
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "white",
              marginBottom: "50px",
            }}
          >
            LOGO
            <Box sx={{ float: "right" }} onClick={() => setSideBar(!sideBar)}>
              <ClearIcon fontSize="large" />
            </Box>
          </Typography>
          <Box
            sx={{
              // display: { xs: "flex", md: "flex" },
              justifyContent: "space-around",
              alignItems: "center",
              minWidth: "50%",
              margin: "auto",
              height: "80%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Link
                to="/"
                style={currentPath === "/" ? activeLinkStyle : linkStyle}
              >
                Home
              </Link>
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Link
                to="/services"
                style={
                  currentPath === "/services" ? activeLinkStyle : linkStyle
                }
              >
                Services
              </Link>
            </Typography>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginBottom: "40px" }}
            >
              <Link
                to="/faqs"
                style={currentPath === "/faqs" ? activeLinkStyle : linkStyle}
              >
                FAQs
              </Link>
            </Typography>
            <Typography
              sx={{
                background: "#6367e4",
                outline: "none",
                borderRadius: "20px",
                color: "white",
                padding: "5px 12px",
                textAlign: "center",
                marginBottom: "40px",
              }}
              variant="h4"
            >
              <Link
                to="/hire-a-grant-writer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Hire a Grant Writer
              </Link>
            </Typography>
            {/* <Typography variant="body2">Team</Typography> */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Inria Serif", serif',
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "black",
            }}
          >
            LOGO
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            visibility: { xs: "hidden", md: "visible" },
            justifyContent: "space-around",
            alignItems: "center",
            minWidth: "50%",
            margin: "auto",
          }}
        >
          <Typography variant="body2">
            <Link
              to="/"
              style={currentPath === "/" ? activeLinkStyle : linkStyle}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              to="/services"
              style={currentPath === "/services" ? activeLinkStyle : linkStyle}
            >
              Services
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              to="/faqs"
              style={currentPath === "/faqs" ? activeLinkStyle : linkStyle}
            >
              FAQs
            </Link>
          </Typography>
          {/* <Typography variant="body2">Team</Typography> */}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              background: "#6367e4",
              outline: "none",
              borderRadius: "20px",
              color: "white",
              padding: "5px 12px",
            }}
            variant="body2"
          >
            <Link
              to="/hire-a-grant-writer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Hire a Grant Writer
            </Link>
          </Typography>
        </Box>
        <Box
          onClick={() => setSideBar(!sideBar)}
          sx={{
            display: { md: "none", xs: "flex" },
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <MenuIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
