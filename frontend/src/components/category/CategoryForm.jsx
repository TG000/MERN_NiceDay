const CategoryForm = ({
	value,
	setValue,
	handleSubmit,
	buttonText = "Submit",
	handleDelete,
}) => {
	return (
		<div className="p-3">
			<form onSubmit={handleSubmit} className="py-3">
				<input
					type="text"
					className="p-3 border rounded-lg w-100"
					placeholder="Write category name"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>

				<div className="d-flex justify-content-between">
					<button className="bg-pink-500 text-white py-2 px-3 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
						{buttonText}
					</button>

					{handleDelete && (
						<button
							onClick={handleDelete}
							className="bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
						>
							Delete
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
