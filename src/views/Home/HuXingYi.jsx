import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import HomeStyle from "variables/styles/homeStyle";
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import SiYiLouImg from "assets/img/huxing/si/yilou.png";

import Yi from "assets/img/huxing/yi/yi.png";
import Er from "assets/img/huxing/yi/er.png";
import San from "assets/img/huxing/yi/san.png";
import Ge from "assets/img/huxing/yi/gelou.png";
import Dixiayi from "assets/img/huxing/yi/dixiayi.png";
import Dixiaer from "assets/img/huxing/yi/dixiaer.png";

const tileData = [
   {
     img: Yi,
     title: '一楼',
     author: 'author',
   },
   {
     img: Er,
     title: '二楼',
     author: 'author',
   },
   {
     img: San,
     title: '三楼',
     author: 'author',
   },
   {
     img: Ge,
     title: '阁楼',
     author: 'author',
   },
   {
     img: Dixiayi,
     title: '地下一楼',
     author: 'author',
   },
   {
     img: Dixiaer,
     title: '地下二楼',
     author: 'author',
   },
 ];
function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(HomeStyle)(SingleLineGridList);
