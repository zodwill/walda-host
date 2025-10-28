import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import ResponsiveAppBar from "../components/NavBar";

const importantDates = [
  { label: "Paper Submission Opens", date: "20 July 2025" },
  { label: "Paper Submission Closes", date: "5 October 2025" },
  { label: "Notification of Acceptance", date: "Rolling (approx. 25 days from submission)" },
  { label: "Final Paper Submission Deadline", date: "25 October 2025" },
  { label: "Copyright Submission Begins", date: "To be announced" },
  { label: "Workshop Dates", date: "15–19 December 2025" },
  { label: "Registration Opens", date: "Upon acceptance notification" },
  { label: "Registration Closes", date: "30 November 2025" },
];


function PaperSubmission() {
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
          {/* LEFT: Paper Submission Content */}
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
                Paper Submission: Open
              </Typography>

              <Typography variant="h6" fontWeight="600" gutterBottom>
                Submission Guidelines
              </Typography>
              <Typography paragraph>
                You are requested to submit a full paper of{" "}
                <strong>4-8 pages</strong> (5 pages included in registration
                fee, additional pages will be charged) for oral presentation.
                Submitted papers should contain original, unpublished material
                not currently under review for any other conference or journal.
                All papers must follow strict{" "}
                <strong>IEEE formatting instructions</strong>; violation may
                lead to rejection.
              </Typography>

              <Typography paragraph>
                Authors are encouraged to submit their papers using the
                <strong> Microsoft CMT</strong>. Papers can be submitted online
                by the following{" "}
                <Link
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FWADLA2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  CLICK Link
                </Link>
                . For submission problems, please contact{" "}
                <Link
                  href="mailto:rakesh.s@iiitdmj.ac.in"
                  color="#FCE76B"
                  underline="hover"
                >
                  rakesh.s@iiitdmj.ac.in
                </Link>
                .
              </Typography>

              <Typography paragraph>
                All papers will be peer-reviewed by at least three independent
                referees from a panel of international reviewers and will
                undergo plagiarism checks in accordance with IEEE policies (see{" "}
                <Link
                  href="http://www.ieee.org/publications_standards/publications/rights/ID_Plagiarism.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  IEEE Note on Plagiarism
                </Link>
                ).
              </Typography>

              <Typography paragraph>
                The papers should be submitted in a{" "}
                <strong>2-column IEEE standard format</strong> in{" "}
                <strong>.doc</strong> or <strong>.pdf</strong> formats only.
                Authors are requested not to prefix their credentials (e.g.,
                Dr., Prof.) in their names.
              </Typography>

              <Typography paragraph>
                Download the manuscript templates here:{" "}
                <Link
                  href="https://cicn.in/assets/csnt_format.doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  Microsoft Word (.doc)
                </Link>
                ,{" "}
                <Link
                  href="https://cicn.in/assets/template.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  PDF Example
                </Link>
                , and{" "}
                <Link
                  href="https://cicn.in/assets/Latex.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  LaTeX Template (.zip)
                </Link>
                .
              </Typography>

              <Typography paragraph>
                Authors of accepted papers will need to sign an{" "}
                <Link
                  href="https://www.ieee.org/publications/rights/copyright-main.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="#FCE76B"
                >
                  IEEE Copyright Release Form
                </Link>{" "}
                online and must present their paper at the conference. Only
                presented papers will be published in the conference proceedings
                and linked on IEEE Xplore.
              </Typography>

              <Typography sx={{ color: "#a3b2cf", mt: 3 }}>
                The past conferences have an acceptance rate of less than 25%,
                and this conference will not exceed this acceptance rate.
                Plagiarism checking tools will be used, and plagiarized papers
                will be rejected at any stage.
              </Typography>

              <Typography sx={{ color: "#a3b2cf", mt: 3 }}>
                Authors are also encouraged to register as reviewers. A PhD
                degree and good academic experience are the minimum
                requirements. At least 3 reviews are necessary for the
                acceptance of a paper. Volunteers for reviewing papers are
                welcome.
              </Typography>

              <Typography variant="body2" sx={{ color: "#da6e6eff", mt: 3 }}>
                Conference proceedings meeting IEEE standards may be eligible
                for inclusion in IEEE Xplore. IEEE reserves the right not to
                publish proceedings that do not meet quality standards.
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

export default PaperSubmission;
