import React from "react";
import { Grid } from "material-ui";
import { Link } from 'react-router-dom'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import {
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";


function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="方案总览"
            headerColor="orange"
            content={
              <Table>
                <TableHead>
                  <TableRow key="jj">
                    <TableCell key="sdf">户型 :</TableCell>
                    <TableCell key="sddff">平墅204平米</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key='kk'>
                    <TableCell key='adf'>平面布局 :</TableCell>
                    <TableCell key='kdf'>三代和睦</TableCell>
                  </TableRow>
                  <TableRow key='2kk'>
                    <TableCell key='2adf'>风格定位 :</TableCell>
                    <TableCell key='2kdf'>当代轻奢（升级版）</TableCell>
                  </TableRow>
                  <TableRow key='3kk'>
                    <TableCell key='2adsf'>房间详情 :</TableCell>
                    <TableCell key='2kdfs'>...</TableCell>
                  </TableRow>
                  <TableRow key='2kk'>
                    <TableCell key='2adf'>加载升级包 :</TableCell>
                    <TableCell key='2kdf'>....</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            }
          />
          <RegularCard
            cardTitle="请留下您的联系方式"
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
                </Grid>
              </div>
            }
            footer={<Button color="blue" component={Link} to='/load'>确认</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <h1>
            有疑问？
          </h1>
          <span>
            我们随时提供帮助。您可以通过以下方式联系我们: 400 xxx xxxx
          </span>
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
