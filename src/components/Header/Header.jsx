import React from "react";
import PropTypes from "prop-types";
import { Menu } from "material-ui-icons";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
} from "material-ui";
import cx from "classnames";
import { Link } from 'react-router-dom'

import headerStyle from "variables/styles/headerStyle.jsx";
import HeaderLinks from "./HeaderLinks";
import logo from "assets/img/logo.jpeg";

function Header({ ...props }) {
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Link to="/load">
        <img src={logo} style={{height: '52px', float: 'left'}}/>
      </Link>
      <Toolbar className={classes.container}>
        <div className={classes.centerMenu}>
          <Link to="/jichu" className={classes.link}>
            <span className={classes.menuText}>基础</span>
          </Link>
          <span className={classes.menuText}>软装</span>
          <span className={classes.menuText}>物业</span>
          <span className={classes.menuText}>服务</span>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
