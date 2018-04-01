import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableFooter, TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import DecorationStyle from "variables/styles/decorationStyle";

class SimpleTable extends React.Component {
  state = {
    qiangmian: '布艺',
    tianhua: '乳胶漆',
    dimian: '木地板',
    chugui: '海格&瓦伦多夫',
    jieju: '汉斯格雅&杜拉',
  };

  handleChange = (event, value) => {
    let newState = {};
    newState[event.target.name] = value;
    this.setState(newState);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow key="jj">
              <TableCell key="sdf">项目</TableCell>
              <TableCell key="sddff">金额</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key='kk'>
              <TableCell key='adf'>方案总价</TableCell>
              <TableCell key='kdf'>xxxxxx 元</TableCell>
            </TableRow>
            <TableRow key='2kk'>
              <TableCell key='2adf'>主材总价</TableCell>
              <TableCell key='2kdf'>xxxxxx 元</TableCell>
            </TableRow>
            <TableRow key='3kk'>
              <TableCell key='2adsf'>整体装修报价</TableCell>
              <TableCell key='2kdfs'>xxxxxxxx 元</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <Button className={classes.button} variant="raised" component={Link} to='/contactus'>
              下一步
            </Button>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DecorationStyle)(SimpleTable);
