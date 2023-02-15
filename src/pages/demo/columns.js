export const columns = [
    {field: "id", headerName: "ID", width: 70, color: "green"},
    {field: "firstName", headerName: "First name", width: 130},
    {field: "lastName", headerName: "Last name", width: 130},
    {
      field: "age",
      headerName: "Age",
      type: "number",
      //   width: 90,
      //   headerClassName: 'super-app-theme--header',
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];