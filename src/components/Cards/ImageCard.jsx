import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  cover: {
    position: 'relative',
    margin: '1em',
  },
  title: {
    padding: '6px 12px 4px',
    position: 'absolute',
    left: '8px',
    top: '8px',
    fontSize: '12px',
    background: 'rgba(0,0,0,0.5)',
    opacity: '0.7',
    minWidth: '175px',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 400,
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
    link,
  } = props;
  return (
    <div className={classes.cover}>
      {link === undefined ? (
        <img alt="" className={classes.image} src={image}/>
      ) : (
        <Link to={link}>
          <img alt="" className={classes.image} src={image}/>
        </Link>
      )}
      {cardTitle &&
        <span className={classes.title}>{cardTitle}</span>
      }
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
