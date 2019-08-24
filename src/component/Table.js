import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from './Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const SimpleTable = ({ action, results, onClick }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Route</TableCell>
            <TableCell align="right">Due</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          results.length !== 0 
            ? results.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.route}
                </TableCell>
                <TableCell align="right">
                  {row.duetime}
                </TableCell>
                <TableCell align="right">
                  <Button action={action} onClick={onClick.bind(this, i)}/>
                </TableCell>
              </TableRow>
            ))
            :
              <TableRow>
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="right">
                </TableCell>
                <TableCell align="right">
                </TableCell>
              </TableRow> 
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;

/* { results.length === 0 ?
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow> 
            :
              results.forEach(entry => {
                return entry;
              })          
          }*/