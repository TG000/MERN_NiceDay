import React from "react";
import { Footer, Loader, Navbar } from "../../components/";

function Profile() {
	return (
		<>
			{/**Infor & Img */}
			<section>
				<div className="w-3/4">
					<div className="w-1/4 pr-3">
						<div className="w-1/4 h-1/4 rounded-full ring-2">
							<img className="bg-[url('../../img/default_img.jpg')]" src="" alt="" sizes="" srcset="" />
						</div>
					</div>
					<div className="w-3/4 grid grid-cols-2">
						<div className="">
							<label htmlFor="">Username</label>
							<br />
							<input type="text" name="" id="" placeholder="username"/>
						</div>
						<div className="">
							<label htmlFor="">E-mail</label>
							<br />
							<input type="text" name="" id="" placeholder="example@gmail.com"/>
						</div>
						<div className="">
							<label htmlFor="">Password</label>
							<br />
							<input type="password" name="" id="" placeholder="******"/>
						</div>
						<div className="button">Change Information</div>
					</div>
				</div>
			</section>
			{/**His Story */}
			<section>
				<h2 className="border-b-2">Purchase History</h2>
				<div className="w3/4 grid grid-cols-2">
					{/**Ben nay la cua ngay thang */}
					<div className="w-1/4 text-center border-r-2">
						<h3>01/03/2024</h3>
					</div>
					<div className="w-3/4 grid grid-flow-row">
						{/**Ben nay la ten san pham gia tien cac thu */}
						<div className="border-b-2">
							<p>Tên sản phẩm</p>
							<p>Giá tiền</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Profile;
