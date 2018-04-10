import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import { Bottom, Button, Top } from "components";
import { Link } from 'react-router-dom'
import DecorationStyle from "variables/styles/decorationStyle";

let id = 0;
function createData(name, calories, carbs, path) {
  id += 1;
  return { id, name, calories, carbs, path };
}

const data = [
  createData('私人酒窖', ['不需要', '高品质私人酒窖', '奢华进口专业酒窖'], 'chugui', 'jiujiao'),
  createData('私人影音室', ['不需要', '高品质私人影音室', '奢华进口专业影音室'], 'jieju', 'yingyinshi'),
  createData('私家衣帽间', ['不需要', '优质成品衣帽间', '原装进口衣帽间'], 'dianqi', 'yimaojian'),
  createData('私家健身房', ['不需要', '私家健身房', '发烧级健身房'], 'dianti', 'jianshenfang'),
];

const prices = {
  '不需要': '0元',
  '高品质私人酒窖': '20万',
  '奢华进口专业酒窖': '30元',
  '高品质私人影音室': '20万',
  '奢华进口专业影音室': '30元',
  '优质成品衣帽间': '15万',
  '原装进口衣帽间': '25元',
  '私家健身房': '20万',
  '发烧级健身房': '30万',
}

class SimpleTable extends React.Component {
  state = {
    chugui: '不需要',
    jieju: '不需要',
    dianqi: '不需要',
    dianti: '不需要',
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
        <Top
          title="个性化定制"
          subTitle="个性化空间私人定制。"
        />
        <div className={classes.zuizhong}>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">名称</TableCell>
                <TableCell key="sdfsdf">产品</TableCell>
                <TableCell key="sdfsdf">预览</TableCell>
                <TableCell numeric key="sddff">价格</TableCell>
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
                            <FormControlLabel
                              key={c ? c : 'jjjj'}
                              value={c}
                              control={<Radio classes={{ default: classes.radio, checked: classes.radio }}/>}
                              label={c}
                            />
                          )
                        })}
                      </RadioGroup>
                    </TableCell>
                    <TableCell key={n.path}><Link to={`/gexinghua/${n.path}`}>查看</Link></TableCell>
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
                <Button color='gray' component={Link} to={`/shengji`}>
                  上一步
                </Button>
                <Button color='black' component={Link} to={`/case`}>
                  进入总览
                </Button>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(DecorationStyle)(SimpleTable);
