import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },

  containerStyle: {
    backgroundColor: "rgba(255, 231, 255, .8)",
    borderRadius: "20px",
  },
  mainStyle: {},
}));

export default useStyles;
