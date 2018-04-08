import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { withStyles, Grid } from "material-ui";
import dudong1 from "assets/img/load/265.png";
import dudong2 from "assets/img/load/270.png";
import bieshu1 from "assets/img/load/225.png";
import bieshu2 from "assets/img/load/245.png";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import {
  RegularCard,
} from "components";
import Dialog, {
  DialogContent,
} from 'material-ui/Dialog';

const styles = {
  popup: {
    padding: '0 70px 0 90px',
  },
  dudong: {
    float: 'left',
    width: '46%',
    padding: '5px',
    border: 'solid 1px #eee',
    height: '80px'
  },
  white: {
    color: "#fff",
    fontWeight: 400,
  },
  huxing: {
    fontSize: '1.8em',
    fontWeight: 500,
    textAlign: 'center',
    padding: '27px 0px 40px',
    color: '#000'
  },
  cangshan: {
    float: 'left',
    width: '310px',
    marginRight: '23px',
    marginBottom: '23px',
  },
  huxingItem: {
    padding: '12px 12px 12px 0px',
  },
  dudongText: {
    fontSize: '13px',
    paddingLeft: '16px',
  },
  imageWrapper: {
    width: '50%',
    marginRight: '20px',
  }
}
class Dashboard extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, button, dist } = this.props;

    return (
      <div>
        <div onClick={this.handleClickOpen}>{button}</div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
        >
          <DialogContent>
            <div className={classes.popup}>
              <div className={classes.huxing}>选择户型</div>
              <div>
                <div className={classes.cangshan}>
                  <img alt="藏山独栋" src={dudong1} className={classes.dudong}/>
                  <img alt="藏山独栋" src={dudong2} className={classes.dudong}/>
                </div>
                <div className={classes.cangshan}>
                  <img alt="藏山别墅" src={bieshu1} className={classes.dudong}/>
                  <img alt="藏山别墅" src={bieshu2} className={classes.dudong}/>
                </div>
              </div>
              <div>
                <div className={classes.cangshan}>
                  <RegularCard
                    headerColor="red"
                    classes={{cardTitle: classes.white, CardContent: {padding: '0px'}}}
                    cardTitle="藏山独栋"
                    content={
                      <List component={Link} to={dist} onClick={this.handleClose}>
                        <ListItem button className={classes.huxingItem}>
                          <ListItemText classes={{primary: classes.dudongText}} primary="联排265平米户型" />
                        </ListItem>
                        <Divider light />
                        <ListItem button className={classes.huxingItem}>
                          <ListItemText classes={{primary: classes.dudongText}} primary="双拼270平米户型" />
                        </ListItem>
                        <Divider light />
                      </List>
                    }
                  />
                </div>
                <div className={classes.cangshan}>
                  <RegularCard
                    headerColor="red"
                    classes={{cardTitle: classes.white}}
                    cardTitle="藏山别墅"
                    content={
                      <List component={Link} to={dist} onClick={this.handleClose}>
                        <ListItem button className={classes.huxingItem}>
                          <ListItemText classes={{primary: classes.dudongText}} primary="联排225平米户型" />
                        </ListItem>
                        <Divider />
                        <ListItem button className={classes.huxingItem}>
                          <ListItemText classes={{primary: classes.dudongText}} primary="联排240平米户型" />
                        </ListItem>
                        <Divider light />
                      </List>
                    }
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
