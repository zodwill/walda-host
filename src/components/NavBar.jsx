import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../assets/WADLA-logo.webp";

const paperMenuItems = [
  {
    label: "Call for Papers",
    route: "/callForPapers",
  },
  {
    label: "Paper Submission",
    route: "/paperSubmission",
  },
  {
    label: "Proceedings",
    route: "/proceedings",
  },
];

const settings = ["Logout"];

function ResponsiveAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paperMenuAnchor, setPaperMenuAnchor] = useState(null);
  const [pages, setPages] = useState([
    "About",
    "Hackathon",
    "Schedule",
    "Speakers",
    "Acknowledgments",
    "Nearest-Attractions",
    "Paper Submissions",
    "Accommodation",
    
  ]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const [paperMenuAnchorDesktop, setPaperMenuAnchorDesktop] =
    React.useState(null);
  const [paperMenuAnchorMobile, setPaperMenuAnchorMobile] =
    React.useState(null);

  // For desktop dropdown
  const handlePaperMenuOpenDesktop = (event) => {
    setPaperMenuAnchorDesktop(event.currentTarget);
  };
  const handlePaperMenuCloseDesktop = () => {
    setPaperMenuAnchorDesktop(null);
  };

  // For mobile dropdown
  const handlePaperMenuOpenMobile = (event) => {
    setPaperMenuAnchorMobile(event.currentTarget);
  };
  const handlePaperMenuCloseMobile = () => {
    setPaperMenuAnchorMobile(null);
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("timeOfLogin");
    window.location.reload();
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setPages([
        "About",
        "Speakers",
        "News",
        "Archive",
        "Schedule",
        "Acknowledgments",
        "Nearest-Attractions",
        "Home",
        "Hackathon",
      ]);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#242B2E",
          color: "white",
          boxShadow: "none",
          borderRadius: "0 0 25px 25px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop Logo */}
            <Avatar
              alt="WADLA Logo"
              src={logo}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "none",
              }}
            />

            <div
              style={{
                textAlign: "center",
                maxWidth: "360px",
                lineHeight: "1.5",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  marginBottom: "-8px",
                  marginLeft: "5px",
                  display: { xs: "none", md: "none", lg: "flex" },
                  fontSize: "0.8rem",
                }}
              >
                4th International Research Workshop on Advances in
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  marginLeft: "25px",
                  marginTop: "-8px",
                  display: { xs: "none", md: "none", lg: "flex" },
                  fontSize: "1.2rem",
                }}
              >
                Deep Learning and Applications
              </Typography>
            </div>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                <MenuItem onClick={handlePaperMenuOpenMobile}>
                  <Typography>Paper Submissions</Typography>
                  <ArrowDropDownIcon />
                </MenuItem>
                <Menu
                  anchorEl={paperMenuAnchorMobile}
                  open={Boolean(paperMenuAnchorMobile)}
                  onClose={handlePaperMenuCloseMobile}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {paperMenuItems.map((item) => (
                    <RouterLink
                      key={item.label}
                      to={item.route}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={() => {
                        handlePaperMenuCloseMobile();
                        handleCloseNavMenu();
                      }}
                    >
                      <MenuItem>{item.label}</MenuItem>
                    </RouterLink>
                  ))}
                </Menu>

                {pages
                  .filter((page) => page !== "Paper Submissions")
                  .map((page) => {
                    if (page === "Acknowledgments") {
                      return (
                        <a
                          key={page}
                          href="/acknowledgment.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        </a>
                      );
                    }
                    const isRoutePage =
                      page === "Home" ||
                      page === "Nearest-Attractions" ||
                      page === "Hackathon" ||
                      page === "Accommodation";
                    if (isRoutePage) {
                      return (
                        <RouterLink
                          key={page}
                          to={`/${page.toLowerCase()}`}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        </RouterLink>
                      );
                    } else {
                      if (location.pathname === "/") {
                        // On home page, use react-scroll
                        return (
                          <Link
                            key={page}
                            activeClass="active"
                            to={page}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                          </Link>
                        );
                      } else {
                        // On other pages, navigate to home and scroll after navigation
                        return (
                          <MenuItem
                            key={page}
                            onClick={() => {
                              navigate(`/#${page}`);
                              handleCloseNavMenu();
                            }}
                          >
                            <Typography textAlign="center">{page}</Typography>
                          </MenuItem>
                        );
                      }
                    }
                  })}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Avatar
              alt="WADLA"
              src={logo}
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "none",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WADLA
            </Typography>

            {/* Desktop Navbar */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => {
                if (page === "Paper Submissions") {
                  return (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Button
                        color="inherit"
                        endIcon={<ArrowDropDownIcon />}
                        onClick={handlePaperMenuOpenDesktop}
                      >
                        Paper Submissions
                      </Button>
                      <Menu
                        anchorEl={paperMenuAnchorDesktop}
                        open={Boolean(paperMenuAnchorDesktop)}
                        onClose={handlePaperMenuCloseDesktop}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {paperMenuItems.map((item) => (
                          <RouterLink
                            key={item.label}
                            to={item.route}
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={handlePaperMenuCloseDesktop}
                          >
                            <MenuItem>{item.label}</MenuItem>
                          </RouterLink>
                        ))}
                      </Menu>
                    </Box>
                  );
                }
                if (page === "Acknowledgments") {
                  return (
                    <a
                      key={page}
                      href="/acknowledgment.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </a>
                  );
                }
                const isRoutePage =
                  page === "Home" ||
                  page === "Nearest-Attractions" ||
                  page === "Hackathon" ||
                  page === "Accommodation";
                if (isRoutePage) {
                  return (
                    <RouterLink
                      key={page}
                      to={`/${page.toLowerCase()}`}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </RouterLink>
                  );
                } else {
                  if (location.pathname === "/") {
                    // On home page, use react-scroll
                    return (
                      <Link
                        key={page}
                        activeClass="active"
                        to={page}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      </Link>
                    );
                  } else {
                    // On other pages, navigate to home and scroll after navigation
                    return (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          navigate(`/#${page}`);
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    );
                  }
                }
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar
        sx={{
          bgcolor: "#242B2E",
        }}
      />
    </div>
  );
}
export default ResponsiveAppBar;
