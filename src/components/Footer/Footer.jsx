import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";
import { Link } from 'react-router-dom'

import footerStyle from "variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/load">首页</Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/home">户型选择</Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contactus">联系我们</Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            北京九和设计
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
