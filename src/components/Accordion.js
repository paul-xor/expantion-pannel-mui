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
  Button
} from "@material-ui/core";
import {
  withStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import _ from "lodash";

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
    subtitleNew: {
      fontSize: 4
    }
  }
});

const BoxImp = withStyles({
  root: {
    padding: "0",
    marging: "0",
    backgroundColor: "lightyellow"
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

  console.log("this is accodrion: ", dispatch);
  return (
    <div style={{ marginTop: "1rem", border: "solid 1px yellow" }}>
      <ExpansionPanel square={true}>
        <IconLeftExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="additional-actions1-header"
          style={{ backgroundColor: "lightgrey", border: "dashed 1px black" }}
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
                <Box m={0.1} p={1}>
                  <Button
                    style={{ color: "black", backgroundColor: "lightgreen" }}
                  >
                    {_.capitalize(destination.serviceType)}
                  </Button>
                </Box>
                <Box
                  m={0.1}
                  p={1}
                  display="flex"
                  flexDirection="row"
                  style={{ border: "solid 1px lightgrey" }}
                >
                  <Box>
                    <FontAwesomeIcon icon={faArrowCircleUp} />
                  </Box>
                  <Box
                    style={{ maxWidth: 130, height: 65, marginLeft: "0.5rem" }}
                  >
                    <Typography variant="subtitle2">
                      {`${origin.companyName} ${origin.address}, ${origin.city}` ||
                        "-"}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  m={0.1}
                  p={1}
                  display="flex"
                  flexDirection="row"
                  style={{ border: "solid 1px lightgrey" }}
                >
                  <Box>
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                  </Box>
                  <Box
                    style={{ maxWidth: 130, height: 65, marginLeft: "0.5rem" }}
                  >
                    <Typography variant="subtitle2">
                      {`${destination.companyName} ${destination.address}, ${destination.city}` ||
                        "-"}
                    </Typography>
                  </Box>
                </Box>
                <Box m={0.5} p={1} bgcolor="grey.300">
                  Item 5
                </Box>
                <Box m={0.5} p={1} bgcolor="grey.300">
                  Item 6
                </Box>
                <Box m={0.5} p={1} bgcolor="grey.300">
                  Item 7
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
