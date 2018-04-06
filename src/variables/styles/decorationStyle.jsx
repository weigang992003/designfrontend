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
    }
  },
  iconContainer: {
    "& svg": {
      color: "rgba(0, 0, 0, 0.5)",
    }
  },
  radio: {
    color: '#666',
  }
};

export default decorationStyle;
