import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PaymentTable from "./PaymentTable";

const Register = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#181C1F",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // change to 'center' if you want vertical centering
        py: 6,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "#242B2E",
          borderRadius: "25px",
          p: { xs: 3, md: 5 },
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, color: "#FFD700", fontWeight: 700, letterSpacing: 1 }}
        >
          Registration Details
        </Typography>
        <PaymentTable />
        <Typography
          variant="body1"
          align="center"
          sx={{ mt: 4, color: "#B0BEC5" }}
          fontWeight={900}
          fontStyle={"italic"}
        >
          Please fill out this{" "}
          <a
            style={{ color: "red", textDecoration: "underline" }}
            href="https://docs.google.com/forms/d/e/1FAIpQLScKzv9A5bv93brD1EgEqqSuDL_UoaBEFnGc953LRXaIxR0wrA/viewform?usp=header"
          >
            registration form
          </a>{" "}
          after making the payment to complete your registration.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
