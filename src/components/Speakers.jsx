import React, { useEffect, useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Grid,
  Typography,
  LinearProgress,
} from "@mui/material";
import Slider from "react-slick";
import speakersData from "../content/speakers.json";
import { Element } from "react-scroll";

const Speakers = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'carousel'
  const [academiaSpeakers, setAcademiaSpeakers] = useState([]);
  const [industrySpeakers, setIndustrySpeakers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch speaker data
  useEffect(() => {
    setLoading(true);

    const academiaData = speakersData.speakers.filter(
      (item) => item.workingField === "Academia"
    );
    const industryData = speakersData.speakers.filter(
      (item) => item.workingField === "Industry"
    );

    setAcademiaSpeakers(academiaData);
    setIndustrySpeakers(industryData);
    setLoading(false);
  }, []);

  // Carousel settings
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Speaker card component
  const SpeakerCard = ({ speaker }) => (
    <Box sx={{ color: "white", textAlign: "center", p: 2 }}>
      <img
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "50%",
          margin: "auto",
          objectFit: "cover",
        }}
        src={speaker.profilePicPublicUrl}
        alt={speaker.name}
      />
      <a
        href={speaker.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h5" sx={{ color: "#f9adc0", mt: 1 }}>
          {speaker.name}
        </Typography>
      </a>
      <Typography variant="body1">
        {speaker.designation} <br /> {speaker.company}
      </Typography>
    </Box>
  );

  return (
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
      <Element name="Speakers">
        <Box
          sx={{
            backgroundColor: "#242B2E",
            borderRadius: "25px",
            color: "#FFFFFF",
            boxShadow: 4,
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 3,
              color: "#FFD700",
              fontWeight: 700,
              letterSpacing: 1,
              fontFamily: "comic neue, sans-serif",
            }}
          >
            Speakers
          </Typography>

          {/* View Toggle */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <ButtonGroup variant="outlined">
              <Button
                onClick={() => setViewMode("grid")}
                sx={{
                  bgcolor: viewMode === "grid" ? "#FFD700" : "transparent",
                  color: viewMode === "grid" ? "#000" : "#FFD700",
                }}
              >
                Grid View
              </Button>
              <Button
                onClick={() => setViewMode("carousel")}
                sx={{
                  bgcolor: viewMode === "carousel" ? "#FFD700" : "transparent",
                  color: viewMode === "carousel" ? "#000" : "#FFD700",
                }}
              >
                Carousel View
              </Button>
            </ButtonGroup>
          </Box>

          {/* Academic Experts Section */}
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "#90caf9", mb: 2 }}
          >
            Academic Experts
          </Typography>
          {loading ? (
            <LinearProgress color="secondary" />
          ) : viewMode === "grid" ? (
            <Grid
              container
              spacing={2}
              sx={{
                overflowY: "auto",
                maxHeight: "400px",
                bgcolor: "#616C6F",
                borderRadius: "25px",
                p: 2,
                "&::-webkit-scrollbar": { width: "0.6em" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ffffff",
                  borderRadius: "25px",
                },
              }}
            >
              {academiaSpeakers.map((speaker, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <SpeakerCard speaker={speaker} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ p: 2, bgcolor: "#616C6F", borderRadius: "25px" }}>
              <Slider {...carouselSettings}>
                {academiaSpeakers.map((speaker, index) => (
                  <div key={index}>
                    <SpeakerCard speaker={speaker} />
                  </div>
                ))}
              </Slider>
            </Box>
          )}

          {/* Industry Experts Section */}
          <Typography
            variant="h5"
            align="center"
            sx={{ color: "#90caf9", mt: 4, mb: 2 }}
          >
            Industry Experts
          </Typography>
          {loading ? (
            <LinearProgress color="secondary" />
          ) : viewMode === "grid" ? (
            <Grid
              container
              spacing={2}
              sx={{
                overflowY: "auto",
                maxHeight: "400px",
                bgcolor: "#616C6F",
                borderRadius: "25px",
                p: 2,
                "&::-webkit-scrollbar": { width: "0.6em" },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#ffffff",
                  borderRadius: "25px",
                },
              }}
            >
              {industrySpeakers.map((speaker, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <SpeakerCard speaker={speaker} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ p: 2, bgcolor: "#616C6F", borderRadius: "25px" }}>
              <Slider {...carouselSettings}>
                {industrySpeakers.map((speaker, index) => (
                  <div key={index}>
                    <SpeakerCard speaker={speaker} />
                  </div>
                ))}
              </Slider>
            </Box>
          )}
        </Box>
      </Element>
    </Box>
  );
};

export default Speakers;
