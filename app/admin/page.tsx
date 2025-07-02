"use client";

import { useUser } from "@/contexts/user";
import React from "react";

type Props = {};

const Admin = (props: Props) => {
  const { user, token } = useUser();
  return (
    <>
      <h1>Bienvenue, {user?.name}</h1>
      <h1>Email, {user?.email}</h1>
      <p>Ton token : {token?.slice(0, 10)}...</p>
    </>
  );
};

export default Admin;
