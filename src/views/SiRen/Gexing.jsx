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
import Jiujiao1 from "assets/img/siren/jiujiao1.jpg";
import Jiujiao2 from "assets/img/siren/jiujiao2.jpg";
import Yingyin1 from "assets/img/siren/yingyin1.jpg";
import Yingyin2 from "assets/img/siren/yingyin2.jpg";
import Yimao1 from "assets/img/siren/yimao1.jpg";
import Yimao2 from "assets/img/siren/yimao2.jpg";
import Jianshen1 from "assets/img/siren/jianshen1.jpg";
import Jianshen2 from "assets/img/siren/jianshen2.jpg";
import { Link } from 'react-router-dom'

const space = (module) => {
  switch(module) {
    case 'jiujiao':
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="高品质私人酒窖"
                image={Jiujiao1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="奢华进口专业酒窖"
                image={Jiujiao2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case 'yingyingshi':
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="高品质私人影音室"
                image={Yingyin1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="奢华进口专业影音室"
                image={Yingyin2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case 'yimaojian':
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="优质成品衣帽间"
                image={Yimao1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="原装进口衣帽间"
                image={Yimao2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
    case 'jianshenfang':
      return(
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="私家健身房"
                image={Jianshen1}
              />
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/siren">
              <ImageCard
                cardTitle="发烧级健身房"
                image={Jianshen2}
              />
            </Link>
          </ItemGrid>
        </Grid>
      )
     default:
      return("请返回")
  }
}
const titles = {
  jiujiao: "私人酒窖定制",
  jiujiao: "私人影音室定制",
  jiujiao: "私家衣帽间定制",
  jianshenfang: "私家健身房定制",
};

class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };
  render() {
    const module = this.props.match.params.module
    return (
      <div>
        <Top
          title={titles[module]}
          subTitle="两款定制方案可供您选择："
        />
        { space(module) }
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/siren`}>
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
