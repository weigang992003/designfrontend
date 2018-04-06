import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import jichu1 from "assets/img/jichu1.jpeg";
import jichu2 from "assets/img/jichu2.jpeg";

const styles = {
};

class SimpleMediaCard extends React.Component {
  state = {
    open: false,
  };

  classes = this.props.classes;
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <img alt="远洋" src={jichu1} style={{width: '60%', verticalAlign: 'bottom'}}/>
        </div>
        <div style={{textAlign: 'center'}}>
          <img alt="远洋" src={jichu2} style={{width: '60%'}}/>
        </div>
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
