import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  cover: {
    textAlign: 'center',
  },
  title: {
    width: '100%',
    fontWeight: 600,
  },
  image: {
    height: '500px',
  },
};

function SimpleMediaCard({ ...props }) {
  const {
    classes,
    cardTitle,
    image,
  } = props;
  return (
    <div className={classes.cover}>
      <img alt="" className={classes.image} src={image}/>
      <div className={classes.title}>{cardTitle}</div>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
