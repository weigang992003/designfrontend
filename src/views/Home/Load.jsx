import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Card, { CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import {
  RegularCard,
  ItemGrid
} from "components";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {FiberManualRecord} from "material-ui-icons";

import Dialog, {
  DialogContent,
} from 'material-ui/Dialog';
import BannerImg from "assets/img/banner.jpg";
import dudong from "assets/img/load/dudong.png";
import bieshu from "assets/img/load/bieshu.png";

const styles = {
  popup: {
    padding: '0 70px 0 90px',
  },
  slogan: {
    fontWeight: '300',
    marginTop: '2em',
  },
  dudong: {
    float: 'left',
    width: '300px',
    padding: '5px',
    border: 'solid 1px #eee',
    marginRight: '20px',
    height: '180px'
  },
  white: {
    color: "#fff",
    fontWeight: 400,
  },
  huxing: {
    fontSize: '1.8em',
    fontWeight: 500,
    textAlign: 'center',
    padding: '27px 0px 40px',
    color: '#000'
  },
  cangshan: {
    float: 'left',
    width: '310px',
    marginRight: '23px',
  },
  huxingItem: {
    padding: '12px 12px 12px 0px',
  },
  dudongText: {
    fontSize: '13px',
    paddingLeft: '16px',
  },
  item: {
    fontSize: '0.9em',
  },
  card: {
    width: '100%',
    height: 'auto',
  },
  media: {
    width: '100%',
    marginTop: '52px',
  },
  banner: {
    width: '100%',
  },
  typo: {
    textAlign: 'center',
  },
  desc: {
    fontSize: '15px',
    padding: '0px 250px 20px',
  },
  link: {
    color: '#ffffff',
  },
  pointer: {
    width: '12px',
    height: '32px',
  },
  leftNav: {
    float: 'left',
    width: '50%',
    marginBottom: '24px',
  },
  icon: {
    width: '8px',
    marginRight: '0px',
    marginLeft: '-16px',
  },
  dingzhi: {
    width: '12em',
    border: 'solid 1px',
    padding: '8px',
    color: '#fff',
    background: '#c00',
    fontSize: '13px',
    letterSpacing: '1px',
    fontWeight: 400,
    display: 'inline-block',
    marginBottom: '30px',
    cursor: 'pointer',
    fontFamily: 'Gotham Medium,"M Hei PRC W45","M Hei HK W42","M Hei HK W40","HelveticaNeue-Regular","Helvetica Neue Regular","Helvetica Neue",Helvetica,Arial,sans-serif',
  }
};

class SimpleMediaCard extends React.Component {
  state = {
    open: false,
  };

  classes = this.props.classes;
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
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
          maxWidth="md"
        >
          <DialogContent>
            <div className={this.classes.popup}>
              <div className={this.classes.huxing}>选择户型</div>
              <div><img alt="藏山独栋" src={dudong} className={this.classes.dudong}/><img alt="藏山别墅" src={bieshu} className={this.classes.dudong}/></div>
              <div>
                <div className={this.classes.cangshan}>
                  <RegularCard
                    headerColor="red"
                    classes={{cardTitle: this.classes.white, CardContent: {padding: '0px'}}}
                    cardTitle="藏山独栋"
                    content={
                      <List component={Link} to="/home">
                        <ListItem button className={this.classes.huxingItem}>
                          <ListItemText classes={{primary: this.classes.dudongText}} primary="联排265平米户型" />
                        </ListItem>
                        <Divider light />
                        <ListItem button className={this.classes.huxingItem}>
                          <ListItemText classes={{primary: this.classes.dudongText}} primary="双拼270平米户型" />
                        </ListItem>
                      </List>
                    }
                  />
                </div>
                <div className={this.classes.cangshan}>
                  <RegularCard
                    headerColor="red"
                    classes={{cardTitle: this.classes.white}}
                    cardTitle="藏山别墅"
                    content={
                      <List component={Link} to="/home">
                        <ListItem button className={this.classes.huxingItem}>
                          <ListItemText classes={{primary: this.classes.dudongText}} primary="联排225平米户型" />
                        </ListItem>
                        <Divider />
                        <ListItem button className={this.classes.huxingItem}>
                          <ListItemText classes={{primary: this.classes.dudongText}} primary="联排240平米户型" />
                        </ListItem>
                      </List>
                    }
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Card className={this.classes.card}>
          <div className={this.classes.media}>
            <img
              src={ BannerImg }
              className={this.classes.banner}
              alt="定制化装修方案"
            />
          </div>
          <div>
            <div className={this.classes.typo}>
              <h1 className={this.classes.slogan}>远洋<FiberManualRecord className={this.classes.pointer}/>天著春秋 定制化装修方案</h1>
              <p className={this.classes.desc}>精装定制化，方案个性化，服务全方位。<br />更懂天著春秋，更懂你。</p>
              <div className={this.classes.dingzhi} onClick={this.handleClickOpen}>立即定制</div>
            </div>
          </div>
          <CardContent>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="orange"
                  cardTitle="平面布局方案"
                  content={
                    <div>
                      <List component="nav" className={this.classes.leftNav}>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="四世同堂" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="三代和睦" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="二胎时代" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="一生一世" />
                        </ListItem>
                      </List>
                      <List component="nav" className={this.classes.leftNav}>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="一二三层" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="阁楼" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="地下一层" />
                        </ListItem>
                        <ListItem button component={Link} to="/home">
                          <ListItemIcon>
                            <FiberManualRecord classes={{root: this.classes.icon}}/>
                          </ListItemIcon>
                          <ListItemText classes={{primary: this.classes.item}} inset primary="地下二层" />
                        </ListItem>
                      </List>
                    </div>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="orange"
                  cardTitle="精装风格定位"
                  content={
                    <List component="nav">
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="当代轻奢(基础版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="当代轻奢(升级版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="当代雅致(基础版)" />
                      </ListItem>
                      <ListItem button component={Link} to="/style/four">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="当代雅致(升级版)" />
                      </ListItem>
                    </List>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="orange"
                  cardTitle="加载升级模块"
                  content={
                    <List component="nav">
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="洁具升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="电器升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="橱柜升级模块" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="电梯升级模块" />
                      </ListItem>
                    </List>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="orange"
                  cardTitle="个性化定制"
                  content={
                    <List component="nav">
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私人酒窖" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私人影音室" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私家衣帽间" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="健身房" />
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
