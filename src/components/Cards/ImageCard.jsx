import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  cover: {
    position: 'relative',
    margin: '1em',
  },
  title: {
    padding: '10px 12px 8px',
    position: 'absolute',
    left: '8px',
    top: '8px',
    fontSize: '12px',
    background: 'rgba(0,0,0,0.5)',
    opacity: '0.7',
    minWidth: '175px',
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    border: 'solid 1px #eee',
    padding: '7px',
    width: '100%',
  }
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
