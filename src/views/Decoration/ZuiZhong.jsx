import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom'
import { Bottom, Button, Top } from "components";
import DecorationStyle from "variables/styles/decorationStyle";

const styles = {
  paddingRight: '0px'
}
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
      <div>
        <Top title="最终方案"/>
        <div className={classes.zuizhong}>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">整体选择</TableCell>
                <TableCell key="sddff">方案</TableCell>
                <TableCell key="srdff"></TableCell>
                <TableCell key="sdsdff">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1kk'>
                <TableCell key='adf'>户型</TableCell>
                <TableCell key='kdf'>联排270平米</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='2kk'>
                <TableCell key='adf'>家庭</TableCell>
                <TableCell key='kdf'>四世同堂</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/home">修改</Link></TableCell>
              </TableRow>
              <TableRow key='k3k'>
                <TableCell key='adf'>风格</TableCell>
                <TableCell key='kdf'>新中式</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/stylechoose">修改</Link></TableCell>
              </TableRow>
              <TableRow key='skk4'>
                <TableCell key='adf'>定位</TableCell>
                <TableCell key='kdf'>当代轻奢</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/style">修改</Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">每层方案</TableCell>
                <TableCell key="sddff">方案</TableCell>
                <TableCell key="srdff"></TableCell>
                <TableCell key="sdsdff">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1kk'>
                <TableCell key='adf'>一层</TableCell>
                <TableCell key='kdf'>四世同堂</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
              <TableRow key='2kk'>
                <TableCell key='adf'>二层</TableCell>
                <TableCell key='kdf'>三代和睦</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
              <TableRow key='k3k'>
                <TableCell key='adf'>三层</TableCell>
                <TableCell key='kdf'>一生一世</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
              <TableRow key='skk4'>
                <TableCell key='adf'>阁楼</TableCell>
                <TableCell key='kdf'>四世同堂</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
              <TableRow key='skk4'>
                <TableCell key='adf'>地下一层</TableCell>
                <TableCell key='kdf'>四世同堂</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
              <TableRow key='skk4'>
                <TableCell key='adf'>地下二层</TableCell>
                <TableCell key='kdf'>四世同堂</TableCell>
                <TableCell key='kdr'></TableCell>
                <TableCell key='ksdf'><Link to="/huxingtu">修改</Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">房间</TableCell>
                <TableCell key="sddfsf">定位</TableCell>
                <TableCell key="sddsff">主材</TableCell>
                <TableCell key="sdsdff">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1kk'>
                <TableCell key='adf'>会客厅</TableCell>
                <TableCell key='kdf'>当代轻奢(升级版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='2kk'>
                <TableCell key='adf'>卧室</TableCell>
                <TableCell key='kdf'>当代轻奢(升级版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='k3k'>
                <TableCell key='adf'>主卫</TableCell>
                <TableCell key='kdf'>当代轻奢(基础版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='kk4s'>
                <TableCell key='adf'>卫生间</TableCell>
                <TableCell key='kdf'>当代轻奢(升级版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='sskk4'>
                <TableCell key='adf'>B1家庭室</TableCell>
                <TableCell key='kdf'>当代轻奢(基础版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='jjkk4'>
                <TableCell key='adf'>B1挑空区</TableCell>
                <TableCell key='kdf'>当代轻奢(升级版)</TableCell>
                <TableCell key='skdf'>天花：石膏板吊顶<br />墙面：乳胶漆+木饰面<br />地面：石材</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">升级模块</TableCell>
                <TableCell key="sddff">方案</TableCell>
                <TableCell key="sdsdff">价格</TableCell>
                <TableCell key="sdsdffs">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1kk'>
                <TableCell key='adf'>橱柜</TableCell>
                <TableCell key='kdf'>海格&瓦伦多夫</TableCell>
                <TableCell key='kd'>20万</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='2kk'>
                <TableCell key='adf'>洁具</TableCell>
                <TableCell key='kdf'>汉斯格雅&杜拉维特&唯宝</TableCell>
                <TableCell key='kd'>20万</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='k3k'>
                <TableCell key='adf'>电器</TableCell>
                <TableCell key='kdf'>MIELE</TableCell>
                <TableCell key='kd'>15万</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
              <TableRow key='kkjkk4'>
                <TableCell key='adf'>电梯</TableCell>
                <TableCell key='kdf'>日立LCA&蒂森克虏伯</TableCell>
                <TableCell key='kd'>10万</TableCell>
                <TableCell key='ksdf'><Link to="">修改</Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Bottom
            content={
              <div>
                <Button color='primary' component={Link} to={`/contactus`}>
                  确认方案
                </Button>
              </div>
            }
            style={styles}
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
