import "./App.css";
import "./css/themeToggle.css";
import { scroller } from "react-scroll";
import { Analytics } from "@vercel/analytics/react";
import { ThemeToggle } from "./components/ThemeToggle";
import Home from "./components/Home";
import SectionSwitcher from "./components/SectionSwitcher";
import SiteFooter from "./components/SiteFooter";
import Footer from "./components/Footer";

const scrollOptions = {
  duration: 400,
  delay: 0,
  smooth: "easeInOutQuart",
} as const;

function App() {
  const scrollToTop = () => {
    scroller.scrollTo("home", { ...scrollOptions });
  };

  const scrollToProjects = () => {
    scroller.scrollTo("projects", { ...scrollOptions });
  };

  return (
    <div className="App">
      <ThemeToggle />
      <Home />
      <SectionSwitcher />
      <SiteFooter />
      <Footer scrollToProjects={scrollToProjects} scrollToTop={scrollToTop} />
      <Analytics />
    </div>
  );
}

export default App;
