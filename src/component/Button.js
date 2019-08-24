import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonSizes = ({ action, onClick }) => {
  const classes = useStyles();

  return (
    <div>
        <Button size="small" onClick={onClick} className={classes.margin}>
          {action}
        </Button>
    </div>
  );
}

export default ButtonSizes;