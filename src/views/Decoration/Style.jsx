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
    const {classes} = this.props
    return (
      <div>
        <Top
          title="选择档次"
          subTitle="两种档次可供您选择：基础版、升级版。"
        />
        <Grid container style={{width: "100%"}}>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase" className={classes.stylelink}>
              <ImageCard
                cardTitle="当代轻奢(基础版)"
                image={QingSheBaseImg}
              />
              <div className={classes.styleDesc}>注重硬装修手法的简洁，看似朴素的外表之下却常常折射出一种隐藏的贵族气质。</div>
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase" className={classes.stylelink}>
              <ImageCard
                cardTitle="当代轻奢(升级版)"
                image={QingSheUpgradeImg}
              />
              <div className={classes.styleDesc}>升级版更注重材料品质和装饰的细节，经过涂饰和抛光的木材、有丰富温馨的色彩和华美的织物，更突显主人对生活品质的追求。</div>
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase" className={classes.stylelink}>
              <ImageCard
                image={YazhiBaseImg}
                cardTitle="当代雅致(基础版)"
              />
              <div className={classes.styleDesc}>源于对现代极简主义风格的回归，简化的线条、粗犷的体积、自然的材质使人在精神上得到放松。</div>
            </Link>
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <Link to="/rooms/four/qingsheBase" className={classes.stylelink}>
              <ImageCard
                cardTitle="当代雅致(升级版)"
                image={YazhiUpgradeImg}
              />
              <div className={classes.styleDesc}>升级版加强了文化品位的装饰风格，更注重线型的搭配和颜色的协调，注重文脉追求人情味。</div>
            </Link>
          </ItemGrid>
        </Grid>
        <Bottom
          content={
            <div>
              <Button color='primary' component={Link} to={`/rooms/four/qingsheBase`}>
                下一步
              </Button>
              <Button color='gray' component={Link} to={`/stylechoose`}>
                上一步
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
