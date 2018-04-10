import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import { withStyles } from "material-ui";
import dudong1 from "assets/img/load/265.png";
import dudong2 from "assets/img/load/270.png";
import bieshu1 from "assets/img/load/225.png";
import bieshu2 from "assets/img/load/245.png";
import List, { ListItem, ListItemText } from 'material-ui/List';
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
    width: '200px',
    padding: '5px',
    border: 'solid 1px #eee',
  },
  dudongbox: {
    marginBottom: '15px',
    float: 'left',
    height: '260px',
    textAlign: 'center',
  },
  dudongimg: {
    height: '190px'
  },
  dudongdesc: {
    width: '303px',
    height: '45px',
    background: '#c22',
    color: '#fff',
    float: 'left',
    lineHeight: '45px',
    paddingLeft: '20px',
    fontSize: '14px',
    "&:hover": {
      background: '#a00',
    }
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
    console.log(dist);

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
              <Link to={dist} onClick={this.handleClose}>
                <div className={classes.cangshan}>
                  <div className={classes.dudongbox}>
                    <div className={classes.dudongimg}>
                      <img alt="藏山独栋" src={dudong1} className={classes.dudong}/>
                    </div>
                    <div className={classes.dudongdesc}>类独栋别墅户型</div>
                  </div>
                  <div className={classes.dudongbox}>
                    <div className={classes.dudongimg}>
                      <img alt="藏山独栋" src={dudong2} className={classes.dudong}/>
                    </div>
                    <div className={classes.dudongdesc}>独栋别墅户型</div>
                  </div>
                </div>
                <div className={classes.cangshan}>
                  <div className={classes.dudongbox}>
                    <div className={classes.dudongimg}>
                      <img alt="藏山别墅" src={bieshu1} className={classes.dudong}/>
                    </div>
                    <div className={classes.dudongdesc}>双拼别墅225户型</div>
                  </div>
                  <div className={classes.dudongbox}>
                    <div className={classes.dudongimg}>
                      <img alt="藏山别墅" src={bieshu2} className={classes.dudong}/>
                    </div>
                    <div className={classes.dudongdesc}>双拼别墅240户型</div>
                  </div>
                </div>
              </Link>
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
