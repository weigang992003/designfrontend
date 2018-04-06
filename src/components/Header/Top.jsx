import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  top: {
    textAlign: 'left',
    padding: '22px 0 12px 17px',
    background: '#f7f7f7',
  },
  title: {
    fontSize: '1.2em',
    color: '#000000',
    fontWeight: '300',
    display: 'block',
  },
  subTitle: {
    color: '#666',
    marginTop: '10px',
    display: 'block',
    fontSize: '14px',
  }

};
function Top({ ...props }) {
  const {
    classes,
    title,
    subTitle,
  } = props;
  return (
    <div className={classes.top}>
      <span className={classes.title}>{title}</span>
      <span className={classes.subTitle}>{subTitle}</span>
    </div>
  );
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
