import React from "react";
import "./styles.css";
import Accordion from "./components/Accordion";
import { MOCK_DISPATCHES } from "./components/utils";

export default function App() {
  console.log("🧐 ", MOCK_DISPATCHES);
  const dispatches = MOCK_DISPATCHES;

  const renderDispatches = () =>
    dispatches?.map((item) => {
      return <Accordion dispatch={item} key={item.shipmentId} />;
    });

  return <div>{renderDispatches()}</div>;
}
