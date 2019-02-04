import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  card: {
    width: '100%',
  },
  table: {
    width: '100%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function Top5Table(props) {
  const { classes, title, data } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>{title}</CustomTableCell>
              <CustomTableCell align="right">Sales Amount</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.city}
                </CustomTableCell>
                <CustomTableCell align="right">{row.sales}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </React.Fragment>
  );
}

Top5Table.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
};

Top5Table.defaultProps = {
  classes: {},
  title: '',
  data: [],
};

export default withStyles(styles)(Top5Table);
