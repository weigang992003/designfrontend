import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {
  RegularCard,
  ItemGrid
} from "components";
import SanImg from "assets/img/styles/san.png";
import QingSheUpgradeImg from "assets/img/styles/qingsheupgrade.jpg";
import HuXingSan from "views/Home/HuXingSan";
import QingSheBaseImg from "assets/img/styles/qswoshijichu.jpg";
import WeiImg from "assets/img/styles/weiupgrade.jpg";
import Summary from "components/Decoration/Summary";
import Zhucai from "components/Decoration/Zhucai";

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  step: {
    cursor: 'pointer',
  },
  gridImg: {
    width: '100%'
  },
});

function getSteps() {
  return ['三代和睦', '总体风格: 当代轻奢(升级版)', '会客厅', '卧室', '卫生间', '方案汇总', '主材汇总'];
}

function getStepContent(step, classes) {
  switch (step) {
    case 0:
      return(
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="orange"
              cardSubtitle="老少同乐。考虑到老人照看孩子的缘故，可将老人房设置在一层，儿童房在二层。方便照看孩 子。"
              content={
                <img alt="a" src={SanImg} className={classes.gridImg} />
              }
              collapse={
                <HuXingSan />
              }
              expanded={ true }
              classes={ classes }
            />
          </ItemGrid>
        </Grid>
      );
    case 1:
      return(
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="a" src={QingSheUpgradeImg} className={classes.gridImg} />
              }
            />
          </ItemGrid>
        </Grid>
      );
    case 2:
      return(
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="a" src={QingSheUpgradeImg} className={classes.gridImg} />
              }
            />
          </ItemGrid>
        </Grid>
      );
    case 3:
      return(
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="orange"
              cardTitle="卧室(基础版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="a" src={QingSheBaseImg} className={classes.gridImg} />
              }
              classes={ classes }
            />
          </ItemGrid>
        </Grid>
      );
    case 4:
      return(
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              headerColor="orange"
              cardTitle="当代轻奢(升级版)"
              cardSubtitle="xxxxx元/平米"
              content={
                <img alt="a" src={WeiImg} className={classes.gridImg} />
              }
            />
          </ItemGrid>
        </Grid>
      );
    case 5:
      return(
        <Summary />
      )
    case 6:
      return(
        <Zhucai />
      )
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel onClick={this.handleStep(index)} className={classes.step}>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index, classes)}</Typography>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
