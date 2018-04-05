import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  bottom: {
    textAlign: 'right',
    padding: '3em 4em 0'
  },

};
function Bottom({ ...props }) {
  const {
    classes,
    content
  } = props;
  return (
    <div className={classes.bottom}>
      {content}
    </div>
  );
}

Bottom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bottom);
