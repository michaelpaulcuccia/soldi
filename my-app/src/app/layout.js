import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../app/lib/registry";
import Container from "@mui/material/Container";
import FullBleedContainer from "../../Components/FullBleedContainer";
import UtilBar from "../../Components/UtilBar";
import MainNav from "../../Components/MainNav";
import HeroImage from "../../Components/HeroImage";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {" "}
          <FullBleedContainer bg="dark">
            <UtilBar />
          </FullBleedContainer>
          <Container maxWidth="xl">
            <MainNav />
          </Container>
          <FullBleedContainer bg="dark" bgShouldChangeMobile="yes">
            <HeroImage
              bgimage="/images/hero-finance-1.jpg"
              headline="Stay Ahead with Real-Time Market Insights"
              subtext="Track stocks, bonds, and market trends with up-to-date data"
            />
          </FullBleedContainer>
          <Container maxWidth="xl">{children}</Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
