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
import QingSheBaseImg from "assets/img/styles/qingshebase.jpg";
import QingSheUpgradeImg from "assets/img/styles/qingsheupgrade.jpg";
import YazhiBaseImg from "assets/img/styles/yazhibase.jpg";
import YazhiUpgradeImg from "assets/img/styles/yazhiupgrade.jpg";
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };
  render() {
    return (
      <div>
        <Top title="风格选择"/>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase">
              <ImageCard
                cardTitle="当代轻奢(基础版)"
                image={QingSheBaseImg}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase">
              <ImageCard
                cardTitle="当代轻奢(升级版)"
                image={QingSheUpgradeImg}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase">
              <ImageCard
                image={YazhiBaseImg}
                cardTitle="当代雅致(基础版)"
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase">
              <ImageCard
                cardTitle="当代雅致(升级版)"
                image={YazhiUpgradeImg}
              />
            </Link>
          </ItemGrid>
        </Grid>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/rooms/four/qingsheBase`}>
                下一步
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
