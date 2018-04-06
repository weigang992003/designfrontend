import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableFooter, TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import { Bottom, Button, Top } from "components";
import { Link } from 'react-router-dom'
import DecorationStyle from "variables/styles/decorationStyle";

let id = 0;
function createData(name, calories, carbs) {
  id += 1;
  return { id, name, calories, carbs };
}

const data = [
  createData('橱柜', ['欧派', '海格&瓦伦多夫'], 'chugui'),
  createData('洁具', ['TOTO', '汉斯格雅&杜拉维特&唯宝'], 'jieju'),
  createData('电器', ['西门子', 'MIELE'], 'dianqi'),
  createData('电梯', ['日立LGE', '日立LCA&蒂森克虏伯'], 'dianti'),
];

const prices = {
  '欧派': '0元',
  '海格&瓦伦多夫': '20万',
  'TOTO': '0元',
  '汉斯格雅&杜拉维特&唯宝': '20万',
  '西门子': '0元',
  'MIELE': '15万',
  '日立LGE': '0元',
  '日立LCA&蒂森克虏伯': '10万',
}

class SimpleTable extends React.Component {
  state = {
    chugui: '欧派',
    jieju: 'TOTO',
    dianqi: '西门子',
    dianti: '日立LGE',
  };

  handleChange = (event, value) => {
    let newState = {};
    newState[event.target.name] = value;
    this.setState(newState);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Top title="升级模块"/>
        <Table className={classes.table}>
          <TableHead style={{background: 'rgba(0, 0, 0, 0.5)'}}>
            <TableRow key="jj">
              <TableCell key="sdf" style={{color: "#fff"}}>名称</TableCell>
              <TableCell key="sdfsdf" style={{color: "#fff"}}>产品</TableCell>
              <TableCell numeric key="sddff" style={{color: "#fff"}}>价格</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell key={n.name}>{n.name}</TableCell>
                  <TableCell numeric key={n.calories}>
                    <RadioGroup
                      aria-label="gender"
                      name={n.carbs}
                      value={this.state[n.carbs]}
                      className={classes.group}
                      onChange={this.handleChange}
                    >
                      {n.calories.map(c => {
                        return (
                          <FormControlLabel key={c ? c : 'jjjj'} value={c} control={<Radio classes={{ checked: classes.radio }}/>} label={c} />
                        )
                      })}
                    </RadioGroup>
                  </TableCell>
                  <TableCell numeric key={n.carbs}>{prices[this.state[n.carbs]]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/case`}>
                下一步
              </Button>
              <Button color='black' component={Link} to={`/contactus`}>
                进入总览
              </Button>
            </div>
          }
        />
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DecorationStyle)(SimpleTable);
