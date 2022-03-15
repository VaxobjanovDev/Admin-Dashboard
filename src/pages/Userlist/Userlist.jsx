import "./Userlist.css";
import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import {userRows} from '../../dummy'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Userlist() {

  const [data,setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter((item)=>item.id!==id))
  }

  const columns = [

    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userlist-user">
            <img className="user-image" src={params.row.avatar} alt="user-img" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
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
      field: "transaction",
      headerName: "UserImage",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Money",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
            <button className="user-edit">Edit</button>
            </Link>
            <AiOutlineDelete onClick={()=>handleDelete(params.row.id)} className="user-delete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list" style={{ height: 600, width: "100%" }}>
      <div className="userlist__title">
        <h1>User List</h1>
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
