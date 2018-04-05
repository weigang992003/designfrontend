import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Card, { CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {
  RegularCard,
  ItemGrid
} from "components";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {FiberManualRecord} from "material-ui-icons";

import Dialog, {
  DialogContent,
} from 'material-ui/Dialog';
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
          <img src={jichu1} style={{width: '60%', verticalAlign: 'bottom'}}/>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={jichu2} style={{width: '60%'}}/>
        </div>
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
