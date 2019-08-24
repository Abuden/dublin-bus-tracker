import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: "relative",
  },
  input: {
    margin: theme.spacing(1),
  },
}));

const Inputs = ({ searchField, searchChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Input
        placeholder="Bus Stop No."
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={searchChange}
      />
    </div>
  );
}

export default Inputs;