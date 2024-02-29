import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AdminRoute = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
