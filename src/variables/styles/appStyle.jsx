// ##############################
// // // App styles
// #############################

import { transition, container } from "variables/styles.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: 'touch'
  },
  homeContent: {
    padding: "0px 0px",
    minHeight: "calc(100% - 123px)"
  },
  content: {
    marginTop: "52px",
    minHeight: "calc(100% - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
