import React from "react";
import { Grid } from "material-ui";
import { Link } from 'react-router-dom'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import {
  Top,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";


function UserProfile({ ...props }) {
  return (
    <div>
      <Top title="联系方式"/>
      <div style={{width: "80%", margin: "0 auto", padding: "20px 0 20px"}}>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle=""
              headerColor="orange"
              content={
                <div>
                  <Grid container>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="姓名"
                        id="name-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="邮箱"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="手机号"
                        id="mobile-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="房间号"
                        id="mobile-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </ItemGrid>
                  </Grid>
                </div>
              }
              footer={<Button color="primary" component={Link} to='/'>确认</Button>}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <h1>
              有疑问？
            </h1>
            <span>
              我们随时提供帮助。<br />您可以通过以下方式联系我们: 400 xxx xxxx
            </span>
          </ItemGrid>
        </Grid>
      </div>
    </div>
  );
}

export default UserProfile;
