import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import Qr from "../assets/Screenshot 2025-07-09 001134.png";

const rows = [
  {
    participantType: "Student/Research Scholar",
    earlyBird: "₹5,500",
    earlyDiscount: "₹5,000*",
    late: "₹6,000",
    lateDiscount: "₹5,500*",
  },
  {
    participantType: "Faculty Members",
    earlyBird: "₹6,500",
    earlyDiscount: "₹6,000*",
    late: "₹7,000",
    lateDiscount: "₹6,500*",
  },
  {
    participantType: "Industry Participant",
    earlyBird: "₹8,000",
    earlyDiscount: "₹7,500*",
    late: "₹9,000",
    lateDiscount: "₹8,000*",
  },
  {
    participantType: "Hackathon Participation",
    earlyBird: "₹1,200",
    earlyDiscount: "₹1,000*",
    late: "₹1,500",
    lateDiscount: "₹1,200*",
  },
  {
    participantType: "Poster Presentation",
    earlyBird: "₹8,000",
    earlyDiscount: "₹7,500*$",
    late: "₹9,000",
    lateDiscount: "₹8,500*$",
  },
  {
    participantType: "Paper Presentation",
    earlyBird: "₹9,000",
    earlyDiscount: "₹8,500*$",
    late: "₹10,000",
    lateDiscount: "₹9,000*$",
  },
];

const notes = [
  "* Discount applicable for participants who attended the 1st Summer School on Deep Learning / WADLA 1.0 / WADLA 2.0 / WADLA 3.0.",
  "$ Additional discount for IEEE members",
  "Full registration includes Hackathon participation, food, and accommodation.",
  "For each extra paper ₹3000 will be charged.",
  "Last Date of Registration: 31 Oct, 2025 (Limited seats Available)",
];

const PaymentTable = () => (
  <Box>
    <h3 style={{ color: "#FFD700", textAlign: "left" }}>
      WADLA 4.0 – Registration Fee Structure
    </h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="payment table">
        <TableHead sx={{ backgroundColor: "#F4BE2Caf" }}>
          <TableRow>
            <TableCell>Type of Participation</TableCell>
            <TableCell align="right">
              Early Bird
              <br />
              Registration
            </TableCell>
            <TableCell align="right">
              Early Bird
              <br />
              After Discount
            </TableCell>
            <TableCell align="right">
              Late
              <br />
              Registration
            </TableCell>
            <TableCell align="right">
              Late
              <br />
              After Discount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.participantType}
              </TableCell>
              <TableCell align="right">{row.earlyBird}</TableCell>
              <TableCell align="right">{row.earlyDiscount}</TableCell>
              <TableCell align="right">{row.late}</TableCell>
              <TableCell align="right">{row.lateDiscount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Box mt={2} mb={2}>
      <ul style={{ fontSize: "1rem" }}>
        {notes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </Box>

    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <h3>Indian Participants Fee Payment (Through UPI)</h3>
        <a
          href="https://drive.google.com/file/d/17gxOTk0_yx8uztcyY-hvG_NeJpjeCUG5/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            textDecoration: "none",
            justifyContent: "center",
            color: "#FFFFFF",
          }}
        >
          <img
            src={Qr}
            alt="UPI QR code"
            style={{ width: "200px", height: "200px" }}
          />
          <LaunchIcon />
        </a>
      </Grid>

      <Grid item xs={12} md={6}>
        <p>ACCOUNT NAME: PDPM IIITDMJ PROJECT ACCOUNT 02</p>
        <p>BANK ACCOUNT NUMBER: 50493049746</p>
        <p>IFSC CODE: IDIB000M694</p>
        <p>BANK NAME: Indian Bank </p>
        <p>BRANCH: Mehgawan, IIITDM Campus Branch, Jabalpur</p>
        <h3>Foreign Participants Fee Payment Information</h3>
        <p>MICR CODE: 482019014</p>
      </Grid>
    </Grid>
  </Box>
);

export default PaymentTable;
