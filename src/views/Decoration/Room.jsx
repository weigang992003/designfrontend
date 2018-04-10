import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid} from "material-ui";
import Summary from "components/Decoration/Summary";
import DecorationStyle from "variables/styles/decorationStyle";
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom'
import { Bottom, Button } from "components";
import {
  RegularCard,
  ItemGrid,
  RoomZhucai
} from "components";
import QingSheBaseImg from "assets/img/styles/qshuikejichu.jpg";
import QingSheUpgradeImg from "assets/img/styles/qshuikeshengji.jpg";
import BedLeft from "assets/img/styles/qswoshijichu.jpg";
import BedRight from "assets/img/styles/qswoshishengji.jpg";
import ZhuWeiLeft from "assets/img/styles/zhuweijichu.jpg";
import ZhuWeiRight from "assets/img/styles/zhuweiupgrade.jpg";
import B1Left from "assets/img/styles/b1left.jpg";
import B1Right from "assets/img/styles/b1right.jpg";
import B1TiaokongLeft from "assets/img/styles/b1tiaokongleft.jpg";
import B1TiaokongRight from "assets/img/styles/b1tiaokongright.jpg";
import ToiletLeft from "assets/img/styles/weijichu.jpg";
import ToiletRight from "assets/img/styles/weiupgrade.jpg";
import Bizhi from "assets/img/room/bizhi.jpg";
import Cizhuan from "assets/img/room/cizhuan.jpg";
import Cizhuanhei from "assets/img/room/cizhuanhei.jpg";
import Mushimian from "assets/img/room/mushimian.jpg";
import Shicai from "assets/img/room/shicai.jpg";
import Shicaibai from "assets/img/room/shicaibai.jpg";
import Shicaihei from "assets/img/room/shicaihei.jpg";
import Shicaihui from "assets/img/room/shicaihui.jpg";
import Shimudiban from "assets/img/room/shimudiban.jpg";
import Zhuyaobizhi from "assets/img/room/zhuyaobizhi.jpg";
import {
  Forward,
} from "material-ui-icons";

function getSteps() {
  return ['会客厅', '卧室', '主卫', '卫生间', 'B1家庭室', 'B1挑空区'];
}

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data1 = [
  createData('墙面', '乳胶漆+木饰面', 'qiangmian', [Mushimian]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '瓷砖+石材+木地板', 'dimian', [Shicai, Shimudiban]),
];
const data2 = [
  createData('墙面', '石材+木饰面', 'qiangmian', [Shicai, Mushimian]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '瓷砖+石材+木地板', 'dimian', [Shicai, Shimudiban]),
];
const data21 = [
  createData('墙面', '乳胶漆', 'qiangmian'),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '木地板', 'dimian', [Shimudiban]),
];
const data22 = [
  createData('墙面', '壁纸', 'qiangmian', [Zhuyaobizhi, Bizhi]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '木地板', 'dimian', [Shimudiban]),
];
const data31 = [
  createData('墙面', '瓷砖', 'qiangmian', [Cizhuan]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '瓷砖', 'dimian', [Cizhuan]),
];
const data32 = [
  createData('墙面', '石材', 'qiangmian', [Shicai]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '石材', 'dimian', [Shicai]),
];
const data41 = [
  createData('墙面', '瓷砖', 'qiangmian', [Cizhuan]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '瓷砖', 'dimian', [Cizhuanhei]),
];
const data42 = [
  createData('墙面', '石材', 'qiangmian', [Shicaibai]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '石材', 'dimian', [Shicaihei]),
];
const data51 = [
  createData('墙面', '乳胶漆', 'qiangmian',),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '木地板', 'dimian', [Shimudiban]),
];
const data52 = [
  createData('墙面', '石材+木饰面', 'qiangmian', [Shicai, Mushimian]),
  createData('天花', '乳胶漆', 'tianhua'),
  createData('地面', '木地板', 'dimian', [Shimudiban]),
];
class Dashboard extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
    value: 0,
    selectedValue: "qingsheBase",
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }


  getStepContent = (step, handleNext, handleExpandClick, expanded) => {
    const classes  = this.props.classes;
    switch (step) {
      case 0:
        return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆+木饰面，地面：石材+木地板"
                content={
                  <img alt='adsf' src={QingSheBaseImg} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data1} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：石材+木饰面，地面：石材+木地板"
                content={
                  <img alt='adsf' src={QingSheUpgradeImg} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data2} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      case 1:
        return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆，地面：木地板"
                content={
                  <img alt='adsf' src={BedLeft} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data21} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：壁纸，地面：木地板"
                content={
                  <img alt='adsf' src={BedRight} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data22} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      case 2:
        return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：瓷砖，地面：瓷砖"
                content={
                  <img alt='adsf' src={ZhuWeiLeft} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data31} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：石材，地面：石材"
                content={
                  <img alt='adsf' src={ZhuWeiRight} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data32} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      case 3:
        return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：瓷砖，地面：瓷砖"
                content={
                  <img alt='adsf' src={ToiletLeft} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data41} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：石材，地面：石材"
                content={
                  <img alt='adsf' src={ToiletRight} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data42} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      case 4:
        return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆，地面：木地板"
                content={
                  <img alt='adsf' src={B1Left} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data51} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：石材+木饰面，地面：木地板"
                content={
                  <img alt='adsf' src={B1Right} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data52} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      case 5:
       return(
          <Grid container>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(基础版)"
                cardSubtitle="天花：石膏板吊顶，墙面：乳胶漆，地面：木地板"
                content={
                  <img alt='adsf' src={B1TiaokongLeft} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data51} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={1}>
              <div className={classes.forward}>
               <Forward style={{color: "#666"}}/>
              </div>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={5}>
              <RegularCard
                headerColor="gray"
                cardTitle="当代轻奢(升级版)"
                cardSubtitle="天花：石膏板吊顶，墙面：石材+木饰面，地面：木地板"
                content={
                  <img alt='adsf' src={B1TiaokongRight} className={this.props.classes.gridImg} onClick={handleNext} style={{cursor: "pointer"}}/>
                }
                collapse={
                  <RoomZhucai data={data52} />
                }
                expandText="主材明细"
                expanded={ expanded }
                handleExpandClick={ handleExpandClick }
              />
            </ItemGrid>
          </Grid>
        );
      default:
        return '请返回';
    }
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({ expanded: false });
    if(activeStep === 5){
      window.location = "/shengji";
    }else{
      this.setState({
        activeStep: activeStep + 1,
      });
    }
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}
                  className={ classes.iconContainer }
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.rooms}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                <Summary />
              </Typography>
              <div>
                <Button className={classes.button} variant="raised" component={Link} to="/shengji">确认</Button>
              </div>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep, this.handleNext, this.handleExpandClick, this.state.expanded)}</Typography>
              <div>
              </div>
            </div>
          )}
        </div>
        <Bottom
          content={
            <div>
              <Button color='primary' onClick={this.handleNext}>
                下一步
              </Button>
              {activeStep === 0 ? (
                <Button color='gray' component={Link} to={`/style`}>
                  上一步
                </Button>
              ) : (
                <Button color='gray' onClick={this.handleBack}>
                  上一步
                </Button>
              )}
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
