import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                首页
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                关于我们
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#" className={classes.block}>
                联系我们
              </a>
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
