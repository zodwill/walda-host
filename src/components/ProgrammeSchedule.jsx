import React from "react";
import { Box, Typography, Divider, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Element } from "react-scroll";

const schedule = [
  {
    day: "Day 1: Fundamentals Revisited & Research Scope",
    sessions: [
      { time: "09:30 – 10:00", title: "Inauguration & Welcome Address" },
      {
        time: "10:00 – 11:00",
        title:
          "Keynote Talk: “The Evolution of Deep Learning: Research Perspectives”",
      },
      {
        time: "11:15 – 12:30",
        title:
          "Session 1: Foundations of Deep Learning: Mathematics and Physics of Deep Learning",
      },
      {
        time: "01:30 – 03:00",
        title:
          "Session 2: Advancements in Neural Architectures (CNN, RNN, Transformers)",
      },
      {
        time: "03:15 – 04:45",
        title: "Hands-on: Introduction to PyTorch for Research",
      },
      {
        time: "05:00 – 05:30",
        title:
          "Open Discussion: Current Interests and Research Areas of Participants",
      },
    ],
  },
  {
    day: "Day 2: Advanced Architectures & Transfer Learning",
    sessions: [
      {
        time: "09:30 – 11:00",
        title:
          "Session 3: Transfer Learning & Domain Adaptation: Techniques & Challenges",
      },
      {
        time: "11:15 – 12:30",
        title: "Session 4: Transformers & Foundation Models (BERT, GPT, etc.)",
      },
      {
        time: "01:30 – 03:00",
        title: "Hands-on: Transfer Learning using Pretrained Models",
      },
      {
        time: "03:15 – 04:30",
        title:
          "Invited Talk: “Research Trends in Vision Models / Language Models”",
      },
      { time: "04:30 – 05:30", title: "AI Revolution with Generative Models" },
    ],
  },
  {
    day: "Day 3: Healthcare & Biomedical Applications",
    sessions: [
      {
        time: "09:30 – 11:00",
        title:
          "Keynote Talk: “Transforming Healthcare with Deep Learning: Diagnosis to Drug Discovery”",
      },
      {
        time: "11:15 – 12:30",
        title: "Session 3: Deep Learning for Medical Imaging",
      },
      {
        time: "01:30 – 03:00",
        title: "Hands-on: MRI/X-Ray Image Classification using CNNs",
      },
      {
        time: "03:15 – 04:30",
        title:
          "Session 4: Research Challenges in AI-powered Clinical Decision Systems",
      },
      {
        time: "04:30 – 05:30",
        title:
          "Deep Learning Solutions for Medical Diagnostics: Genomics and Other Data Types",
      },
    ],
  },
  {
    day: "Day 4: Environment, Defence, Cybersecurity, Research Showcase  & Hackathon inauguration",
    sessions: [
      {
        time: "09:30 – 11:00",
        title:
          "Keynote Talk – “DL for Sustainability: Climate, Wildlife & Pollution Monitoring”",
      },
      {
        time: "11:15 – 12:30",
        title: "Session 7 – DL for Environmental Data and Disaster Management",
      },
      {
        time: "01:30 – 02:30",
        title:
          "Session 8 – DL in Cybersecurity: Threat Detection & Fraud Prevention",
      },
      {
        time: "02:30 – 03:30",
        title: "Deep Learning for Agriculture Sustainability",
      },
      {
        time: "03:30 – 04:00",
        title: "Hackathon Inauguration and Valedictory Session",
      },
      {
        time: "04:30 – 05:00",
        title:
          "Poster & Paper Presentations (Parallel Tracks or Grouped Thematically)",
      },
      {
        time: "05:00 – 05:30",
        title:
          "Expert Panel Feedback + Best Poster/Paper Awards + Networking Session",
      },
    ],
  },
  {
    day: "Day 5: Collaborative Projects &  Hackathon Prize Distribution",
    sessions: [
      {
        time: "09:30 – 10:30",
        title: "Collaborative Research Idea Pitch (Participants form groups)",
      },
      {
        time: "10:30 – 01:00",
        title: "Group Discussion / Mini Proposal Writing (with Mentors)",
      },
      {
        time: "02:00 – 03:30",
        title: "Group Presentations: Short Research Proposals",
      },
      {
        time: "03:30 – 04:30",
        title: "Hackathon Prize Distribution Ceremony",
      },
    ],
  },
];

const ProgrammeSchedule = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      minHeight: "100vh",
      background: "#181C1F",
      py: 4,
      px: { xs: 1, sm: 3, md: 6 },
      boxSizing: "border-box",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 4,
        width: "80%",
        maxWidth: 1500,
      }}
    >
      {/* Programme Schedule (60%) */}
      <Box
        sx={{
          flex: { xs: "unset", lg: 3 },
          width: { xs: "100%", lg: "60%" },
          background: "#242B2E",
          borderRadius: "25px",
          boxShadow: 3,
          p: 2,
        }}
      >
        <Element name="Schedule">
          <Typography
            variant="h4"
            align="center"
            sx={{ mb: 5, mt: 2, fontWeight: 700, letterSpacing: 1 }}
            color="white"
          >
            Programme Schedule
          </Typography>
        </Element>
        {schedule.map((day) => (
          <Paper
            key={day.day}
            elevation={0}
            sx={{
              background: "transparent",
              mb: 3,
              p: 0,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FFD700", fontWeight: 600, mb: 1 }}
            >
              {day.day}
            </Typography>
            <Divider sx={{ mb: 1, borderColor: "#FFD700" }} />
            {day.sessions.map((session, sidx) => (
              <Box key={sidx} sx={{ display: "flex", mb: 0.5 }}>
                <Typography
                  variant="body2"
                  sx={{ minWidth: 120, color: "#90caf9" }}
                >
                  {session.time}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", ml: 2 }}>
                  {session.title}
                </Typography>
              </Box>
            ))}
          </Paper>
        ))}
      </Box>
    </Box>
  </Box>
);

export default ProgrammeSchedule;
