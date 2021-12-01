import React, { useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link } from "react-router-dom";
import { GET_ALL_USERS } from "../account/Graphql/Queries";
import { DELETE_USER } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function AdminPage() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER,{refetchQueries:[GET_ALL_USERS]});
  const userInfo = JSON.parse(localStorage.getItem('user'))
  if (error) {
    return <h1> {error?.message} </h1>;
  }
  return (
    <body>
      <div align="center">
        <h1>User Accounts</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div className="table-div">
          <table className="user-table">
            <tr className="admin-tr">
              <th className="table-header">Id No.</th>
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>
              <th className="table-header">Username</th>
              <th className="table-header">Level/Strand</th>
              <th className="table-header">School</th>
              <th className="table-header">Action</th>
            </tr>
            {data &&
              data?.getAllUsers?.filter(user=>user.id!==userInfo?.id)?.map((user) => {
                return (
                  <tr className="admin-tr">
                    <td className="admin-td"> {user.id} </td>
                    <td className="admin-td"> {user.name} </td>
                    <td className="admin-td"> {user.email} </td>
                    <td className="admin-td"> {user.username} </td>
                    <td className="admin-td"> {user.levelStrand} </td>
                    <td className="admin-td"> {user.school} </td>
                    <td className="admin-td">
                      {userInfo?.is_admin && <button
                        className="del-btn"
                        onClick={() => {
                          deleteUser({ variables: { id: user.id } });
                        }}
                      >
                        Delete
                      </button>}
                      <br></br>
                      <br></br>{" "}
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </body>
  );
}

export default AdminPage;
