import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Grid container gap={2} className={css.topCardsContainer}>
          <Grid>
            <Paper className={css.dataCard}>xs=4</Paper>
          </Grid>
          <Grid>
            <Paper className={css.dataCard}>xs=4</Paper>
          </Grid>
          <Grid>
            <Paper className={css.dataCard}>xs=4</Paper>
          </Grid>
        </Grid>
        <Grid xs={12} marginY={2}>
          <Paper className={css.dataCard}>xs=12</Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
