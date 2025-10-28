import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";
import ResponsiveAppBar from "../components/NavBar";

const importantDates = [
  { label: "Paper Submission Opens", date: "20 July 2025" },
  { label: "Paper Submission Closes", date: "5 October 2025" },
  {
    label: "Notification of Acceptance",
    date: "Rolling (approx. 25 days from submission)",
  },
  { label: "Final Paper Submission Deadline", date: "25 October 2025" },
  { label: "Copyright Submission Begins", date: "To be announced" },
  { label: "Workshop Dates", date: "15–19 December 2025" },
  { label: "Registration Opens", date: "Upon acceptance notification" },
  { label: "Registration Closes", date: "30 November 2025" },
];

function Proceedings() {
  return (
    <>
      <ResponsiveAppBar />

      <Box
        sx={{
          minHeight: "100vh",
          background: "#4c5052ff",
          color: "#F9FAFB",
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 8 },
          marginTop: "54px", // Adjust for AppBar height
          fontFamily: "'Roboto', 'Arial', sans-serif",
        }}
      >
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT: Proceedings Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background: "rgba(34, 37, 43, 0.95)",
                borderRadius: 3,
                p: { xs: 3, md: 5 },
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="700"
                sx={{ mb: 3, color: "#FCE76B" }}
              >
                Proceedings
              </Typography>
              <Divider
                sx={{
                  mb: 3,
                  bgcolor: "#3EA8FF",
                  height: 2,
                  borderRadius: 1,
                  width: 100,
                }}
              />

              <Typography paragraph>
                WADLA'25 proceedings will be published by{" "}
                <strong>Conference Publishing Services</strong>, and accepted
                and presented papers will be included in{" "}
                <strong>IEEE Xplore</strong>, provided they meet all the
                requirements as per IEEE Standards.
              </Typography>
              <Typography paragraph>
                All previous proceedings of 16 conferences are available on{" "}
                <strong>IEEE Xplore</strong>.
              </Typography>
              <Typography paragraph>
                It is mandatory that at least one author registers for every
                paper that is included in the conference proceedings. The
                proceedings will be made available during the conference.
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT: Important Dates */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                background:
                  "linear-gradient(135deg, #545b61ff 90%, #3d4c60ff 100%)",
                borderRadius: 4,
                boxShadow: "0px 10px 36px 0px rgba(0,0,0,0.16)",
              }}
              elevation={10}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ pb: 1, color: "#fff2aaff" }}
                >
                  Important Dates
                </Typography>
                <Divider
                  sx={{
                    bgcolor: "#FCE76B",
                    height: 2,
                    borderRadius: 1,
                    mb: 3,
                    width: 70,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    background: "rgba(50, 63, 75, 0.92)",
                    borderRadius: 3,
                    px: 3,
                    py: 4,
                    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.16)",
                  }}
                >
                  {importantDates.map((item, idx) => (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      key={item.label}
                      sx={{
                        borderBottom:
                          idx !== importantDates.length - 1
                            ? "1px solid #343d46"
                            : "none",
                        pb: idx !== importantDates.length - 1 ? 1.5 : 0,
                        mb: idx !== importantDates.length - 1 ? 1.5 : 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#FCE76B",
                          fontWeight: 700,
                          fontSize: 22,
                          lineHeight: 1,
                        }}
                      >
                        &#11044;
                      </Typography>
                      <Typography
                        sx={{
                          color: "#FCE76B",
                          fontWeight: 600,
                          minWidth: 205,
                          letterSpacing: 0.2,
                        }}
                      >
                        {item.label}:
                      </Typography>
                      <Typography
                        sx={{ color: "#F9FAFB", fontWeight: 400, fontSize: 17 }}
                      >
                        {item.date}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Proceedings;
