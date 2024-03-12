import React from "react";
import { getSelectedUser } from "../services/apiUsers";
import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const xc = useLoaderData();
  console.log(xc.data);
  return (
    <div>
      <h3>{xc.data.first_name}</h3>
      <img src={xc.data.avatar} alt="avatar" />
      <p>{xc.data.email} </p>
    </div>
  );
};

export const loader = async ({ params }) => {
  const userDetail = await getSelectedUser(params.id);
  return userDetail;
};

export default UserDetail;
