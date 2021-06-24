import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  return (
    <>
      {users.length && <p>Loading ...</p>}
      {users.length > 0 &&
        users.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      {users.length === 0 && !loading && <p>No User Found</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};
export default Users;
