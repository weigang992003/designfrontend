import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  CardActions
} from "material-ui";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

import regularCardStyle from "variables/styles/regularCardStyle";

function RegularCard({ ...props }) {
  const {
    classes,
    headerColor,
    plainCard,
    cardAction,
    cardTitle,
    cardSubtitle,
    content,
    collapse,
    footer,
    expanded,
    handleExpandClick,
    handleOnMouseOver
  } = props;
  const plainCardClasses = cx({
    [" " + classes.cardPlain]: plainCard
  });
  const cardPlainHeaderClasses = cx({
    [" " + classes.cardPlainHeader]: plainCard
  });
  return (
    <Card className={classes.card + plainCardClasses} onMouseOver={handleOnMouseOver}>
      <CardHeader
        classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"] +
            cardPlainHeaderClasses,
          title: classes.cardTitle,
          subheader: classes.cardSubtitle
        }}
        title={cardTitle}
        subheader={cardSubtitle}
        action={cardAction}
      />
      <CardContent classes={classes.CardContent}>{content}</CardContent>
      {collapse !== undefined ? (<div><CardActions className={classes.actions} disableActionSpacing>
        户型图
        <IconButton
          className={cx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={ handleExpandClick }
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {collapse}
      </Collapse></div>) : null}
      {footer !== undefined ? (
        <CardActions className={classes.cardActions}>{footer}</CardActions>
      ) : null}
    </Card>
  );
}

RegularCard.defaultProps = {
  headerColor: "purple"
};

RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple"]),
  cardTitle: PropTypes.node,
  cardAction: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
};

export default withStyles(regularCardStyle)(RegularCard);
