import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Callback() {
  var userid = "";
  const { user, isAuthenticated, isLoading } = useAuth0();
  isAuthenticated ? (userid = user.sub.slice(14)) : (userid = "user");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  window.location.href = `http://localhost:3001/${userid}`;
}

export default Callback;
