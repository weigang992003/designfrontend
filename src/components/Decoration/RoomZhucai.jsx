import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import DecorationStyle from "variables/styles/decorationStyle";

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('墙面', ['石材', '乳胶漆', '布艺', '壁纸'], 'xxxxx元', 'qiangmian'),
  createData('天花', ['乳胶漆'], 'xxxxx元', 'tianhua'),
  createData('地面', ['木地板', '瓷砖', '石材'], 'xxxxx元', 'dimian'),
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
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DecorationStyle)(SimpleTable);
