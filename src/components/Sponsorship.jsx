import React from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { Star, Trophy } from "lucide-react";

const Sponsor = () => {
  const tiers = [
    {
      category: "Platinum",
      contribution: "₹1,50,000",
      recognition:
        "Prominent logo display, speaking opportunity, special recognition at event",
      bgColor: "#FFD700", // Goldish Yellow
    },
    {
      category: "Gold",
      contribution: "₹1,00,000",
      recognition:
        "Logo on event materials, certificate of appreciation, verbal recognition",
      bgColor: "#F4BE2C",
    },
    {
      category: "Silver",
      contribution: "₹50,000",
      recognition: "Logo on website & brochure, certificate of appreciation",
      bgColor: "#C0C0C0",
    },
    {
      category: "Bronze",
      contribution: "₹25,000",
      recognition: "Acknowledgment on website & brochure",
      bgColor: "#CD7F32",
    },
  ];

  return (
    <Box
      sx={{ background: "#181C1F", py: 8, px: { xs: 2, md: 6 }, color: "#fff" }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 2, fontWeight: 700, color: "#FFD700" }}
      >
        Sponsorship Tiers
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 5, color: "#ccc" }}
      >
        Contribute to support the event and get recognized across platforms.
      </Typography>

      {/* Sponsor Tiers */}
      <Grid container spacing={3}>
        {tiers.map((tier, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: "20px",
                backgroundColor: "#242B2E",
                borderTop: `6px solid ${tier.bgColor}`,
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "#fff" }}
                >
                  {tier.category}
                </Typography>
                <Trophy color={tier.bgColor} size={24} />
              </Box>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "#90caf9", fontWeight: 500 }}
              >
                Contribution:{" "}
                <span style={{ color: "#F4BE2C" }}>{tier.contribution}</span>
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                {tier.recognition}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Paper
        elevation={4}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: "20px",
          backgroundColor: "#242B2E",
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#fff" }}>
          Interested in Sponsoring?
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "#ccc" }}>
          Reach out to us for sponsorship details and customized packages.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", color: "#90caf9" }}>
          <Star size={20} style={{ marginRight: 8, color: "#F4BE2C" }} />
          <Typography variant="body2">Email: rakesh.s@iiitdmj.ac.in</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Sponsor;
