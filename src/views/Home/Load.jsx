import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import BannerImg from "assets/img/home.png";
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {
  RegularCard,
  ItemGrid
} from "components";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  AccountBalance,
  DonutSmall,
  DonutLarge,
  BubbleChart,
  FiberManualRecord,
} from "material-ui-icons";

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

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
  },
  link: {
    color: '#ffffff',
  },
  pointer: {
    width: '16px',
    height: '32px',
  },
  leftNav: {
    float: 'left',
    width: '50%',
    marginBottom: '24px',
  },
};

class SimpleMediaCard extends React.Component {
  state = {
    open: false,
  };

  classes = this.props.classes;

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent onClick={this.handleClose}>
            <RegularCard
              headerColor="orange"
              cardTitle={
                <Link to="/style/four" className={this.classes.link}>选择户型</Link>
              }
              content={
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="洋房160平米户型" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="平墅204平米户型" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="平墅238平米户型" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="联排225平米户型" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="联排240平米户型" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="联排265平米户型" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBalance />
                    </ListItemIcon>
                    <ListItemText primary="双拼270平米户型" />
                  </ListItem>
                </List>
              }
            />
          </DialogContent>
        </Dialog>
        <Card className={this.classes.card}>
          <CardMedia
            className={this.classes.media}
            image={ BannerImg }
            title="定制化装修方案"
          >
            <img
              src={ BannerImg }
              className={this.classes.media}
              alt="定制化装修方案"
            />
          </CardMedia>
          <div>
            <div className={this.classes.typo}>
              <h1>远洋<FiberManualRecord className={this.classes.pointer}/>天著春秋 定制化装修方案</h1>
              <p className={this.classes.desc}>定定制化装修方定制化装修方定制化装修方定制化装修方定制化装修方案案案案装修方定制化装修方定制化装修方定制化装修方案案案案案定制化装修方案</p>
            </div>
          </div>
          <CardContent>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={4}>
                <RegularCard
                  headerColor="orange"
                  cardTitle={
                    <Link to="/home" className={this.classes.link}>平面布局方案</Link>
                  }
                  content={
                    <div>
                      <List component="nav" className={this.classes.leftNav}>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="四世同堂" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="三代和睦" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="二胎时代" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="一生一世" />
                        </ListItem>
                      </List>
                      <List component="nav" className={this.classes.leftNav}>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="一二三层" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="阁楼" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="地下一层" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <DonutSmall />
                          </ListItemIcon>
                          <ListItemText inset primary="地下二层" />
                        </ListItem>
                      </List>
                    </div>
                  }
                  classes={ this.classes }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <RegularCard
                  headerColor="orange"
                  cardTitle={
                    <Link to="/style/four" className={this.classes.link}>精装风格定位</Link>
                  }
                  content={
                    <List component="nav">
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <BubbleChart />
                        </ListItemIcon>
                        <ListItemText inset primary="当代轻奢(基础版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <BubbleChart />
                        </ListItemIcon>
                        <ListItemText inset primary="当代轻奢(升级版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <BubbleChart />
                        </ListItemIcon>
                        <ListItemText inset primary="当代雅致(基础版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <BubbleChart />
                        </ListItemIcon>
                        <ListItemText inset primary="当代雅致(升级版)" />
                      </ListItem>
                    </List>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={4}>
                <RegularCard
                  headerColor="orange"
                  cardTitle="加载升级模块"
                  content={
                    <List component="nav">
                      <ListItem button>
                        <ListItemIcon>
                          <DonutLarge />
                        </ListItemIcon>
                        <ListItemText inset primary="洁具升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DonutLarge />
                        </ListItemIcon>
                        <ListItemText inset primary="电器升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DonutLarge />
                        </ListItemIcon>
                        <ListItemText inset primary="橱柜升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <DonutLarge />
                        </ListItemIcon>
                        <ListItemText inset primary="电梯升级模块" />
                      </ListItem>
                    </List>
                  }
                />
              </ItemGrid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
