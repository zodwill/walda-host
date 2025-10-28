import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import OrganizingCommitee from "../components/OrganizingCommitee";
import About from "../components/About";
import ProgrammeSchedule from "../components/ProgrammeSchedule";
import Speakers from "../components/Speakers";
import Register from "../components/Register";
import Sponsor from "../components/Sponsorship";
const HomePage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div className="body">
      <ResponsiveAppBar />
      <HeroSection />
      <About />

      <ProgrammeSchedule />

      <Speakers />
      <div id="Register">
        <Register />
      </div>

      <OrganizingCommitee />
      <Sponsor />
    </div>
  );
};

export default HomePage;
