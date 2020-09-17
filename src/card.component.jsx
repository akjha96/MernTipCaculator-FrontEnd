import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "./assets/pay.webp";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  cardActionStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const MediaCard = (props) => {
  const { tip } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Your tip is
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {tip}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionStyle}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Close
          </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
