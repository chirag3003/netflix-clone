import styled from "styled-components";

export default styled.nav`
	display: flex;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 5;
	justify-content: space-between;
	padding: 10px 20px;
	transition: all 0.5s ease-in;
	z-index: 1000;
	.logo {
		object-fit: contain;
		max-width: 100px;
	}
	.avatar {
		max-width: 40px;
		object-fit: contain;
	}
`;
