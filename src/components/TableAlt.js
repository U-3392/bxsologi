import React from "react";
import '../gaussian.css';
import aggrid from 'ag-grid-react';

import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function CompetitorTable({ data }) {
  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Grade", field: "grade" },
    { headerName: "Competitions", field: "competitions", filter: true },
    // Add other columns as needed
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "400px", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        domLayout="autoHeight"
        suppressMenuHide
        suppressColumnVirtualisation
      />
    </div>
  );
}
