import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
    content,
    image,
  } = props;
  return (
    <div className={classes.cover}>
      <img className={classes.image} src={image}/>
      <div className={classes.title}>{cardTitle}</div>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
