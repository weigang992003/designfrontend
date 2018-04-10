import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";
import { Link } from 'react-router-dom'

import footerStyle from "variables/styles/footerStyle";
import {
  FiberManualRecord,
} from "material-ui-icons";

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
              <Link to="/contactus">联系我们</Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            远洋 <FiberManualRecord  className={classes.pointer}/> 天著春秋
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
