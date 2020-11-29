import React from "react";
// import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRandom,
  faWarehouse,
  faArrowCircleDown,
  faArrowCircleUp,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { Checkbox, FormControlLabel, Typography, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Chip,
  TextField
} from "@material-ui/core";
import {
  withStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import _ from "lodash";
import { colors } from "./theme";

const IconLeftExpansionPanelSummary = withStyles({
  root: {
    alignItems: "start"
    // padding: "0"
  },
  expandIcon: {
    order: -1
  }
})(ExpansionPanelSummary);

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 13
    }
  },
  overrides: {
    MuiChip: {
      root: {
        borderRadius: 1,
        fontSize: 10,
        padding: "0",
        maxWidth: "3.35rem",
        maxHeight: "1.4rem"
      }
    }
  }
});

const css = {
  fontAwesomeSize: {
    fontSize: "10"
  }
};

const BoxImp = withStyles({
  root: {
    padding: "0",
    marging: "0"
  }
})(Box);

const BoxText = withStyles({
  root: {
    maxWidth: 75
  }
})(Box);

const Accordion = (dispatch) => {
  const {
    dispatch: {
      shipmentId,
      origin,
      destination,
      packageSummary,
      dispatchBoardShipment,
      id,
      driver
    }
  } = dispatch;
  const shipper =
    `${origin.companyName} ${origin.address}, ${origin.city}` || "-";
  const consignee =
    `${destination.companyName} ${destination.address}, ${destination.city}` ||
    "-";
  const pcs = `Total pcs: ${packageSummary.totalPieces}` || "-";
  const wgt =
    `Weight: ${parseFloat(packageSummary.totalWeight).toFixed(3)}` || "-";
  const wgtu = `Weight unit: ${packageSummary.weightUnit}` || "-";
  const cbf = `CBF: ${parseFloat(packageSummary.cbf).toFixed(5)}` || "-";
  const summary = pcs + "\n" + wgt + "\n" + wgtu + "\n" + cbf;
  const appointment = `###.${shipmentId}\n4:15 PM\nJuly/12/2020`;

  console.log("this is accodrion: ", dispatch);
  return (
    <div style={{ marginTop: "1rem", border: "dashed 1px grey" }}>
      <ExpansionPanel square={true}>
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="additional-actions1-header"
        >
          <div style={{ width: "100%" }}>
            <BoxImp
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
            >
              <ThemeProvider theme={theme}>
                <BoxImp p={1} style={{ maxWidth: 30 }}>
                  <FormControlLabel
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                      <Checkbox style={{ margin: "0.1rem 0 0 0.5rem" }} />
                    }
                  />
                </BoxImp>
                <Box p={1}>
                  <Chip
                    label={_.capitalize(destination.serviceType)}
                    style={{ backgroundColor: colors.cloudyBlue }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  style={{
                    padding: "0.5rem 0.5rem 0.5rem 0",
                    border: "solid 1px lightgrey"
                  }}
                >
                  <Box>
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      style={css.fontAwesomeSize}
                    />
                  </Box>
                  <BoxText style={{ marginLeft: "0.2rem" }}>
                    <TextField
                      id="standard-multiline-static-shipper"
                      multiline
                      rows={4}
                      defaultValue={shipper}
                      InputProps={{
                        readOnly: true,
                        style: { fontSize: 10, paddingTop: "0" },
                        disableUnderline: true
                      }}
                    />
                  </BoxText>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  style={{
                    padding: "0.5rem 0.5rem 0.5rem 0",
                    border: "solid 1px lightgrey"
                  }}
                >
                  <Box>
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      style={css.fontAwesomeSize}
                    />
                  </Box>
                  <BoxText style={{ marginLeft: "0.2rem" }}>
                    <TextField
                      id="standard-multiline-static-consignee"
                      multiline
                      rows={4}
                      defaultValue={consignee}
                      InputProps={{
                        readOnly: true,
                        style: { fontSize: 10, paddingTop: "0" },
                        disableUnderline: true
                      }}
                    />
                  </BoxText>
                </Box>
                <BoxText p={1}>
                  <TextField
                    id="standard-multiline-static-summary"
                    multiline
                    rows={4}
                    defaultValue={summary}
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: 10, paddingTop: "0" },
                      disableUnderline: true
                    }}
                  />
                </BoxText>
                <Box p={1} maxWidth={40}>
                  <TextField
                    id="standard-multiline-static-appointment"
                    multiline
                    rows={4}
                    defaultValue={appointment}
                    InputProps={{
                      readOnly: true,
                      style: { fontSize: 10, paddingTop: "0" },
                      disableUnderline: true
                    }}
                  />
                </Box>
                <Box maxWidth={36} style={{ border: "solid 1px tomato" }}>
                  <TextField
                    id="standard-multiline-static-driver"
                    variant="outlined"
                    InputProps={{
                      style: { fontSize: 10, padding: "0" },
                      disableUnderline: true
                    }}
                  />
                </Box>
                <Box m={0.5} p={1} bgcolor="grey.300">
                  Item 8
                </Box>
              </ThemeProvider>
            </BoxImp>
          </div>
        </IconLeftExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>HERE will be expantion pannel ...</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Accordion;
