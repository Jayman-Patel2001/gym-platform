import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

//! Importing various files
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
