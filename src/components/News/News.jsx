import * as S from "./News.style";
import React from "react";

const News = () => {
	return (
		<S.Container>
			<S.Header>소 식</S.Header>
			<S.Contents>
				<S.ContentsTitle>전국 출몰하는</S.ContentsTitle>
				<S.ContentsDate>2023년 </S.ContentsDate>
				<S.ContentsSummary> 전국에서 빈대 신도가 잇따르면서</S.ContentsSummary>
			</S.Contents>
		</S.Container>
	);
};

export default News;
