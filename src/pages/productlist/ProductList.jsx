import "./ProductList.css";

import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummy";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="product-params">
            <img
              className="products-image"
              src={params.row.img}
              alt="user-img"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="product-edit">Edit</button>
            </Link>
            <AiOutlineDelete
              onClick={() => handleDelete(params.row.id)}
              className="product-delete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist" style={{ height: 600, width: "100%" }}>
      <div className="productlist__title">
        <h1>Product List</h1>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
