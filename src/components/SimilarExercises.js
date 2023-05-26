import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: "25px", xs: "0" },
        p: "20px",
      }}
    >
      <Typography variant="h4" fontWeight="700" mb={7}>
        Similar {""}
        <span
          style={{
            textTransform: "capitalize",
            color: "#ff2625",
            fontWeight: "700",
          }}
        >
          Target Muscle
        </span>
        {""} Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
          mb: "100px",
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      {/* For Same Equipment */}
      <Typography variant="h4" fontWeight="700" mb={7}>
        Similar {""}
        <span
          style={{
            textTransform: "capitalize",
            color: "#ff2625",
            fontWeight: "700",
          }}
        >
          Equipment
        </span>
        {""} Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
