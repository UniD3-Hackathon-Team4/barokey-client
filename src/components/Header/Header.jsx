import * as S from "./Header.style";
import React, { useState } from "react";

const Header = () => {
	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	const keywordStyle = {
		borderRadius: "20px",
		background: "transparent",
		padding: "10px 40px",
		margin: "5px ",
		marginBottom: "10px",
		border: "2px solid #3c63e8",
	};

	return (
		<S.Header>
			<S.Logo>바로키</S.Logo>
			<S.MainSection>
				<S.MainSectionFullname>바로 이동하는 키워드</S.MainSectionFullname>
				<S.MainSectionDescription>
					바로 확인하는 지역 정보, 키워드로 지키는 우리의 안전
				</S.MainSectionDescription>
			</S.MainSection>
			<S.Navbar>
				<S.NavbarSection style={keywordStyle}>키워드</S.NavbarSection>
				<S.NavbarSection
					onClick={() => handleItemClick("전체 혼잡도")}
					selected={selectedItem === "전체 혼잡도"}
				>
					전체 혼잡도
				</S.NavbarSection>
				<S.NavbarSection
					onClick={() => handleItemClick("지역 혼잡도")}
					selected={selectedItem === "지역 혼잡도"}
				>
					지역 혼잡도
				</S.NavbarSection>
				<S.NavbarSection
					onClick={() => handleItemClick("도로 상황")}
					selected={selectedItem === "도로 상황"}
				>
					도로 상황
				</S.NavbarSection>
				<S.NavbarSection
					onClick={() => handleItemClick("지하철 상황")}
					selected={selectedItem === "지하철 상황"}
				>
					지하철 상황
				</S.NavbarSection>
			</S.Navbar>
		</S.Header>
	);
};

export default Header;
