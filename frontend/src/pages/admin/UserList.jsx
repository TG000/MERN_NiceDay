import React, { useEffect, useState } from "react";
import { FaEdit, FaTimes, FaCheck, FaTrash } from "react-icons/fa";
import {
	useGetUsersQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
} from "../../redux/api/userApiSlice";
import { Loader, Message } from "../../components/";
import { toast } from "react-toastify";

const UserList = () => {
	const { data: users, refetch, isLoading, error } = useGetUsersQuery();
	const [deleteUser] = useDeleteUserMutation();
	const [updateUser] = useUpdateUserMutation();

	const [editableUserId, setEditableUserId] = useState(null);
	const [editableUserName, setEditableUserName] = useState("");
	const [editableUserEmail, setEditableUserEmail] = useState("");

	useEffect(() => {
		refetch();
	}, [refetch]);

	const deleteHandler = async (id) => {
		if (window.confirm("Are you sure?")) {
			try {
				await deleteUser(id);
			} catch (error) {
				toast.error(error.data.message || error.message);
			}
		}
	};

	const toggleEdit = (id, username, email) => {
		setEditableUserId(id);
		setEditableUserName(username);
		setEditableUserEmail(email);
	};

	const updateHandler = async (id) => {
		try {
			await updateUser({
				userId: id,
				full_name: editableUserName,
				email: editableUserEmail,
			});

			setEditableUserId(null);
			refetch();
		} catch (error) {
			toast.error(error.data.message || error.message);
		}
	};

	return (
		<div className="p-5">
			<h1
				className="mb-3"
				style={{
					fontSize: "1.5rem",
					lineHeight: "2rem",
					fontWeight: "600",
				}}
			>
				Users
			</h1>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data.message || error.message}
				</Message>
			) : (
				<div className="d-flex flex-column">
					{/* <AdminMenu/> */}
					<table className="mx-auto" style={{ width: "100%" }}>
						<thead>
							<tr>
								<th className="px-3 py-2 text-left">ID</th>
								<th className="px-3 py-2 text-left">NAME</th>
								<th className="px-3 py-2 text-left">EMAIL</th>
								<th className="px-3 py-2 text-left">ADMIN</th>
								<th className="px-3 py-2 text-left"></th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user._id}>
									<td className="px-3 py-2">{user._id}</td>
									<td className="px-3 py-0">
										{editableUserId === user._id ? (
											<div className="d-flex align-items-center">
												<input
													type="text"
													value={editableUserName}
													onchange={(e) =>
														setEditableUserName(
															e.target.value
														)
													}
													className="p-2 border rounded-lg"
													style={{ width: "100%" }}
												/>
												<button
													onClick={() =>
														updateHandler(user._id)
													}
													className="ml-2 bg-blue-500 text-white py-2 px-3 rounded-lg"
												>
													<FaCheck />
												</button>
											</div>
										) : (
											<div className="d-flex align-items-center">
												{user.full_name} {""}
												<button
													onClick={() =>
														toggleEdit(
															user._id,
															user.full_name,
															user.email
														)
													}
												>
													<FaEdit
														style={{
															marginLeft: "1rem",
														}}
													/>
												</button>
											</div>
										)}
									</td>
									<td className="py-3 px-2">
										{editableUserId === user._id ? (
											<div className="d-flex align-item-center">
												<input
													type="text"
													value={editableUserEmail}
													onchange={(e) =>
														setEditableUserEmail(
															e.target.value
														)
													}
													className="p-2 border rounded-lg"
													style={{ width: "100%" }}
												/>
												<button
													onchange={() =>
														updateHandler(user._id)
													}
													className="ml-2 bg-blue-500
													text-white py-2 px-3
													rounded-lg"
												>
													<FaCheck />
												</button>
											</div>
										) : (
											<div className="d-flex align-items-center">
												<p>{user.email}</p>
												<button
													onClick={() =>
														toggleEdit(
															user._id,
															user.full_name,
															user.email
														)
													}
												>
													<FaEdit
														style={{
															marginLeft: "1rem",
														}}
													/>
												</button>
											</div>
										)}
									</td>
									<td className="px-3 py-2">
										{user.isAdmin ? (
											<FaCheck
												style={{ color: "green" }}
											/>
										) : (
											<FaTimes style={{ color: "red" }} />
										)}
									</td>
									<td className="px-3 py-2">
										{!user.isAdmin && (
											<div className="d-flex">
												<button
													onClick={() =>
														deleteHandler(user._id)
													}
													className="bg-red-600 hover:bg-red-700 text-white font-weight-bold py-2 px-3 rounded"
												>
													<FaTrash />
												</button>
											</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default UserList;
