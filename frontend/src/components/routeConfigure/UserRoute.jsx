import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UserRoute = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default UserRoute;
