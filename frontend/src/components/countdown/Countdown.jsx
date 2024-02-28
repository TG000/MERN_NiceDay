import React from "react";
import { useCountdown } from "../../utils/";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	return (
		<div className="categories__deal__countdown__timer" id="countdown">
			<div className="cd-item">
				<span>{days}</span>
				<p>Days</p>
			</div>
			<div className="cd-item">
				<span>{hours}</span>
				<p>Hours</p>
			</div>
			<div className="cd-item">
				<span>{minutes}</span>
				<p>Minutes</p>
			</div>
			<div className="cd-item">
				<span>{seconds}</span>
				<p>Seconds</p>
			</div>
		</div>
	);
};

export default Countdown;
