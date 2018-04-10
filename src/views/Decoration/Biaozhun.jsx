import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Link } from 'react-router-dom'
import { Bottom, Button, Top } from "components";
import {
  FiberManualRecord,
} from "material-ui-icons";

const styles = {
  paddingRight: '0px',
  pointer: {
    fontSize: '16px',
    color: "#888",
  },
  table: {
    minWidth: '300px',
    "& th": {
      textAlign: 'center',
      padding: '4px 24px 4px 24px',
    },
    "& td": {
      textAlign: 'center',
      fontSize: '12px',
      padding: '4px 24px 4px 24px',
    },
    "& span": {
      fontSize: '13px',
      fontWeight: 300,
    },
    "& svg": {
      height: '10px',
      verticalAlign: 'middle',
    },
    "& tr": {
      height: '36px',
      borderBottom: "solid 1px #eee",
    },
  },
  tableHeader: {
    background: 'rgba(0, 0, 0, 0.5)',
    "& th": {
      color: "#fff",
    }
  },
}
class SimpleTable extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Top
          title="精装配置标准"
          subTitle="详情如下表："
        />
        <div>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              <TableRow key="jj">
                <TableCell key="sdf">区域</TableCell>
                <TableCell key="sddff">产品</TableCell>
                <TableCell key="srdff">当代轻奢<br />基础版</TableCell>
                <TableCell key="srdff">当代轻奢<br />基础版</TableCell>
                <TableCell key="sdslff">当代雅致<br />升级版</TableCell>
                <TableCell key="sdsllf">当代雅致<br />升级版</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='1kk'>
                <TableCell key='adf'></TableCell>
                <TableCell key='adf'></TableCell>
                <TableCell key='adf'>6000元/m²</TableCell>
                <TableCell key='adf'>9000元/m²</TableCell>
                <TableCell key='adf'>5000元/m²</TableCell>
                <TableCell key='adf'>8000元/m²</TableCell>
              </TableRow>
              <tr>
                <td rowspan="4">墙面</td>
                <td>乳胶漆</td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
              </tr>
              <TableRow key='2kk'>
                <td>石材</td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </TableRow>
              <TableRow key='k3k'>
                <td>布艺</td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </TableRow>
              <TableRow key='skk4'>
                <td>壁纸</td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </TableRow>
              <tr>
                <td>天花</td>
                <td>乳胶漆</td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </tr>
              <tr>
                <td rowspan="3">地面</td>
                <td>瓷砖</td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
              </tr>
              <tr>
                <td>木地板</td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </tr>
              <tr>
                <td>石材</td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </tr>
              <tr>
                <td rowspan="2">橱柜</td>
                <td>欧派</td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
              </tr>
              <tr>
                <td>海格&瓦伦多夫</td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
                <td></td>
                <td><FiberManualRecord  className={classes.pointer}/></td>
              </tr>
            </TableBody>
          </Table>
          <Bottom
            content={
              <div>
                <Button color='primary' component={Link} to={`/stylechoose`}>
                  返回
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

export default withStyles(styles)(SimpleTable);
