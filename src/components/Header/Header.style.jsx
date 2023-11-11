import styled from "@emotion/styled";
// import { Colors } from "../../theme";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 220px;
	margin: 0 auto;
	padding: 10px;
	background: linear-gradient(92deg, #48c6ef 0%, rgba(111, 134, 214, 0) 100%), #3c63e8;
`;

export const Logo = styled.div`
	color: #fff;
	font-size: 20px;
	font-weight: 700;
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
	font-size: 18px;
`;

export const Navbar = styled.nav`
	display: flex;
	text-align: center;
	justify-content: space-around;
	max-width: 800px;
	margin: 0 auto;
	gap: 40px;
`;

export const NavbarSection = styled.div`
	color: #fff;
	text-align: center;
	font-size: 17px;
	font-weight: 700;
	padding: 10px 20px;
	margin: 5px;

	&:first-child {
		border-radius: 20px;
		background: transparent;
		padding: 8px 30px;
		margin: 5px;
		margin-bottom: 10px;
		border: 2px solid #3c63e8; /* 첫 번째 NavbarSection에만 테두리 추가 */
	}
`;
