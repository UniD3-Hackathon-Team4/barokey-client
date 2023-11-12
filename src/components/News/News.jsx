import * as S from './News.style';
import React, { Suspense } from 'react';
import { getKeywordDetails } from './api';
import { useQuery } from '@tanstack/react-query';

const News = ({ keyword = '화재' }) => {
  const { data } = useQuery({
    queryKey: ['headlines', keyword],
    queryFn: () => getKeywordDetails(keyword),
    suspense: true,
  });
  const headlines = data.headlines;
  return (
    <S.Container>
      <S.Header>소 식</S.Header>
      <Suspense fallback={<div>Loading...</div>}>
        {headlines.map((headline) => {
          return (
            <S.Contents href={headline.url}>
              <S.ContentsTitle>{headline.title}</S.ContentsTitle>
              <S.ContentsDate>{headline.date}</S.ContentsDate>
              <S.ContentsSummary>{headline.summary}</S.ContentsSummary>
            </S.Contents>
          );
        })}
      </Suspense>
    </S.Container>
  );
};

export default News;
