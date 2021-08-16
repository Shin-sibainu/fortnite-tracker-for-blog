import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  titleName: {
    textAlign: "center", //中央寄せ
    marginTop: theme.spacing(5), //上から40px間隔を空ける
    fontSize: "60px", //フォントサイズを大きくする
  },
}));

export const Title = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography variant="h2" className={classes.titleName}>
        Track Fortnite Status...
      </Typography>
    </div>
  );
};
