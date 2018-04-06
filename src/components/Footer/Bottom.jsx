import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  bottom: {
    textAlign: 'right',
    padding: '3em 0 4em 0',
    "& a": {
      margin: '10px 2px',
    }
  },

};
function Bottom({ ...props }) {
  const {
    classes,
    style,
    content
  } = props;
  return (
    <div className={classes.bottom} style={style}>
      {content}
    </div>
  );
}

Bottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottom);
