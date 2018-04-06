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
import Chugui1 from "assets/img/shengji/chugui1.png";
import Chugui2 from "assets/img/shengji/chugui2.png";
import Chugui3 from "assets/img/shengji/chugui3.png";
import Jieju from "assets/img/shengji/jieju.png";
import Jieju1 from "assets/img/shengji/jieju1.png";
import Jieju2 from "assets/img/shengji/jieju2.png";
import dianti1 from "assets/img/shengji/dianti1.png";
import dianti2 from "assets/img/shengji/dianti2.png";
import dianqi1 from "assets/img/shengji/dianqi1.png";
import dianqi2 from "assets/img/shengji/dianqi2.png";
import dianqi3 from "assets/img/shengji/dianqi3.png";
import dianqi4 from "assets/img/shengji/dianqi4.png";
import { Link } from 'react-router-dom'

const titles = {
  jieju: "洁具升级方案",
  chugui: "橱柜升级方案",
  dianqi: "电器升级方案",
  dianti: "电梯升级方案",
};
const shengji = (module) => {
  switch (module) {
    case "chugui":
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/style">
              <ImageCard
                image={Chugui1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={Chugui2}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={Chugui3}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case "jieju":
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/style">
              <ImageCard
                image={Jieju}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={Jieju1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={Jieju2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case "dianqi":
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/style">
              <ImageCard
                image={dianqi1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={dianqi2}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={dianqi3}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/style">
              <ImageCard
                image={dianqi4}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case "dianti":
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/style">
              <ImageCard
                image={dianti1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={12}>
            <Link to="/style">
              <ImageCard
                image={dianti2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
  }
}
class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };
  render() {
    const module = this.props.match.params.module
    return (
      <div>
        <Top title={titles[module]}/>
        { shengji(module) }
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/shengji`}>
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

