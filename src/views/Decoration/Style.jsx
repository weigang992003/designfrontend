import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import DecorationStyle from "variables/styles/decorationStyle";
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import QingSheBaseImg from "assets/img/styles/qingshebase.jpg";
import QingSheUpgradeImg from "assets/img/styles/qingsheupgrade.jpg";
import YazhiBaseImg from "assets/img/styles/yazhibase.jpg";
import YazhiUpgradeImg from "assets/img/styles/yazhiupgrade.jpg";
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(基础版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img src={QingSheBaseImg} className={classes.gridImg} />
              }
              classes={ classes }
              cardAction={
                <RadioGroup
                  aria-label=""
                  name="huxing"
                  value={this.state.selectedValue}
                  onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="qingsheBase"
                    control={<Radio classes={{ checked: classes.checked, default: classes.unchecked }} />}
                    classes={{ label: classes.uncheckedddd }}
                    label="" />
                </RadioGroup>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img src={QingSheUpgradeImg} className={classes.gridImg} />
              }
              cardAction={
                <RadioGroup
                  aria-label=""
                  name="huxing"
                  value={this.state.selectedValue}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="qingsheUpgrade" control={<Radio classes={{ checked: classes.checked, default: classes.unchecked }} />} label="" />

                </RadioGroup>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="red"
              cardTitle="当代雅致(基础版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img src={YazhiBaseImg} className={classes.gridImg} />
              }
              cardAction={
                <RadioGroup
                  aria-label=""
                  name="huxing"
                  value={this.state.selectedValue}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="yazhiBase" control={<Radio classes={{ checked: classes.checked, default: classes.unchecked }} />} label="" />

                </RadioGroup>
              }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="red"
              cardTitle="当代雅致(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img src={YazhiUpgradeImg} className={classes.gridImg} />
              }
              cardAction={
                <RadioGroup
                  aria-label=""
                  name="huxing"
                  value={this.state.selectedValue}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="yazhiUpgrade" control={<Radio classes={{ checked: classes.checked, default: classes.unchecked }} />} label="" />

                </RadioGroup>
              }
            />
          </ItemGrid>
        </Grid>
        <Button className={classes.button} variant="raised" component={Link} to={`/rooms/${ this.props.match.params.houseType }/${ this.state.selectedValue }`}>
          下一步
        </Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DecorationStyle)(Dashboard);
