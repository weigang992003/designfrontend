// ##############################
// // // Dashboard styles
// #############################

import { successColor } from "variables/styles";

const decorationStyle = {
  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  },
  checked: {
    color: '#FFFFFF',
  },
  unchecked: {
    color: '#FFFFFF',
  },
  card: {
    color: '#adfaff'
  },
  gridImg: {
    width: '100%'
  },
  root: {
    width: '90%',
    margin: '0 auto',
  },
  instructions: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  rooms: {
    marginTop: '20px',
    marginBottom: '10px',
  },
  table: {
    minWidth: '300px',
    "& span": {
      fontSize: '13px',
      fontWeight: 300,
    },
    "& svg": {
      fontSize: '15px',
    },
    "& tr": {
      height: '36px',
      "& td": {
        width: "35%",
      },
      "& td:first-child": {
        width: "20%",
      },
      "& td:last-child": {
        width: "10%",
      },
    },
  },
  tableHeader: {
    background: 'rgba(0, 0, 0, 0.5)',
    "& th": {
      color: "#fff",
    }
  },
  iconContainer: {
    "& svg": {
      color: "rgba(0, 0, 0, 0.5)",
    },
    "& svg[class*='active']": {
      color: "#c22",
    }
  },
  radio: {
    color: '#666',
  },
  zuizhong: {
    width: "80%",
    margin: "0 auto",
  },
  zhucai: {
    width: "50px",
    verticalAlign: "bottom",
    paddingBottom: "2px",
    cursor: "pointer",
    "&:hover": {width: "100px"},
  }
};

export default decorationStyle;
