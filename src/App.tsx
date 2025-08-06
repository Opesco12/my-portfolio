import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const Layout = () => (
    <div className="bg-white">
      <Navbar />
      {/* <div className="hidden lg:block lg:fixed top-10 left-5">
        <DotLottieReact
          src="https://lottie.host/82868830-cfee-4446-bf80-55807cf30227/GXM2lvtBBu.lottie"
          loop
          autoplay
          style={{ width: "250px", height: "250px" }}
        />
      </div>

      <div className="hidden lg:block lg:fixed bottom-10 left-5">
        <DotLottieReact
          src="https://lottie.host/82868830-cfee-4446-bf80-55807cf30227/GXM2lvtBBu.lottie"
          loop
          autoplay
          style={{ width: "250px", height: "250px" }}
        />
      </div>

      <div className="hidden lg:block lg:fixed top-10 right-5">
        <DotLottieReact
          src="https://lottie.host/82868830-cfee-4446-bf80-55807cf30227/GXM2lvtBBu.lottie"
          loop
          autoplay
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <div className="hidden lg:block lg:fixed bottom-10 right-5">
        <DotLottieReact
          src="https://lottie.host/82868830-cfee-4446-bf80-55807cf30227/GXM2lvtBBu.lottie"
          loop
          autoplay
          style={{ width: "250px", height: "250px" }}
        />
      </div> */}
      <div className="min-h-screen m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/projects/:project"
            element={<ProjectDetails />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
