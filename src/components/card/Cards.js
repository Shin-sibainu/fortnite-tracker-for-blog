import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cardContainer: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
  },
  grid: {
    padding: 28,
  },
}));

export const Cards = (props) => {
  const { soloStatues } = props;
  const classes = useStyle();

  return (
    <div className={classes.cardContainer}>
      <Grid container spacing={3} className={classes.grid}>
        {soloStatues &&
          soloStatues.map((soloStatus) => (
            <Grid item xs={12} sm={3} key={soloStatus.id}>
              <Paper className={classes.paper}>
                <Typography>{soloStatus.name}</Typography>
                <Typography style={{ fontSize: 30 }}>
                  {soloStatus.number}
                </Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
