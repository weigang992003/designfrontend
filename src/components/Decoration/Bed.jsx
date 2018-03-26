import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";

import {
  RegularCard,
  ItemGrid
} from "components";

import DecorationStyle from "variables/styles/decorationStyle";
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import QingSheBaseImg from "assets/img/styles/qswoshijichu.jpg";
import QingSheUpgradeImg from "assets/img/styles/qswoshishengji.jpg";

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
              cardTitle="卧室(基础版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="afd" src={QingSheBaseImg} className={classes.gridImg} />
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
              headerColor="red"
              cardTitle="卧室(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="adf" src={QingSheUpgradeImg} className={classes.gridImg} />
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
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DecorationStyle)(Dashboard);
