import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import BannerImg from "assets/img/home.png";
import {
  RegularCard,
  ItemGrid
} from "components";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  DonutSmall,
  DonutLarge,
  BubbleChart,
} from "material-ui-icons";

const styles = {
  card: {
    width: '100%',
    height: 'auto',
  },
  media: {
    width: '100%',
  },
  typo: {
    textAlign: 'center',
  },
  desc: {
    fontSize: '14px',
    padding: '0px 250px',
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={ BannerImg }
          title="Contemplative Reptile"
        >
          <img
            src={ BannerImg }
            className={classes.media}
            alt="定制化装修方案"
          />
        </CardMedia>
        <div>
          <div className={props.classes.typo}>
            <h1>定制化装修方案</h1>
            <p className={props.classes.desc}>定定制化装修方定制化装修方定制化装修方定制化装修方定制化装修方案案案案装修方定制化装修方定制化装修方定制化装修方案案案案案定制化装修方案</p>
          </div>
        </div>
        <CardContent>
          <Grid container>
            <ItemGrid xs={12} sm={12} md={4}>
              <RegularCard
                headerColor="orange"
                cardTitle="平面布置方案"
                content={
                  <List component="nav">
                    <ListItem button>
                      <ListItemIcon>
                        <DonutSmall />
                      </ListItemIcon>
                      <ListItemText inset primary="四世同堂" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutSmall />
                      </ListItemIcon>
                      <ListItemText inset primary="三代和睦" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutSmall />
                      </ListItemIcon>
                      <ListItemText inset primary="二胎时代" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutSmall />
                      </ListItemIcon>
                      <ListItemText inset primary="一生一世" />
                    </ListItem>
                  </List>
                }
                classes={ classes }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={4}>
              <RegularCard
                headerColor="orange"
                cardTitle="精装风格定位"
                content={
                  <List component="nav">
                    <ListItem button>
                      <ListItemIcon>
                        <BubbleChart />
                      </ListItemIcon>
                      <ListItemText inset primary="当代轻奢(基础版)" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <BubbleChart />
                      </ListItemIcon>
                      <ListItemText inset primary="当代轻奢(升级版)" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <BubbleChart />
                      </ListItemIcon>
                      <ListItemText inset primary="当代雅致(基础版)" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <BubbleChart />
                      </ListItemIcon>
                      <ListItemText inset primary="当代雅致(升级版)" />
                    </ListItem>
                  </List>
                }
                classes={ classes }
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={4}>
              <RegularCard
                headerColor="orange"
                cardTitle="升级选项"
                content={
                  <List component="nav">
                    <ListItem button>
                      <ListItemIcon>
                        <DonutLarge />
                      </ListItemIcon>
                      <ListItemText inset primary="洁具选型" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutLarge />
                      </ListItemIcon>
                      <ListItemText inset primary="电器选型" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutLarge />
                      </ListItemIcon>
                      <ListItemText inset primary="橱柜选型" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DonutLarge />
                      </ListItemIcon>
                      <ListItemText inset primary="电梯选择" />
                    </ListItem>
                  </List>
                }
                classes={ classes }
              />
            </ItemGrid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
