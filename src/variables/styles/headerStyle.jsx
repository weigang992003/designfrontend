// ##############################
// // // Header styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "variables/styles";

const headerStyle = theme => ({
  centerMenu: {
    fontSize: "13px",
    width: "100%",
    textAlign: "center",
    height: "52px",
    lineHeight: "44px",
    fontWeight: 400,
  },
  menuText: {
    marginRight: '20px',
  },
  appBar: {
    //top: "-30px",
    //[theme.breakpoints.down("md")]: {
      //top: "-15px"
    //},
    backgroundColor: "#222",
    height: "52px",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    zIndex: "1029",
    color: "#ffffff",
    border: "0",
    padding: "0px 0",
    paddingTop: "0px",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container,
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  }
});

export default headerStyle;
