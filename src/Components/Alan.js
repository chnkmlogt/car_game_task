import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "15ch"
  }
}));

const Alan = props => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        label={props.alanAd}
        value={props.miktar}
        id="standard-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.birim}</InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default Alan;
