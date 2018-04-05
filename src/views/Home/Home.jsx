import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Tooltip from 'material-ui/Tooltip';
import { lighten } from 'material-ui/styles/colorManipulator';
import { FormControlLabel } from 'material-ui/Form';
import { Link } from 'react-router-dom'

import {
  RegularCard,
  Button,
  Bottom,
} from "components";
import YiImg from "assets/img/styles/yi.png";
import ErImg from "assets/img/styles/er.png";
import SanImg from "assets/img/styles/san.png";
import SiImg from "assets/img/styles/si.png";

let counter = 0;
function createData(name, calories, fat, carbs, protein, book, toilet, jianshen, yingyin, yimao, entertainment, value) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein, book, toilet, jianshen, yingyin, yimao, entertainment, value };
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: '户型' },
  { id: 'calories', numeric: true, disablePadding: false, label: '会客厅' },
  { id: 'fat', numeric: true, disablePadding: false, label: '家庭厅' },
  { id: 'carbs', numeric: true, disablePadding: false, label: '餐厅' },
  { id: 'protein', numeric: true, disablePadding: false, label: '卧室' },
  { id: 'book', numeric: true, disablePadding: false, label: '书房' },
  { id: 'toilet', numeric: true, disablePadding: false, label: '卫生间' },
  { id: 'jianshen', numeric: true, disablePadding: false, label: '健身房' },
  { id: 'yingyin', numeric: true, disablePadding: false, label: '影音室' },
  { id: 'yimao', numeric: true, disablePadding: false, label: '衣帽间' },
  { id: 'entertainment', numeric: true, disablePadding: false, label: '娱乐室' },
];

class EnhancedTableHead extends React.Component {

  render() {
    return (
      <TableHead style={{background: "rgba(0, 0, 0, 0.5)"}}>
        <TableRow>
          <TableCell padding="checkbox">
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                padding='none'
              >
                <Tooltip
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel style={{color: "#fff"}}>
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: false,
      })}
    >
      <div className={classes.title}>
        <Typography variant="title">空间选择</Typography>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  cell: {
    textAlign: 'center',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  cardTitle: {
    fontSize: '1.2em',
  },
  CardContent: {
    padding: '0',
  },
  cardSubtitle: {
    color: '#666',
    marginTop: '10px',
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  checked: {
    color: '#666',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#FFFFFF',
    background: '#00acc1'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  gridImg: {
    width: '100%'
  },
});

class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selected: [],
      data: [
        createData("四世同堂", 1, 1, 1, 6, 1, 8, null, 1, 3, null, "four"),
        createData('三代和睦', 1, 2, 1, 5, 1, 7, null, 1, 3, null, "three"),
        createData('二胎时代', 1, 2, 1, 4, 1, 7, null, 1, 4, null, "two"),
        createData('一生一世', 1, 3, 1, 3, 1, 5, 1, 1, 4, 1, "one")
      ],
      page: 0,
      rowsPerPage: 5,
      selectedValue: "four",
    };
  }

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, rowsPerPage, page } = this.state;

    return (
      <div>
        {this.state.selectedValue === "four" ? (
          <RegularCard
            headerColor="orange"
            cardTitle="四世同堂"
            cardSubtitle="其乐融融，此户型为了满足家庭成员的需要，设置了两间老人房、儿童房、主卧等。"
            content={
              <img alt="a" src={SiImg} className={classes.gridImg} />
            }
            classes={ classes }
          />
        ) : null}
        {this.state.selectedValue === "three" ? (
          <RegularCard
            headerColor="orange"
            cardTitle="三代和睦"
            cardSubtitle="老少同乐。考虑到老人照看孩子的缘故，可将老人房设置在一层，儿童房在二层。方便照看孩 子。"
            content={
              <img alt="a" src={SanImg} className={classes.gridImg} />
            }
            classes={ classes }
          />
        ) : null}
        {this.state.selectedValue === "two" ? (
          <RegularCard
            headerColor="orange"
            cardTitle="二胎时代"
            cardSubtitle="欢乐一家人。设置了主卧、儿童房、儿童娱乐室等。"
            content={
              <img alt="a" src={ErImg} className={classes.gridImg} />
            }
            classes={ classes }
          />
        ) : null}
        {this.state.selectedValue === "one" ? (
          <RegularCard
            headerColor="orange"
            cardTitle="一生一世"
            cardSubtitle="过着甜蜜的二人世界。除了主卧，还配备次卧和客卧等。"
            content={
              <img alt="a" src={YiImg} className={classes.gridImg} />
            }
            classes={ classes }
          />
        ) : null}
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
            />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <RadioGroup
                        aria-label="gender"
                        name="huxing"
                        className={classes.group}
                        value={this.state.selectedValue}
                        onChange={this.handleChange}
                      >
                        <FormControlLabel value={ n.value } control={<Radio classes={{ checked: classes.checked, }} />} label="" />
                      </RadioGroup>
                    </TableCell>
                    <TableCell padding="none">{n.name}</TableCell>
                    <TableCell padding="none">{n.calories}</TableCell>
                    <TableCell padding="none">{n.fat}</TableCell>
                    <TableCell padding="none">{n.carbs}</TableCell>
                    <TableCell padding="none">{n.protein}</TableCell>
                    <TableCell padding="none">{n.book}</TableCell>
                    <TableCell padding="none">{n.toilet}</TableCell>
                    <TableCell padding="none">{n.jianshen}</TableCell>
                    <TableCell padding="none">{n.yingyin}</TableCell>
                    <TableCell padding="none">{n.yimao}</TableCell>
                    <TableCell padding="none">{n.entertainment}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Bottom
            content={
              <div>
                <Button color='primary' component={Link} to={`/huxingtu`}>
                  下一步
                </Button>
                <Button color='black' component={Link} to={`/contactus`}>
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

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
