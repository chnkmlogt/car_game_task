import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { ListItem } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: "15ch"
  }
}));

const Alan = props => {
  const classes = useStyles();
  let template = null;
  let alan = null;

  if (props.birim === "%") {
    alan = (
      <Tooltip title={props.miktar} arrow>
        <CircularProgress
          className={clsx(classes.margin, classes.textField)}
          variant="static"
          value={props.miktar}
        />
      </Tooltip>
    );
  } else {
    alan = (
      <TextField
        value={props.miktar}
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.birim}</InputAdornment>
          )
        }}
      />
    );
  }
  template = (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography gutterBottom>{props.alanAd} </Typography>
        {alan}
      </CardContent>
    </Card>
  );

  return <ListItem alignItems="center">{template}</ListItem>;
};

export default Alan;
