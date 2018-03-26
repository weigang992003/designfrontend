import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";

import Huike from "components/Decoration/Huike";
import Toilet from "components/Decoration/Toilet";
import Bed from "components/Decoration/Bed";
import Summary from "components/Decoration/Summary";
import DecorationStyle from "variables/styles/decorationStyle";
import Button from 'material-ui/Button';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';

function getSteps() {
  return ['会客厅', '卧室', '卫生间...'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return(
        <Huike />
      );
    case 1:
      return(
        <Bed />
      );
    case 2:
      return(
        <Toilet />
      );
    default:
      return 'Unknown step';
  }
}

class Dashboard extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
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
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
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
                <StepLabel {...labelProps}>{label}</StepLabel>
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
              <Button variant="raised" color="primary" onClick={this.handleReset} className={classes.button}>
                重新选择
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  后退
                </Button>
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? '完成' : '下一步'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DecorationStyle)(Dashboard);
