import styled from "@emotion/styled";
// import { Colors } from "../../theme";

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* position: fixed; */
	width: 100%;
	height: 220px;
	margin: 0 auto;
	padding: 10px;
	background: linear-gradient(92deg, #48c6ef 0%, rgba(111, 134, 214, 0) 100%), #3c63e8;
	/* backdrop-filter: blur(10px); */
	/* z-index: 10; */
	/* top: 0; 섹션 위에 고정 */
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
	margin-bottom: 36px;
	margin-top: 20px;
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
	/* width: 500px; */
	/* padding: 0 100px; */
	/* margin-bottom: 10px; */
`;

export const NavbarSection = styled.nav`
	color: #fff;
	text-align: center;
	font-size: 17px;
	font-weight: 700;
	padding: 10px 20px;
`;

// export const Inner = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 100%;
// 	max-width: 1100px;
// 	padding: 0 20px;
// `;

// export const Nav = styled.nav`
// 	display: flex;
// 	gap: 20px;
// 	align-items: center;
// `;
