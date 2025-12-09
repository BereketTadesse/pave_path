import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (Animate On Scroll) - Optimized for mobile
const isMobile = window.innerWidth < 768;
AOS.init({
  duration: isMobile ? 600 : 800,         // Shorter duration on mobile
  easing: 'ease-out',                      // Better performance than ease-in-out
  once: true,                              // Animate only once for better performance
  offset: isMobile ? 50 : 100,            // Smaller offset on mobile
  delay: 0,
  mirror: false,                           // Disable mirror for better performance
  disable: isMobile ? 'mobile' : false,     // Disable on mobile if needed
  throttleDelay: 50,                       // Throttle scroll events
});

createRoot(document.getElementById("root")!).render(<App />);
