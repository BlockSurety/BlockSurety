import React from "react";
import { Header } from "./components/Header";
import { BioPage } from "./components/BioPage";
import { FeaturePage } from "./components/FeaturePage";
import { EcosystemPage } from "./components/EcosystemPage";
import { GetStartPage } from "./components/GetStartPage";
import { AppStoreSection } from "./components/AppStoreSection";
import { AccessPage } from "./components/AccessPage";
import { Footer } from "./components/Footer";
import { useTheme } from "./utils/ThemeContext"; // Import useTheme

function HomePage() {
  const { theme } = useTheme(); // Get the theme state

  return (
    <div
      className={`App ${
        theme ? "bg-[#FFFFFF]" : "bg-[#202020]"
      } p-[10px] h-full`}
    >
      <Header />
      <BioPage />
      <FeaturePage />
      <EcosystemPage />
      <GetStartPage />
      <AccessPage />
      <Footer />
    </div>
  );
}

export default HomePage;
