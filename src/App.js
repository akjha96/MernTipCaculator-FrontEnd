import React, { useState } from "react";

// Material UI imports
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

// card
import MediaCard from "./card.component";

// import style file
import useStyles from "./App.style";

const App = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    percentage: "",
  });

  const [tip, setTip] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      amount: values.amount,
      percentage: values.percentage,
    };

    fetch("http://localhost:3001/api/v1/calculateTip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setTip(data.toBePayed);
      });
  };

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.mainStyle}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={5}>
        <Container maxWidth="sm" className={classes.containerStyle}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* Amount */}
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={values.amount}
                onChange={handleChange("amount")}
                endAdornment={<InputAdornment position="end">$</InputAdornment>}
                labelWidth={60}
              />
            </FormControl>

            {/* Percentage */}
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-percentage">
                Percentage
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-percentage"
                value={values.percentage}
                onChange={handleChange("percentage")}
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                labelWidth={85}
              />
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
              endIcon={<AttachMoneyIcon />}
            >
              Calculate Tip
            </Button>
          </form>
          {/* Output */}
        </Container>
      </Grid>
      <Grid item xs={5}>
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <MediaCard tip={tip} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
