import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	/* max-width: 1100px; */
	background-color: #f8fafe;
	border-radius: 10px;
	margin: 10px;
`;

export const Header = styled.h2`
	font-size: 28px;
	font-weight: 700;
	padding: 10px;
	margin-bottom: 20px;
`;

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	max-width: 1100px;
	font-size: 15px;
	padding: 20px;
	background-color: white;
	border-radius: 20px;
`;

export const ContentsTitle = styled.h3`
	display: flex;
	/* justify-content: center; */
	font-weight: 700;
	margin-bottom: 10px;
	font-size: 17px;
`;

export const ContentsDate = styled.span`
	display: flex;
	/* justify-content: center; */
	margin-bottom: 15px;
	color: gray;
`;

export const ContentsSummary = styled.p`
	display: flex;
	/* justify-content: center; */
`;
