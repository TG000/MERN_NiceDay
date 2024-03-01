const Modal = ({ isOpen, onClose, children }) => {
	return (
		<>
			{isOpen && (
				<div className="position-fixed inset-0 d-flex align-items-center justify-content-center z-50">
					<div className="postion-fixed inset-0 bg-black opacity-50"></div>
					<div className="postion-absolute bg-white p-4 rounded-lg z-10 text-right">
						<button
							className="text-black font-semibold hover:text-gray-700 focus:outline-none mr-2"
							onClick={onClose}
						>
							X
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
