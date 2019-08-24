import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    textAlign: "center",
    position: "relative",
    left: "20%",
    top: "20px"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 35,
    label: '35',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 45,
    label: '45',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 55,
    label: '55',
  },
  {
    value: 60,
    label: '60',
  },
];

function valuetext(value) {
  return value;
}

const DiscreteSlider = ({ onTimerChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Slider
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={5}
        marks={marks}
        min={5}
        max={60}
        onChangeCommitted={onTimerChange}
        valueLabelDisplay="off"
      />
    </div>
  );
}

export default DiscreteSlider;