import "./App.css";
import "./css/themeToggle.css";
import Footer from "./components/Footer";
import SiteFooter from "./components/SiteFooter";
import Home from "./components/Home";
import SectionSwitcher from "./components/SectionSwitcher";
import { ThemeToggle } from "./components/ThemeToggle";
import { scroller } from "react-scroll";
import { React } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Smooth scrolling to top of window
  const scrollToTop = () => {
    scroller.scrollTo("home", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Smooth scrolling to projects section
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
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
