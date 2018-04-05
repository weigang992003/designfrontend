import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  cover: {
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    padding: '0.1em 4em',
    position: 'absolute',
    left: '38%',
    top: '5%',
    fontSize: '13px',
    background: '#eee',
    opacity: '0.7',
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
      <span className={classes.title}>{cardTitle}</span>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
