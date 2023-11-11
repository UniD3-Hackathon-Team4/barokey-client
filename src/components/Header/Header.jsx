// Header.jsx 파일 내에서 수정
import * as S from "./Header.style";
import React from "react";

const Header = () => {
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
				<S.NavbarSection>키워드</S.NavbarSection>
				<S.NavbarSection>전체 혼잡도</S.NavbarSection>
				<S.NavbarSection>지역 혼잡도</S.NavbarSection>
				<S.NavbarSection>도로 상황</S.NavbarSection>
				<S.NavbarSection>지하철 상황</S.NavbarSection>
			</S.Navbar>
		</S.Header>
	);
};

export default Header;
