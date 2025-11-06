import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar";
import Link from "@mui/material/Link";
import Sponsor1Logo from "../assets/logo1.png";

const Hackathon = () => {
  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    py: 10,
    mb: 6,
  };

  const sectionStyles = {
    p: 4,
    bgcolor: "#1A1E21",
    color: "white",
    mb: 4,
    borderRadius: 2,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
  };

  const titleStyles = {
    color: "#FFD700",
    mb: 3,
    borderBottom: "2px solid #FFD700",
    display: "inline-block",
    pb: 1,
  };

  const buttonStyles = {
    bgcolor: "#FFD700",
    color: "#000",
    "&:hover": { bgcolor: "#FFE55C" },
    fontWeight: "bold",
    mt: 2,
  };
  const sponsors = [{ id: 1, logoUrl: Sponsor1Logo, name: "Sponsor A" }];

  return (
    <Box sx={{ bgcolor: "#242B2E", minHeight: "100vh" }}>
      <ResponsiveAppBar />

      {/* Hero Section */}
      <Box id="home" sx={heroStyles}>
        <Container>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            WADLA Hackathon 2025 – 24-Hour Deep Learning Challenge (In-Person)
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Tackle Real-World Challenges — Build. Compete. Innovate, Onsite!
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#FFD700", fontWeight: "bold", mb: 2 }}
          >
            Date: 18th – 19th December, 2025 | Location: PDPM IIITDM JABALPUR
            , MP
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", mx: "auto", mb: 3 }}
          >
            Join one of the most intense in-person 24-hour hackathons where
            innovation meets impact. Teams from across the globe will gather
            onsite to design, develop, and present practical AI solutions to
            pressing real-world problems.
          </Typography>
          {/* <Button variant="contained" sx={buttonStyles} disabled>
            Register Soon
          </Button>
          <Button
            variant="outlined"
            sx={{ ml: 2, color: "#fff", borderColor: "#fff" }}
            href="#tracks"
          >
            View Tracks
          </Button> */}
        </Container>
      </Box>

      <Container>
        {/* About Section */}
        <Box id="about" sx={sectionStyles}>
          <Typography variant="h4" component="h3" sx={titleStyles}>
            About the Hackathon
          </Typography>
          <Typography variant="body1" paragraph>
            WADLA Hackathon is a 24-hour in-person sprint dedicated to solving
            real-world problems with cutting-edge deep learning. The hackathon
            fosters innovation, collaboration, and hands-on learning with expert
            mentorship, all onsite.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Who can join:
              </Typography>
              <Typography component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <li>Students from all disciplines</li>
                <li>AI practitioners and professionals</li>
                <li>Research groups and innovators</li>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Team size:
              </Typography>
              <Typography> 3 members per team</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Deliverables:
              </Typography>
              <Typography component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <li>A working prototype or proof of concept</li>
                <li>Short demo video (max 3 minutes)</li>
                <li>4-slide summary presentation</li>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              variant="contained"
              sx={buttonStyles}
              component={Link}
              href="https://forms.gle/JpW2WdJdQfijv54CA" // Assuming this is the WADLA page URL
            >
              Register Now
            </Button>
          </Box>
        </Box>

        {/* Tracks & Challenges Section */}
        <Box id="tracks" sx={sectionStyles}>
          <Typography variant="h4" component="h3" sx={titleStyles}>
            Hackathon Tracks & Challenges
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                1. Healthcare AI
              </Typography>
              <Typography>
                AI in diagnostics, predictive monitoring, and medical imaging.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                2. AI for Sustainability
              </Typography>
              <Typography>
                Smart agriculture, energy optimization, environment-focused
                solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                3. NLP & Responsible LLMs
              </Typography>
              <Typography>
                Domain-specific LLMs, retrieval-augmented generation, ethical AI
                usage.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                4. AI Safety & Security
              </Typography>
              <Typography>
                Robust AI models, adversarial defense, interpretable systems.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Prizes & Sponsors Section */}
        <Box id="prizes" sx={sectionStyles}>
          <Typography variant="h4" component="h3" sx={titleStyles}>
            Prizes & Sponsors
          </Typography>

          <Typography variant="body1" paragraph>
            Prize Pool – To be Announced Soon. We will also provide recognition
            & mentorship for top-performing teams, and certificates for all
            participants. Registration starting soon – Stay tuned!
          </Typography>
          <Grid container spacing={2}>
            {sponsors.map(
              (
                sponsor // Use the new sponsors array
              ) => (
                <Grid item xs={6} sm={3} key={sponsor.id}>
                  <Paper
                    sx={{
                      p: 1, // Adjusted padding to make room for the logo
                      height: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "#FFFFFF", // Changed background to white for better logo contrast
                      border: "2px solid #333", // Simplified border
                    }}
                  >
                    <img
                      src={sponsor.logoUrl}
                      alt={`${sponsor.name} logo`} // Crucial for accessibility
                      style={{
                        maxWidth: "100%", // Ensures image fits within the Paper width
                        maxHeight: "100%", // Ensures image fits within the Paper height
                        objectFit: "contain", // Scales the image nicely without cropping
                      }}
                    />
                  </Paper>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "center" }}
                    component="a"
                    href="https://injectsolar.com/"
                  >
                    <h1 style={{fontSize: 25}}  >Inject Solar LLP</h1>
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Mentors & Judges Section */}
        <Box id="mentors" sx={sectionStyles}>
          <Typography variant="h4" component="h3" sx={titleStyles}>
            Mentors & Judges
          </Typography>
          <Typography variant="body1" paragraph>
            A panel of domain experts and industry leaders will guide
            participants and evaluate final submissions.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Dr. A. Researcher
              </Typography>
              <Typography variant="body2">
                AI Research Lead | Specializes in computer vision and medical
                imaging
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Ms. B. Engineer
              </Typography>
              <Typography variant="body2">
                ML Engineer | Focused on scalable model deployment
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Prof. C. Scholar
              </Typography>
              <Typography variant="body2">
                Academic Chair | Expert in robust and interpretable AI models
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* How to Participate Section */}
        <Box id="how-to-participate" sx={sectionStyles}>
          <Typography variant="h4" component="h3" sx={titleStyles}>
            How to Participate
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Steps:
              </Typography>
              <Typography
                component="ol"
                sx={{ pl: 2, listStyleType: "decimal" }}
              >
                <li>Form a team (3 members)</li>
                <li>Fill the google form </li>
                <li>
                  Attend the in-person kickoff and dataset briefing at the venue
                </li>
                <li>Submit code, models, and demo video within 24 hours</li>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Judging Criteria:
              </Typography>
              <Typography component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                <li>Impact & Novelty</li>
                <li>Technical Complexity & Reproducibility</li>
                <li>Robustness & Evaluation</li>
                <li>Presentation & Clarity</li>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Section */}
        <Box id="contact" sx={{ textAlign: "center", py: 4, color: "white" }}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ color: "#FFD700", mb: 2 }}
          >
            Ready to push the boundaries of AI?
          </Typography>
          <Typography variant="body1" paragraph>
            Register your team and join the in-person WADLA Hackathon 2025.
            Compete for recognition, mentorship, and prizes while solving
            real-world challenges. Limited slots available onsite!
          </Typography>
          <Button
            variant="contained"
            sx={buttonStyles}
            href="https://forms.gle/JpW2WdJdQfijv54CA"
          >
            Register Team
          </Button>
          {/* <Button
            variant="outlined"
            sx={{ ml: 2, color: "#fff", borderColor: "#fff" }}
          >
            Sponsor Us
          </Button> */}
        </Box>

        {/* Copyright Footer */}
        <Box
          sx={{
            textAlign: "center",
            py: 2,
            mt: 4,
            borderTop: "1px solid #333",
          }}
        >
          <Typography variant="body2" sx={{ color: "#888" }}>
            © WADLA 2025 – Building bridges between research and real-world AI
            solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hackathon;
