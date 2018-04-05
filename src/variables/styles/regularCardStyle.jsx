// ##############################
// // // RegularCard styles
// #############################

import {
  card,
  defaultFont,
  grayCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader
} from "variables/styles";

const regularCardStyle = {
  card,
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    padding: '12px 0 12px 17px',
    ...defaultFont
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  grayCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardTitle: {
    color: "#000000",
    marginTop: "0",
    marginBottom: "0px",
    ...defaultFont,
    fontSize: "1.2em",
  },
  cardSubtitle: {
    ...defaultFont,
    marginBottom: "0",
    color: "rgba(0, 0, 0, 0.62)",
    margin: "10px 0 10px",
    paddingBottom: '10px',
    borderBottom: "solid 1px rgba(0, 0, 0, 0.62)",
  },
  cardActions: {
    padding: "14px",
    display: "block",
    height: "auto"
  },
  cardContent: {
    overflow: "hidden"
  },
  expandText: {
    color: "#000000",
    paddingLeft: '20px'
  },
};

export default regularCardStyle;
