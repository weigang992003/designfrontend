import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";

import {
  ImageCard,
  ItemGrid,
  Button,
  Bottom,
  Top
} from "components";

import DecorationStyle from "variables/styles/decorationStyle";
import yilou from "assets/img/huxing/yi/yi.png";
import erlou from "assets/img/huxing/er/er.png";
import sanlou from "assets/img/huxing/san/san.png";
import gelou from "assets/img/huxing/si/dixiayilou.png";
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
    return (
      <div>
        <Top
          title="户型定制化(一楼)"
          subTitle="针对本层选择不同的平面布局"
        />
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <ImageCard
              cardTitle="方案A"
              image={yilou}
              link="/huxingtu"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ImageCard
              cardTitle="方案B"

              image={erlou}
              link="/huxingtu"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ImageCard
              cardTitle="方案C"

              image={sanlou}
              link="/huxingtu"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ImageCard
              cardTitle="方案D"
              image={gelou}
              link="/huxingtu"
            />
          </ItemGrid>
        </Grid>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/huxingtu`}>
                返回
              </Button>
              <Button color='black' component={Link} to={`/case`}>
                进入总览
              </Button>
            </div>
          }
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DecorationStyle)(Dashboard);
