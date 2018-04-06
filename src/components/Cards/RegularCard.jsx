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
import IconButton from 'material-ui/IconButton';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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
    handleOnMouseOver,
    expandText
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
      <CardContent
        className={classes.CardContent}
        classes={{
          root: classes[headerColor + "CardContent"]
        }}
      >
        {content}
      </CardContent>
      {collapse !== undefined ? (<div><CardActions className={classes.actions} disableActionSpacing>
        {handleExpandClick !== undefined ? (
          <div>
            <span className={classes.expandText}>{expandText}</span>
            <IconButton
              className={cx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              aria-expanded={expanded}
              onClick={handleExpandClick}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
        ) : null}
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
  headerColor: PropTypes.oneOf(["orange", "green", "red", "blue", "purple", "gray"]),
  cardTitle: PropTypes.node,
  cardAction: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
};

export default withStyles(regularCardStyle)(RegularCard);
