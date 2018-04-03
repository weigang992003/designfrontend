import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "material-ui";

import {
  SimpleMediaCard,
  ItemGrid,
  Button
} from "components";

import DecorationStyle from "variables/styles/decorationStyle";
import yilou from "assets/img/huxing/si/yilou.png";
import erlou from "assets/img/huxing/si/erlou.png";
import sanlou from "assets/img/huxing/si/sanlou.png";
import gelou from "assets/img/huxing/si/gelou.png";
import dixiayilou from "assets/img/huxing/si/dixiayilou.png";
import dixiaerlou from "assets/img/huxing/si/dixiaerlou.png";
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  state = {
    value: 0,
    selectedValue: "qingsheBase",
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="一楼"
              image={yilou}
              classes={ classes }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="二楼"
              image={erlou}
              classes={ classes }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="三楼"
              image={sanlou}
              classes={ classes }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="阁楼"
              image={gelou}
              classes={ classes }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="地下一楼"
              image={dixiayilou}
              classes={ classes }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <SimpleMediaCard
              cardTitle="地下二楼"
              image={dixiaerlou}
              classes={ classes }
            />
          </ItemGrid>
        </Grid>
        <br />
        <Button color='primary' component={Link} to={`/style`}>
          下一步
        </Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(DecorationStyle)(Dashboard);
