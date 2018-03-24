import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import HomeStyle from "variables/styles/homeStyle";
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import StarBorderIcon from 'material-ui-icons/StarBorder';
import YiLouImg from "assets/img/huxing/si/yilou.png";
import ErLouImg from "assets/img/huxing/si/erlou.png";
import SanLouImg from "assets/img/huxing/si/sanlou.png";
import GeLouImg from "assets/img/huxing/si/gelou.png";
import DiXiaYiLouImg from "assets/img/huxing/si/dixiayilou.png";
import DiXiaErLouImg from "assets/img/huxing/si/dixiaerlou.png";

const tileData = [
   {
     img: YiLouImg,
     title: '一楼',
     author: 'author',
   },
   {
     img: ErLouImg,
     title: '二楼',
     author: 'author',
   },
   {
     img: SanLouImg,
     title: '三楼',
     author: 'author',
   },
   {
     img: GeLouImg,
     title: '阁楼',
     author: 'author',
   },
   {
     img: DiXiaYiLouImg,
     title: '地下一楼',
     author: 'author',
   },
   {
     img: DiXiaErLouImg,
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
