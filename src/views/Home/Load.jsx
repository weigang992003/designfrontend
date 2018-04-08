import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid } from "material-ui";
import Card, { CardContent } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import {
  Huxing,
  RegularCard,
  ItemGrid
} from "components";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {FiberManualRecord} from "material-ui-icons";
import BannerImg from "assets/img/banner.jpg";

const styles = {
  slogan: {
    fontWeight: '300',
    marginTop: '2em',
  },
  item: {
    fontSize: '0.9em',
    color: '#666',
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
  icon: {
    width: '5px',
    marginRight: '-4px',
    marginLeft: '-16px',
  },
  dingzhi: {
    width: '13em',
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
  classes = this.props.classes;

  render () {
    return (
      <div>
        <Card className={this.classes.card}>
          <div className={this.classes.media}>
            <img
              src={ BannerImg }
              className={this.classes.banner}
              alt="定制化装修方案"
            />
          </div>
          <div style={{paddingBottom: "30px"}}>
            <div className={this.classes.typo}>
              <h1 className={this.classes.slogan}>远洋<FiberManualRecord className={this.classes.pointer}/>天著春秋 定制化装修方案</h1>
              <p className={this.classes.desc}>精装定制化，方案个性化，服务全方位。<br />更懂天著春秋，更懂你。</p>
              <Huxing
                button={
                  <div className={this.classes.dingzhi}>立即定制</div>
                }
                dist="/home"
              />
            </div>
          </div>
          <CardContent style={{width: '75%', margin: "0 auto", paddingLeft: "10%"}}>
            <Grid container>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="white"
                  cardTitle="平面布局方案"
                  content={
                    <div>
                      <List component="nav">
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
                    </div>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="white"
                  cardTitle="精装风格定位"
                  content={
                    <List component="nav">
                      <ListItem button component={Link} to="/stylechoose">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="现代" />
                      </ListItem>
                      <ListItem button component={Link} to="/stylechoose">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="简欧" />
                      </ListItem>
                      <ListItem button component={Link} to="/stylechoose">
                        <ListItemIcon>
                          <FiberManualRecord classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="新中式" />
                      </ListItem>
                    </List>
                  }
                />
              </ItemGrid>
              <ItemGrid xs={12} sm={12} md={3}>
                <RegularCard
                  headerColor="white"
                  cardTitle="加载升级模块"
                  content={
                    <List component="nav">
                      <ListItem button component={Link} to="/shengji">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="洁具升级模块" />
                      </ListItem>
                      <ListItem button component={Link} to="/shengji">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="电器升级模块" />
                      </ListItem>
                      <ListItem button component={Link} to="/shengji">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="橱柜升级模块" />
                      </ListItem>
                      <ListItem button component={Link} to="/shengji">
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
                  headerColor="white"
                  cardTitle="个性化定制"
                  content={
                    <List component="nav">
                      <ListItem button component={Link} to="/siren">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="健身房" />
                      </ListItem>
                      <ListItem button component={Link} to="/siren">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私人酒窖" />
                      </ListItem>
                      <ListItem button component={Link} to="/siren">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私人影音室" />
                      </ListItem>
                      <ListItem button component={Link} to="/siren">
                        <ListItemIcon>
                          <FiberManualRecord  classes={{root: this.classes.icon}}/>
                        </ListItemIcon>
                        <ListItemText classes={{primary: this.classes.item}} inset primary="私家衣帽间" />
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
