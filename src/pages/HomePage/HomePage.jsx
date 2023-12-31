import { Header, KakaoMap, News, WordCloud } from '../../components'; // Header 컴포넌트 import 추가
import { TABS } from '../../constants';
import { useQueryParameters } from '../../hooks';
import * as S from './HomePage.style';

const HomePage = () => {
  const query = useQueryParameters();

  const currentTab = query.get('tabs');

  return (
    <S.PageLayout>
      <Header />
      {currentTab !== TABS.KEYWORD && <KakaoMap />}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5vh',
        }}
      >
       {currentTab === TABS.KEYWORD && <WordCloud
          keywords={[
            { keyword: '폭우', count: 10 },
            { keyword: '화재 발생', count: 8 },
            { keyword: '칼부림 난동', count: 5 },
            { keyword: '건물붕괴', count: 7 },
            { keyword: '빈대 출몰', count: 10 },
            { keyword: '스토킹 범죄', count: 8 },
            { keyword: '교통사고 사망', count: 5 },
            { keyword: '폭염', count: 7 },
            { keyword: '약물 오남용', count: 10 },
            { keyword: '인파', count: 8 },
            { keyword: '전염병 전파', count: 5 },
            { keyword: '실종', count: 7 },
            { keyword: '성범죄', count: 10 },
            { keyword: '한파', count: 8 },
            { keyword: '자살', count: 5 },
            { keyword: '극단적인 선택', count: 7 },
          ]}
        />}
      </div>
      <News />
    </S.PageLayout>
  );
};

export default HomePage;
