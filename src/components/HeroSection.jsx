import React from "react";
import BannerCarousel from "./BannerCarousel";
import { Box, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import image1 from "../assets/1-min.png";
import image2 from "../assets/2-min.png";
import image3 from "../assets/3-min.png";
import image4 from "../assets/4-min.png";
import image5 from "../assets/5-min.png";
import image6 from "../assets/6-min.png";
import image7 from "../assets/7-min.png";
import image8 from "../assets/8-min.png";
import image9 from "../assets/9-min.png";
import image10 from "../assets/10-min.png";
import image11 from "../assets/11-min.png";
import image12 from "../assets/12-min.png";
import image13 from "../assets/13-min.png";
import logo from "../assets/WADLA-logo.webp";

const Page1 = () => {
  const banners = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];
  const caption =
    "Embrace the AI Revolution with World-Leading Experts at WADLA 4.0";

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#FFFFFF",
        width: "100%",
        backgroundColor: "#242B2E",
        borderRadius: "0 0 25px 25px",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            margin: "auto",
            padding: "2.5%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          4th International Research Workshop on Advances in Deep Learning and
          Applications
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "86%",
            sm: "95%",
            md: "55%",
            lg: "65%",
          },
        }}
      >
        <BannerCarousel banners={banners} />
      </Box>
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "40%",
            lg: "30%",
          },
          margin: "auto",
          padding: "2.5%",
        }}
      >
        <div
          style={{
            opacity: 0.3,
            // center the image
            zIndex: -10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="WADLA Logo"
            style={{
              objectFit: "contain",
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            transition: "all 0.5s ease",
            color: "#FFFFFF",
            borderRadius: "0 0 25px 0",
            backgroundColor: "#242B2E",
          }}
        >
          <h2
            style={{
              margin: "0px",
              fontSize: "2.0rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {caption}
          </h2>

          <div>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              From:{" "}
              <span
                style={{
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                15th December, 2025
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              To:{" "}
              <span
                style={{
                  // color: "#FFD700",
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                19th December, 2025
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Venue:
              <span
                style={{
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                {" "}
                IIITDM Jabalpur
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Organized by:
              <span
                style={{
                  color: "#f9adc0",
                  // #5DA3FA
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                <a
                  style={{
                    color: "#f9adc0",
                    textDecoration: "none",
                  }}
                  href="https://www.iiitdmj.ac.in/"
                  target="_blank"
                >
                  {" "}
                  Indian Institute of Information Technology, Design and
                  Manufacturing Jabalpur {<LaunchIcon />}
                </a>
              </span>
            </h3>
          </div>

          {/* <h3>
          From: Coming Soon...<br/>
          To: Coming Soon...<br/>
          Venue: Online/IIITS<br/>
          Organized by: Indian Institute of Information Technoloyg, Sri City<br/>
        </h3> */}
        </div>
      </Box>
    </Box>
  );
};

export default Page1;
