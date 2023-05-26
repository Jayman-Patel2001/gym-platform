import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "150px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px" mb={1}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "40px", xs: "36px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4} fontWeight="100">
        Check out the most effective exercises for your body
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        mt={5}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="gymImg" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
