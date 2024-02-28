import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-2xl ">
    <h1 className="text-4xl text-violet-600">DashBoard</h1>
    { !!user && ( <h1 className="text-4xl">Hi {user.name}!</h1> )}
  </div>
  );
};

export default Dashboard;
