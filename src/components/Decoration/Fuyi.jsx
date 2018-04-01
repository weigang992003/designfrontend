import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";

import {
  RegularCard,
  ItemGrid,
  RoomZhucai
} from "components";

import DecorationStyle from "variables/styles/decorationStyle";
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';
import QingSheBaseImg from "assets/img/styles/fuyitiaokong/base.jpg";
import QingSheUpgradeImg from "assets/img/styles/fuyitiaokong/upgrade.jpg";

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
    const { classes, expanded, handleExpandClick } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(基础版)"
              cardSubtitle="天花：石膏板吊顶，200元，墙面：乳胶漆+木饰面，2000元，地面：石材，1200元"
              content={
                <img alt="a" src={QingSheBaseImg} className={classes.gridImg} onClick={this.props.onClick}/>
              }
              collapse={
                <RoomZhucai />
              }
              classes={ classes }
              expandText="主材明细"
              expanded={ expanded }
              handleExpandClick={ handleExpandClick }
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
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="天花：石膏板吊顶，200元，墙面：乳胶漆+木饰面，2000元，地面：石材，1200元"
              content={
                <img alt="a" src={QingSheUpgradeImg} className={classes.gridImg} onClick={this.props.onClick}/>
              }
              collapse={
                <RoomZhucai />
              }
              classes={ classes }
              expandText="主材明细"
              expanded={ expanded }
              handleExpandClick={ handleExpandClick }
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
