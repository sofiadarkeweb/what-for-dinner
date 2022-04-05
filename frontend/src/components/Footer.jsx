import React from "react";

function Footer() {
	const thisYear = new Date().getFullYear();
	return (
		<div>
			<p style={{ fontSize: "0.8em" }}>
				Made by{" "}
				<a
					style={{ color: "pink", textDecoration: "none" }}
					href="http://sofiadarke.se"
				>
					Sofia Darke
				</a>{" "}
				in {thisYear}
			</p>
		</div>
	);
}

export default Footer;
