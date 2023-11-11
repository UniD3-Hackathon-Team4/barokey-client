import styled from "@emotion/styled";
// import { Colors } from "../../theme";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 240px;
	margin: 0 auto;
	padding: 10px;
	background: linear-gradient(92deg, #48c6ef 0%, rgba(111, 134, 214, 0) 100%), #3c63e8;
`;

export const Logo = styled.div`
	color: #fff;
	font-size: 20px;
	font-weight: 700;
	margin-top: 10px;
	margin-left: 26px;
`;

export const MainSection = styled.div`
	color: #fff;
	text-align: center;
	margin-bottom: 30px;
	margin-top: 30px;
`;

export const MainSectionFullname = styled.h1`
	margin-bottom: 10px;
	font-size: 48px;
	font-weight: 700;
`;

export const MainSectionDescription = styled.span`
	text-align: center;
	font-size: 16px;
`;

export const Navbar = styled.nav`
	display: flex;
	text-align: center;
	justify-content: space-around;
	max-width: 800px;
	margin: 0 auto;
	gap: 40px;
	font-weight: 700;
`;

export const NavbarSection = styled.span`
	color: #fff;
	text-align: center;
	align-content: center;
	font-size: 17px;
	padding: 10px 20px;
	margin: 5px;
	cursor: pointer;
	background: ${(props) => (props.selected ? "#3c63e8" : "transparent")};
	border-radius: ${(props) => (props.selected ? "20px" : "0")};
	border: ${(props) => (props.selected ? "2px solid #3c63e8" : "none")};

	&:hover {
		background: ${(props) => (props.selected ? "#3c63e8" : "#f4f6f8")};
		color: ${(props) => (props.selected ? "#fff" : "#000")};
		border-radius: ${(props) => (props.selected ? "20px" : "20px")};
		opacity: ${(props) => (props.selected ? "1" : "0.7")};
	}
`;

// export const Navbar = styled.nav`
// 	display: flex;
// 	text-align: center;
// 	justify-content: space-around;
// 	max-width: 800px;
// 	margin: 0 auto;
// 	gap: 40px;
// `;

// export const NavbarSection = styled.span`
// 	color: #fff;
// 	text-align: center;
// 	font-size: 17px;
// 	/* font-weight: 700; */
// 	padding: 10px 20px;
// 	margin: 5px;

// 	&:first-child {
// 		border-radius: 20px;
// 		background: transparent;
// 		padding: 8px 40px;
// 		margin: 5px;
// 		margin-bottom: 10px;
// 		border: 2px solid #3c63e8; /* 첫 번째 NavbarSection에만 테두리 추가 */
// 	}
// `;

//
