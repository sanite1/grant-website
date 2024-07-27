import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";

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

  return (
    <Box>
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
        }}
      >
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
            display: "flex",
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
            display: "flex",
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
      </Box>
      <Divider />
    </Box>
  );
};

export default Navbar;
