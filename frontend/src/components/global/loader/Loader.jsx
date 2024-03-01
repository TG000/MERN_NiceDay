import React, { useEffect } from "react";
import "./Loader.css";

const Loader = () => {
	useEffect(() => {
		/*------------------
            Preloader
        --------------------*/
		$(".loader").fadeOut();
		$("#preloader").delay(200).fadeOut("slow");
	});

	return (
		<div id="preloader">
			<div className="loader"></div>
		</div>
	);
};

export default Loader;
