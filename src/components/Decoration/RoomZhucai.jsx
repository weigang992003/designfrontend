import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
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
    const { data } = this.props;

    return (
      <Paper className={classes.root} style={{boxShadow: "none"}}>
        <Table className={classes.table} >
          <TableHead>
            <TableRow key="jj">
              <TableCell key="sdf">区域</TableCell>
              <TableCell key="sdfsdf">材料</TableCell>
              <TableCell key="dfsdfsdf"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell key={n.name}>{n.name}</TableCell>
                  <TableCell key={n.calories}>{n.calories}</TableCell>
                  <TableCell key={n.carbs}>{n.carbs && n.carbs.map(c => {
                    return (<img src={c} className={classes.zhucai} />)
                  })}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DecorationStyle)(SimpleTable);
