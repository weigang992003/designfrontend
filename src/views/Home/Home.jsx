import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from 'material-ui-icons/Delete';
import FilterListIcon from 'material-ui-icons/FilterList';
import { lighten } from 'material-ui/styles/colorManipulator';
import { FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

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
    const { numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <div
              checked={numSelected === rowCount}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel>
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
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
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
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title">空间选择</Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  checked: {
    color: '#00acc1',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#FFFFFF',
    background: '#00acc1'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
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
    const { data, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              rowCount={data.length}
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
                    <TableCell numeric>{n.calories}</TableCell>
                    <TableCell numeric>{n.fat}</TableCell>
                    <TableCell numeric>{n.carbs}</TableCell>
                    <TableCell numeric>{n.protein}</TableCell>
                    <TableCell numeric>{n.book}</TableCell>
                    <TableCell numeric>{n.toilet}</TableCell>
                    <TableCell numeric>{n.jianshen}</TableCell>
                    <TableCell numeric>{n.yingyin}</TableCell>
                    <TableCell numeric>{n.yimao}</TableCell>
                    <TableCell numeric>{n.entertainment}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <Button className={classes.button} variant="raised" component={Link} to={`/style/${ this.state.selectedValue }`}>
                下一步
              </Button>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
