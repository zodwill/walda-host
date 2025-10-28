import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Element } from "react-scroll";

const committee = [
  {
    title: "Chief Patron",
    members: [
      { name: "Prof. Bhartendu K Singh", role: "Director, IIITDM Jabalpur" },
    ],
  },

  {
    title: "Technical Chairs",
    members: [
      { name: "Prof. Leehter Yao", role: "NTUT Taiwan" },
      { name: "Prof C. Chandra Sekhar", role: "IIT Madras" },
      { name: "Prof. Bapi Raju S", role: "IIIT Hyderabad" },
      { name: "Prof. Richa Singh", role: "IIT Jodhpur" },
      { name: "Prof. Mayank Vats", role: "IIT Jodhpur" },
      { name: "Prof. Pritee Khanna", role: "IIITDM Jabalpur" },
      { name: "Prof. Atul Gupta", role: "IIITDM Jabalpur" },

      { name: "Prof. Jimson Mathew", role: "IIT Patna" },
      { name: "Prof. M. Tavneer", role: "IIT Indore" },
      { name: "Prof. Surya Prakash", role: "IIT Indore" },
      { name: "Dr. Sriparna Saha", role: "IIT Patna" },

      { name: "Dr. Arun PV", role: "IIIT Sri City" },
      { name: "Dr. Dinesh Singh", role: "IIT Mandi" },
      { name: "Dr. Sraban Kumar Mohanty", role: "IIITDM Jabalpur" },
      { name: "Dr. Ayan Seal", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Workshop Chair",
    members: [
      { name: "Prof. Aparajita Ojha", role: "IIITDM Jabalpur" },
      { name: "Dr. Rakesh Kumar Sanodiya", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Publication Chair",
    members: [
      { name: "Dr. Ayan Seal", role: "IIITDM Jabalpur" },
      { name: "Dr. Avinash Chandra Pandey", role: "IIITDM Jabalpur" },
      { name: "Dr. Neelam Dayal", role: "IIITDM Jabalpur" },
      { name: "Dr. Satish K. Tiwari", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Local Organizing Committee",
    members: [
      { name: "Dr. Pushpa Raikwal", role: "IIITDM Jabalpur" },
      { name: "Dr. Lokendra Kumar Balyan", role: "IIITDM Jabalpur" },
      { name: "Dr. Amit Vishwakarma", role: "IIITDM Jabalpur" },
      { name: "Dr. Durgesh Singh", role: "IIITDM Jabalpur" },
      { name: "Dr. Syam Kumar Chokka", role: "IIITDM Jabalpur" },
      { name: "Dr. Manish Thakur", role: "IIITDM Jabalpur" },
      { name: "Dr. Akshay Pandey", role: "IIITDM Jabalpur" },
      { name: "Dr. Shivansh Mishra", role: "IIITDM Jabalpur" },
      { name: "Mr. Aditya Sharma", role: "IIITDM Jabalpur" },
    ],
  },

  {
    title: "Publicity Chairs",
    members: [
      { name: "Dr. Avinash Ravi Raja", role: "IIITDM Jabalpur" },
      { name: "Dr. Matloob Khushi", role: "Brunel University of London" },
      { name: "Dr. K. T. Lai", role: "NTUT Taiwan" },
      { name: "Dr. Ranjeet K Ranjan", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Sponsorship Chair",
    members: [
      { name: "Dr. K Ponappa", role: "IIITDM Jabalpur" },
      { name: "Dr. Dip Prakash Samajdar", role: "" },
      { name: "Dr. Ranjeet K Ranjan", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Finance Chairs",
    members: [
      { name: "Dr. Sunil Agrawal", role: "IIITDM Jabalpur" },
      { name: "Dr. Nitish Andola", role: "IIITDM Jabalpur" },
      { name: "Dr. Deepmala", role: "IIITDM Jabalpur" },
    ],
  },
  {
    title: "Hackathon Chairs",
    members: [
      { name: "Dr. Sachin K Jain", role: "IIITDM Jabalpur" },
      { name: "Dr. Shivdayal Patel", role: "IIITDM Jabalpur" },
      { name: "Dr. Ashish Singh Parihar", role: "IIITDM Jabalpur" },
    ],
  },
];

const CommitteeAccordion = () => (
  <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 3 }}>
    {committee.map((section, idx) => (
      <Accordion
        key={section.title}
        sx={{
          backgroundColor: "#ffffff1f",
          color: "#fff",
          mb: 1,
          borderRadius: 2,
          boxShadow: 1,
        }}
        defaultExpanded={idx === 0}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#f0e68c" }} />}
          aria-controls={`panel${idx}-content`}
          id={`panel${idx}-header`}
        >
          <Typography sx={{ color: "#FFD700", fontWeight: 600 }}>
            {section.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {section.members.map((m, mi) => (
            <Box key={mi} sx={{ mb: 1, pl: 2 }}>
              <Typography sx={{ color: "#f9adc0", fontWeight: 500 }}>
                {m.name}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#fff", ml: 1 }}>
                {m.role}
              </Typography>
              {mi < section.members.length - 1 && (
                <Divider sx={{ my: 1, background: "#333" }} />
              )}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
);

const OrganizingCommitee = () => (
  <Box
    sx={{
      width: "100vw",
      minHeight: "100vh",
      bgcolor: "#181C1F",
      py: 6,
      px: { xs: 1, sm: 3, md: 6 },
      boxSizing: "border-box",
    }}
  >
    <Element name="Commitee">
      <Box
        sx={{
          backgroundColor: "#242B2E",
          color: "#FFFFFF",
          borderRadius: "25px",
          maxWidth: 1000,
          mx: "auto",
          py: 4,
          px: { xs: 2, sm: 4 },
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, color: "#FFD700", fontWeight: 700 }}
        >
          Organizing Committee
        </Typography>
        <CommitteeAccordion />
      </Box>
    </Element>
  </Box>
);

export default OrganizingCommitee;
