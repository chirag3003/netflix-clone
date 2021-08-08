import React, { useEffect, useState } from "react";
import NavStyle from "./Nav.style";
import Logo from "./logo.png";
import Avatar from "./Netflix-avatar.png";

function Nav() {
	const [show, handleShow] = useState(false);
	let scrollHandler = () => {
		console.log("scrolled");
		if (window.scrollY > 100) {
			handleShow(true);
		} else handleShow(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);
	let navBackStyle;
	if (show) {
		navBackStyle = {
			backgroundColor: "#111",
		};
	} else navBackStyle = {};
	return (
		<NavStyle style={navBackStyle}>
			<img src={Logo} alt='netflix' className='logo' />
			<img src={Avatar} alt='avatar' className='avatar' />
		</NavStyle>
	);
}

export default Nav;
