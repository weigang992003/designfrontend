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
    const { classes, expanded, handleExpandClick, leftImage, rightImage } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="gray"
              cardTitle="当代轻奢(基础版)"
              cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆+木饰面，地面：石材"
              content={
                <img alt='adsf' src={leftImage} className={classes.gridImg} onClick={this.props.onClick} style={{cursor: "pointer"}}/>
              }
              collapse={
                <RoomZhucai />
              }
              classes={ classes }
              expandText="主材明细"
              expanded={ expanded }
              handleExpandClick={ handleExpandClick }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="gray"
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆+木饰面，地面：石材"
              content={
                <img alt='adsf' src={rightImage} className={classes.gridImg} onClick={this.props.onClick} style={{cursor: "pointer"}}/>
              }
              collapse={
                <RoomZhucai />
              }
              classes={ classes }
              expandText="主材明细"
              expanded={ expanded }
              handleExpandClick={ handleExpandClick }
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
