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
import Xiandai from "assets/img/stylechoose/xiandai.jpg";
import Xinzhongshi from "assets/img/stylechoose/xinzhongshi.jpg";
import Jianou from "assets/img/stylechoose/jianou.jpg";
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };
  render() {
    return (
      <div>
        <Top
          title="风格选择"
          subTitle="三种风格供您选择：现代、新中式、简欧。"
        />
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                cardTitle="现代"
                image={Xiandai}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                cardTitle="新中式"
                image={Xinzhongshi}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Link to="/style">
              <ImageCard
                image={Jianou}
                cardTitle="简欧"
              />
            </Link>
          </ItemGrid>
        </Grid>
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={4} style={{textAlign: "center", fontSize: "13px"}}>
            <Link to="/biaozhun">
              查看精装标准
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4} style={{textAlign: "center", fontSize: "13px"}}>
            <Link to="/biaozhun">
              查看精装标准
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4} style={{textAlign: "center", fontSize: "13px"}}>
            <Link to="/biaozhun">
              查看精装标准
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
