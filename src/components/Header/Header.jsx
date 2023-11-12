import * as S from './Header.style';
// import { useState } from 'react';
// import {
//   TotalCongestionButton,
//   LocalCongestionButton,
//   SubwayCongestionButton,
//   RoadView,
// } from '../../components';
import { TABS } from '../../constants';
import { useQueryParameters } from '../../hooks';

const NAV_ITEM_LIST = [
  {
    id: 1,
    queryParameter: TABS.KEYWORD,
    label: '키워드',
  },
  {
    id: 2,
    queryParameter: TABS.OVERALL_LOCAL_CONGESTION,
    label: '전체 혼잡도',
  },
  {
    id: 3,
    queryParameter: TABS.PARTIAL_LOCAL_CONGESTION,
    label: '지역 혼잡도',
  },
  {
    id: 4,
    queryParameter: TABS.TRAFFIC_CONDITIONS,
    label: '도로 상황',
  },
];

const Header = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  const query = useQueryParameters();

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  // const keywordStyle = {
  //   borderRadius: '20px',
  //   background: 'transparent',
  //   padding: '10px 40px',
  //   margin: '5px ',
  //   marginBottom: '10px',
  //   border: '2px solid #3c63e8',
  // };

  // const renderMapComponent = () => {
  //   switch (selectedItem) {
  //     case '전체 혼잡도':
  //       return <TotalCongestionButton />;
  //     case '지역 혼잡도':
  //       return <LocalCongestionButton />;
  //     case '도로 상황':
  //       return <RoadView />;
  //     case '지하철 상황':
  //       return <SubwayCongestionButton />;
  //     default:
  //       return null;
  //   }
  // };

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
        {NAV_ITEM_LIST.map(({ id, queryParameter, label }) => (
          <S.NavLink
            key={id}
            href={`?tabs=${queryParameter}`}
            selected={query.get('tabs') === queryParameter}
          >
            {label}
          </S.NavLink>
        ))}
      </S.Navbar>
      {/* <div style={{ marginTop: '20px' }}>{renderMapComponent()}</div> */}
    </S.Header>
  );
};

export default Header;
