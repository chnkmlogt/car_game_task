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
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

const Alan = props => {
  const classes = useStyles();

  let alan = null;
  if (props.birim === "%") {
    alan = (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography gutterBottom>{props.alanAd} </Typography>

          <CircularProgress
            className={clsx(classes.margin, classes.textField)}
            variant="static"
            value={props.miktar}
          />
        </CardContent>
      </Card>
    );
  } else {
    alan = (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography gutterBottom>{props.alanAd} </Typography>
          <TextField
            value={props.miktar}
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{props.birim}</InputAdornment>
              )
            }}
          />
        </CardContent>
      </Card>
    );
  }

  return <ListItem>{alan}</ListItem>;
};

export default Alan;
