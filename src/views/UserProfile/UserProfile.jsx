import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";

function UserProfile({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
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
            footer={<Button color="blue">确认</Button>}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={avatar}
            subtitle="创始人"
            title="创始人"
            description="创创创始人创始人创始人创始人创始人创始人始人创创始人创始人创始人创始人创始人创始人始人创创始人创始人创始人创始人创始人创始人始人创创始人创始人创始人创始人创始人创始人始人创始人创始人创始人创始人创始人创始人始人"
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default UserProfile;
