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

export const Cards = () => {
  const classes = useStyle();

  const testData = [
    {
      id: 1,
      name: "kdr",
      number: 3.53, //ここの数字はAPIから後でとってくる
    },
    {
      id: 2,
      name: "placetop1",
      number: 30,
    },
    {
      id: 3,
      name: "placetop10",
      number: 50,
    },
    {
      id: 4,
      name: "placetop25",
      number: 70,
    },
    {
      id: 5,
      name: "winrate",
      number: 1.4,
    },
  ];
  return (
    <div className={classes.cardContainer}>
      <Grid container spacing={3} className={classes.grid}>
        {testData &&
          testData.map((data) => (
            <Grid item xs={12} sm={3} key={data.id}>
              <Paper className={classes.paper}>
                <Typography>{data.name}</Typography>
                <Typography style={{ fontSize: 30 }}>{data.number}</Typography>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
