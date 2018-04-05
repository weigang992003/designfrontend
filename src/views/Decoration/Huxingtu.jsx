import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";

import {
  SimpleMediaCard,
  ItemGrid,
  Button,
  Bottom,
  Top
} from "components";

import DecorationStyle from "variables/styles/decorationStyle";
import yilou from "assets/img/huxing/si/yilou.png";
import erlou from "assets/img/huxing/si/erlou.png";
import sanlou from "assets/img/huxing/si/sanlou.png";
import gelou from "assets/img/huxing/si/gelou.png";
import dixiayilou from "assets/img/huxing/si/dixiayilou.png";
import dixiaerlou from "assets/img/huxing/si/dixiaerlou.png";
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
          title="户型图"
          subTitle="四世同堂，其乐融融，此户型为了满足家庭成员的需要，设置了两间老人房、儿童房、主卧等。"
        />
        <div style={{paddingTop: '10px'}}>
          <Grid container>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="一楼"
                image={yilou}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="二楼"
                image={erlou}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="三楼"
                image={sanlou}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="阁楼"
                image={gelou}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="地下一楼"
                image={dixiayilou}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={6}>
              <SimpleMediaCard
                cardTitle="地下二楼"
                image={dixiaerlou}
              />
            </ItemGrid>
          </Grid>
        </div>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/style`}>
                下一步
              </Button>
              <Button color='black' component={Link} to={`/contactus`}>
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
