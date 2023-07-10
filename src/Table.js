import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashAlt } from "react-icons/fa";
import { useFormAction, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { allField, removeField } from "./component/store/userSlice1";

const Table = () => {
  const [updateData, setUpdateData] = useState([]);
  const navigate = useNavigate();
  const data = useSelector(allField);
  const dispatch = useDispatch();

  const onBackPress = () => {
    navigate("/");
  };

  const userList = data.payload.data.data;

  const columns = [
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone no.",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "services",
      selector: (row) => row.services,
      sortable: true,
    },
    {
      name: "budget",
      selector: (row) => row.price,
      sortable: true,
    },

    {
      cell: (row) => (
        <button
          aria-label="delete"
          color="secondary"
          onClick={() => deleteEntry(row.name)}
        >
          <FaTrashAlt className="text-red-600" />
        </button>
      ),
    },
  ];

  const deleteEntry = (name) => {
    dispatch(removeField(name));
  };

  const [records, setRecords] = useState(userList);

  const handleFiter = (event) => {
    const newData = userList.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  };
  return (
    <>
      <div className="container mt-2">
        <div className="p-2 bg-slate-300 flex justify-between ">
          <button
            onClick={() => onBackPress()}
            className="bg-indigo-500 text-white uppercase py-2 px-4 rounded-full font-semibold curser-pointer border-2 border-indigo-500 hover:bg-indigo-700 hover:text-white transition duration-200 ease-in-out "
          >
            Back
          </button>
          <input
            type="text"
            name=""
            className="p-2 border-none outline-none "
            onChange={handleFiter}
          />
        </div>

        <DataTable
          columns={columns}
          data={userList}
          selectableRows
          fixedHeader
          pagination
          responsive
          highlightOnHover
          striped
          defaultSortField="cases"
        ></DataTable>
      </div>
    </>
  );
};

export default Table;
