import { Input, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { soloData } from "../../data/soloData";

const useStyle = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6),
    textAlign: "center",
  },
  input: {
    width: "420px",
    height: "40px",
  },
}));

export const FormInput = (props) => {
  //propsでsetSoloDataを受け取っている。
  const { setSoloData } = props;

  const classes = useStyle();
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    //ここでAPIを叩く。
    fetch(`https://fortnite-api.p.rapidapi.com/stats/${inputText}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5d9f005d9cmsh913c00abd95dcc3p1ef35ejsn4f0c3ce61d03",
        "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const solodefaultData = data.lifetime.all.defaultsolo;
        const soloStatues = soloData(solodefaultData); //ここを追加
        setSoloData(soloStatues); //ここを追加
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Input
          placeholder="Enter Player_name"
          value={inputText}
          className={classes.input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
