import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import ResponsiveAppBar from "../components/NavBar";
const trackList = [
  {
    title: "Core AI & Deep Learning",
    items: [
      "Self-Supervised and Unsupervised Learning",
      "Deep Learning: Models and Algorithms",
      "Transfer Learning and Domain Adaptation",
      "Reinforcement Learning and Decision Making",
      "Representation Learning and Contrastive Methods",
      "Generative AI (GANs, Diffusion Models, VAEs)",
      "Agentic AI and Intelligent Agents",
      "Dependable and Robust AI",
      "Cognitive Computing and Natural Computing",
    ],
  },
  {
    title: "Biomedical and Life Sciences",
    items: [
      "Medical Imaging and Diagnostics",
      "Digital Health and Clinical Decision Support",
      "Multi-Omics and AI in Systems Biology",
      "Neurotechnology and Brain-Computer Interfaces",
      "Computational Biology and Neuroscience",
      "Biometrics and Biometric Security",
      "Brain Science and Cognitive Neuroscience",
    ],
  },
  {
    title: "Large-Scale and Language Models",
    items: [
      "Large Language Models (LLMs)",
      "Multilingual Models (MLMs)",
      "Prompt Engineering and Fine-tuning",
      "Multimodal AI and Vision-Language Models",
      "Planning and Reasoning with Foundation Models",
    ],
  },
  {
    title: "Data-Driven Intelligence",
    items: [
      "Big Data Analytics and Granular Computing",
      "Statistical Analysis and Learning",
      "Data Visualization and Interpretability",
      "Spatial Data Analysis and Geospatial Intelligence",
    ],
  },
  {
    title: "Human-AI Interaction & Ethics",
    items: [
      "Explainable and Trustworthy AI",
      "AI Ethics and Responsible AI Practices",
      "Social Cognition and Human-Centered AI",
      "Augmented and Virtual Reality (AR/VR)",
      "Emotion Recognition and Affective Computing",
    ],
  },
  {
    title: "Applications in Science, Society & Engineering",
    items: [
      "Remote Sensing and Satellite Image Analysis",
      "Smart and Intelligent Transportation Systems",
      "Cyber-Physical Systems and IoT",
      "Edge Intelligence and TinyML",
      "Smart Sensors and Embedded AI",
    ],
  },
];
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

function CallForPapers() {
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
          marginTop: "54px", // Adjust for fixed header
          fontFamily: "'Roboto', 'Arial', sans-serif",
        }}
      >
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT: Call for Papers */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background: "rgba(34, 37, 43, 0.95)",
                borderRadius: 3,
                p: { xs: 3, md: 5 },
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mb: 2, color: "#FCE76B" }}
              >
                Call For Papers
              </Typography>
              <Divider
                sx={{
                  mb: 3,
                  bgcolor: "#3EA8FF",
                  height: 3,
                  borderRadius: 1,
                  width: 100,
                }}
              />
              <Typography variant="body1" sx={{ mb: 3 }}>
                The 4th International Research workshop on Advances in Deep
                Learning and Applications (December 15–20, 2025) aims to bring
                together selected minds from various research communities for
                brainstorming sessions on their research outcomes, selected for
                publication in an international digital library. Participation
                is open to academia and industry experts in all major and
                interdisciplinary areas relating to Core AI & Deep Learning,
                Biomedical and Life Sciences, Large-Scale and Language Models,
                Data-Driven Intelligence, Human-AI Interaction & Ethics, and
                real-world Applications in Science, Society & Engineering.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                WADLA'25 will be held at PDPM-IIITDM Jabalpur, Madhya Pradesh.
                Conference proceedings will be part of the "17th IEEE
                International Conference on Computational Intelligence and
                Communication Networks," published per IEEE standards.
              </Typography>

              <Typography variant="h5" sx={{ color: "#91CFD9", mb: 1, mt: 2 }}>
                Tracks (not limited to):
              </Typography>
              {trackList.map((track) => (
                <Box key={track.title} sx={{ mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#F3C48F", fontWeight: 500, mb: 1 }}
                  >
                    {track.title}
                  </Typography>
                  <List dense sx={{ pl: 2, color: "#F9FAFB" }}>
                    {track.items.map((itm) => (
                      <ListItem key={itm} sx={{ py: 0, px: 0 }}>
                        <ListItemText
                          primary={`• ${itm}`}
                          primaryTypographyProps={{ fontSize: 15 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
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
                  sx={{ pb: 1, color: "#FCE76B" }}
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

export default CallForPapers;
