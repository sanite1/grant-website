import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { faq } from "../data/faq";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          background: "#fef1e5",
          textAlign: "center",
          //   width: "80%",
          margin: "auto",
          padding: "30px 10% 50px",
        }}
      >
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
            color: "#333333",
          }}
        >
          How Can We Help You?
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: '"Inria Serif", serif', color: "#333333" }}
        >
          We've curated a list of frequently asked questions for your perusal.
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "0px auto 100px",
          width: { xs: "90%", md: "70%" },
          paddingTop: "50px",
        }}
      >
        {faq.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{
              padding: "10px 20px",
              boxShadow: "0",
              borderBottom: "1px solid gray",
              borderRadius: "0",
              "MuiPaper-root-MuiAccordion-root": { borderRadius: 0 },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  fontSize="large"
                  sx={{
                    background: expanded === item.id ? "#6367e4" : "#000",
                    color: "white",
                    borderRadius: "50%",
                  }}
                />
              }
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "black",
                  width: "90%",
                  fontFamily: '"Inria Serif", serif',
                  fontStyle: "normal",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontFamily: '"Inria Serif", serif', color: "black" }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQ;
