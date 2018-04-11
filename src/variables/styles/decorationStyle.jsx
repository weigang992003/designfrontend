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
  shengjitable: {
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
      "& td:first-child": {
        width: "20%",
      },
      "& td:last-child": {
        width: "10%",
      },
    },
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
  },
  iconActive: {
    "& svg": {
      color: "#c22",
    },
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
  },
  forward: {
    height: '500px',
    lineHeight: '500px',
    textAlign: "center"},
  styleDesc: {
    fontSize: "13px",
    color: '#666',
    paddingLeft: '24px',
    textAlign: 'center',
    padding: '0 50px',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
  },
  stylelink: {
    display: 'flex',
  }
};

export default decorationStyle;
