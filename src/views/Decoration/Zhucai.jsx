import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableFooter, TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import DecorationStyle from "variables/styles/decorationStyle";

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('橱柜升级模块', ['海格&瓦伦多夫', '欧派'], 'xxxxx元', 'chugui'),
  createData('洁具升级模块', ['汉斯格雅&杜拉', '维特&唯宝', 'TOTO'], 'xxxxx元', 'jieju'),
  createData('... ...', ['...', '...', '...'], 'xxxxx元', 'jieju'),
  createData('总计', [], 'xxxxx元'),
];

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
              <TableCell key="sdf">区域</TableCell>
              <TableCell key="sdfsdf">产品</TableCell>
              <TableCell numeric key="sddff">总计</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell key={n.name}>{n.name}</TableCell>
                  <TableCell numeric key={n.carbs}>
                    <RadioGroup
                      aria-label="gender"
                      name={n.carbs}
                      value={this.state[n.carbs]}
                      className={classes.group}
                      onChange={this.handleChange}
                    >
                      {n.calories.map(c => {
                        return (
                          <FormControlLabel key={c ? c : 'jjjj'} value={c} control={<Radio />} label={c} />
                        )
                      })}
                    </RadioGroup>
                  </TableCell>
                  <TableCell numeric key={n.fat}>{n.fat}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <Button className={classes.button} variant="raised" component={Link} to='/case'>
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
