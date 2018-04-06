import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";

import Room from "components/Decoration/Room";
import Summary from "components/Decoration/Summary";
import DecorationStyle from "variables/styles/decorationStyle";
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom'
import { Bottom, Button } from "components";

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

function getSteps() {
  return ['会客厅', '卧室', '主卫', '卫生间', 'B1家庭室', 'B1挑空区'];
}

function getStepContent(step, handleNext, handleExpandClick, expanded) {
  switch (step) {
    case 0:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={QingSheBaseImg} rightImage={QingSheUpgradeImg}/>
      );
    case 1:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={BedLeft} rightImage={BedRight}/>
      );
    case 2:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={ZhuWeiLeft} rightImage={ZhuWeiRight}/>
      );
    case 3:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={ToiletLeft} rightImage={ToiletRight}/>
      );
    case 4:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={B1Left} rightImage={B1Right}/>
      );
    case 5:
      return(
        <Room onClick={handleNext} expanded={expanded} handleExpandClick={handleExpandClick} leftImage={B1TiaokongLeft} rightImage={B1TiaokongRight}/>
      );
    default:
      return '请返回';
  }
}

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

  handleNext = () => {
    const { activeStep } = this.state;
    if(activeStep === 5){
      window.location = "/zhucai";
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

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
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
                <Button className={classes.button} variant="raised" component={Link} to="/zhucai">确认</Button>
              </div>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep, this.handleNext, this.handleExpandClick, this.state.expanded)}</Typography>
              <div>
              </div>
            </div>
          )}
        </div>
        <Bottom
          content={
            <div>
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
