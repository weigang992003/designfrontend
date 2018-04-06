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
import QingSheBaseImg from "assets/img/stylechoose/style.png";
import QingSheUpgradeImg from "assets/img/stylechoose/style2.png";
import YazhiBaseImg from "assets/img/stylechoose/style3.png";
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
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                cardTitle="现代"
                image={QingSheUpgradeImg}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                cardTitle="新中式"
                image={YazhiBaseImg}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                image={QingSheBaseImg}
                cardTitle="简欧"
              />
            </Link>
          </ItemGrid>
        </Grid>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/style`}>
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
