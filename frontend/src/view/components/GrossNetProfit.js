import React from "react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import yLabel from "../utils/yLabel";
import LineChart from "../components/LineChart";

export default ({ gpm, npm }) => {
  const dataset = [
    {
      gpm,
    },
    {
      npm,
    },
  ];
  return (
    <CCard className="w-100">
      <CCardHeader className="text-center">
        <h3>Gross Profit vs Net Profit</h3>
      </CCardHeader>
      <CCardBody>
        <LineChart datasets={dataset} callback={yLabel} />
      </CCardBody>
    </CCard>
  );
};
