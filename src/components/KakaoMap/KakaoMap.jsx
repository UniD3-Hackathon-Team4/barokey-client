import { Map, Polygon, MapTypeId } from 'react-kakao-maps-sdk';
import { TABS, POLYGON_PATH_LIST } from '../../constants';
import { useCallback } from 'react';
import { useQueryParameters } from '../../hooks';

// 강동구청 위도, 경도
const DEFAULT_MAP_LOCATION = Object.freeze({
  latitude: 37.529774936678,
  longitude: 127.12351320724,
});

const KakaoMap = () => {
  const query = useQueryParameters();

  const currentTab = query.get('tabs');

  const renderMapOptionElements = useCallback(() => {
    const { OVERALL_LOCAL_CONGESTION, PARTIAL_LOCAL_CONGESTION, TRAFFIC_CONDITIONS } = TABS;

    switch (currentTab) {
      case OVERALL_LOCAL_CONGESTION:
      case PARTIAL_LOCAL_CONGESTION:
        return (
          <Polygon
            path={POLYGON_PATH_LIST}
            strokeWeight={3}
            strokeColor="#39DE2A"
            strokeOpacity={0.8}
            strokeStyle="longdash"
            fillColor="#A2FF99"
            fillOpacity={0.7}
          />
        );

      case TRAFFIC_CONDITIONS:
        return <MapTypeId type={'TRAFFIC'} />;

      default:
        return null;
    }
  }, [currentTab]);

  return (
    <Map
      center={{ lat: DEFAULT_MAP_LOCATION.latitude, lng: DEFAULT_MAP_LOCATION.longitude }}
      level={currentTab === TABS.PARTIAL_LOCAL_CONGESTION ? 5 : 8}
      style={{ width: '100%', height: '600px' }}
    >
      {renderMapOptionElements()}
    </Map>
  );
};

export default KakaoMap;
