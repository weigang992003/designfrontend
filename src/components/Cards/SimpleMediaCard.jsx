import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: '100%',
  },
  media: {
    width: '100%',
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
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title={cardTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {cardTitle}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
